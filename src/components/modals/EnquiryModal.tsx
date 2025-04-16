
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Mic, ImagePlus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface EnquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EnquiryModal({ open, onOpenChange }: EnquiryModalProps) {
  const isMobile = useIsMobile();
  const [date, setDate] = React.useState<Date>();

  // If mobile, render as a drawer (bottom sheet), otherwise as a dialog
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="bg-[#F3F0FF] border-t border-[#7E22CE]/30">
          <div className="mx-auto mt-4 h-1 w-[32px] rounded-full bg-[#7E22CE]/30" />
          <DrawerHeader>
            <DrawerTitle className="text-[#7E22CE]">New Enquiry</DrawerTitle>
            <DrawerDescription>Capture client details and requirements</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-2">
            <MobileEnquiryForm date={date} setDate={setDate} />
          </div>
          <DrawerFooter className="border-t border-neutral-200 pt-4">
            <Button className="bg-[#7E22CE] hover:bg-[#7E22CE]/90">Submit Enquiry</Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#F3F0FF] border border-[#7E22CE]/30 max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-[#7E22CE]">New Enquiry</DialogTitle>
          <DialogDescription>Capture client details and requirements</DialogDescription>
        </DialogHeader>
        <DesktopEnquiryForm date={date} setDate={setDate} />
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button className="bg-[#7E22CE] hover:bg-[#7E22CE]/90">Submit Enquiry</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface EnquiryFormProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

function DesktopEnquiryForm({ date, setDate }: EnquiryFormProps) {
  return (
    <div className="grid grid-cols-2 gap-6 py-4">
      <div className="space-y-4">
        <h3 className="font-medium text-sm text-neutral-500">Client Information</h3>
        <div className="space-y-2">
          <Label htmlFor="name">Client Name (optional)</Label>
          <Input id="name" placeholder="Enter client name" className="bg-white border-neutral-200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input id="phone" placeholder="Enter phone number" className="bg-white border-neutral-200" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email (optional)</Label>
          <Input id="email" type="email" placeholder="Enter email address" className="bg-white border-neutral-200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address/Location (optional)</Label>
          <Input id="address" placeholder="Enter address" className="bg-white border-neutral-200" />
        </div>
      </div>

      <div className="space-y-4 bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-medium text-sm text-neutral-500">Enquiry Details</h3>
        <div className="space-y-2">
          <Label htmlFor="title">Title/Subject <span className="text-red-500">*</span></Label>
          <Input id="title" placeholder="Enter enquiry title" className="bg-white border-neutral-200" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description" 
            placeholder="Enter enquiry details" 
            className="min-h-[100px] bg-white border-neutral-200" 
          />
        </div>
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox id="siteVisit" />
          <Label htmlFor="siteVisit">Schedule Site Visit</Label>
        </div>
        <div className="flex flex-col space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal w-full",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="source">Enquiry Source</Label>
          <Select>
            <SelectTrigger id="source" className="bg-white border-neutral-200">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">Phone Call</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Voice Input
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ImagePlus className="h-4 w-4" />
            Add Photos
          </Button>
        </div>
      </div>
    </div>
  );
}

function MobileEnquiryForm({ date, setDate }: EnquiryFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium text-sm text-neutral-500">Client Information</h3>
        <div className="space-y-2">
          <Label htmlFor="mobile-name">Client Name (optional)</Label>
          <Input id="mobile-name" placeholder="Enter client name" className="bg-white border-neutral-200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input id="mobile-phone" placeholder="Enter phone number" className="bg-white border-neutral-200" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-email">Email (optional)</Label>
          <Input id="mobile-email" type="email" placeholder="Enter email address" className="bg-white border-neutral-200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-address">Address/Location (optional)</Label>
          <Input id="mobile-address" placeholder="Enter address" className="bg-white border-neutral-200" />
        </div>
      </div>

      <div className="space-y-4 bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-medium text-sm text-neutral-500">Enquiry Details</h3>
        <div className="space-y-2">
          <Label htmlFor="mobile-title">Title/Subject <span className="text-red-500">*</span></Label>
          <Input id="mobile-title" placeholder="Enter enquiry title" className="bg-white border-neutral-200" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-description">Description</Label>
          <Textarea 
            id="mobile-description" 
            placeholder="Enter enquiry details" 
            className="min-h-[100px] bg-white border-neutral-200" 
          />
        </div>
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox id="mobile-siteVisit" />
          <Label htmlFor="mobile-siteVisit">Schedule Site Visit</Label>
        </div>
        <div className="flex flex-col space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal w-full",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-source">Enquiry Source</Label>
          <Select>
            <SelectTrigger id="mobile-source" className="bg-white border-neutral-200">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">Phone Call</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2 mt-4 justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Voice
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ImagePlus className="h-4 w-4" />
            Photos
          </Button>
        </div>
      </div>
    </div>
  );
}
