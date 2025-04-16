
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Mic, ImagePlus, MapPin, ArrowLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface EnquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  enquiryId?: string;
  isEditing?: boolean;
}

export function EnquiryModal({ open, onOpenChange, enquiryId, isEditing = false }: EnquiryModalProps) {
  const isMobile = useIsMobile();
  const [date, setDate] = useState<Date>();
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);
  const [isSiteVisitRequired, setIsSiteVisitRequired] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: isEditing ? "Enquiry Updated" : "Enquiry Created",
      description: isEditing 
        ? "The enquiry has been updated successfully." 
        : "A new enquiry has been created successfully."
    });
    
    onOpenChange(false);
  };

  // If mobile, render as a drawer (bottom sheet), otherwise as a dialog
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="bg-[#F3F0FF] border-t border-[#7E22CE]/30 max-h-[90vh]">
          <div className="mx-auto mt-4 h-1 w-[32px] rounded-full bg-[#7E22CE]/30" />
          <DrawerHeader className="px-4">
            <div className="flex items-center mb-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 mr-2 -ml-2" 
                onClick={() => onOpenChange(false)}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <DrawerTitle className="text-[#7E22CE]">
                {isEditing ? "Edit Enquiry" : "New Enquiry"}
              </DrawerTitle>
            </div>
            <DrawerDescription>
              {isEditing 
                ? "Update the enquiry details" 
                : "Capture client details and requirements"}
            </DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit}>
            <div className="px-4 py-2 overflow-y-auto max-h-[calc(90vh-180px)]">
              <MobileEnquiryForm 
                date={date} 
                setDate={setDate} 
                isSiteVisitRequired={isSiteVisitRequired}
                setIsSiteVisitRequired={setIsSiteVisitRequired}
                isEditing={isEditing}
              />
            </div>
            <DrawerFooter className="border-t border-neutral-200 pt-4 px-4 pb-6 sticky bottom-0 bg-[#F3F0FF]">
              <Button type="submit" className="bg-[#7E22CE] hover:bg-[#7E22CE]/90 w-full">
                {isEditing ? "Update Enquiry" : "Submit Enquiry"}
              </Button>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="w-full">
                Cancel
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#F3F0FF] border border-[#7E22CE]/30 max-w-[650px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-[#7E22CE]">
            {isEditing ? "Edit Enquiry" : "New Enquiry"}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Update the enquiry details" 
              : "Capture client details and requirements"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-180px)] pr-2">
          <DesktopEnquiryForm 
            date={date} 
            setDate={setDate} 
            isAddressExpanded={isAddressExpanded}
            setIsAddressExpanded={setIsAddressExpanded}
            isSiteVisitRequired={isSiteVisitRequired}
            setIsSiteVisitRequired={setIsSiteVisitRequired}
            isEditing={isEditing}
          />
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-[#7E22CE] hover:bg-[#7E22CE]/90">
              {isEditing ? "Update Enquiry" : "Submit Enquiry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface EnquiryFormProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  isSiteVisitRequired: boolean;
  setIsSiteVisitRequired: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
  isAddressExpanded?: boolean;
  setIsAddressExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
}

function DesktopEnquiryForm({ 
  date, 
  setDate, 
  isAddressExpanded, 
  setIsAddressExpanded,
  isSiteVisitRequired,
  setIsSiteVisitRequired,
  isEditing
}: EnquiryFormProps) {
  return (
    <div className="grid grid-cols-2 gap-6 py-4">
      <div className="space-y-4">
        <h3 className="font-medium text-sm text-neutral-500">Client Information</h3>
        <div className="space-y-2">
          <Label htmlFor="title">Enquiry Title <span className="text-red-500">*</span></Label>
          <Input 
            id="title" 
            placeholder="Enter enquiry title" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "Kitchen Renovation" : ""}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Client Name (optional)</Label>
          <Input 
            id="name" 
            placeholder="Enter client name" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "John Smith" : ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input 
            id="phone" 
            placeholder="Enter phone number" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "07700 900123" : ""}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email (optional)</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter email address" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "john.smith@example.com" : ""}
          />
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="address" className="border-none">
            <AccordionTrigger className="py-2 text-sm font-medium">
              Address Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input 
                      id="postcode" 
                      placeholder="Enter postcode" 
                      className="bg-white border-neutral-200" 
                      defaultValue={isEditing ? "M20 1FG" : ""}
                    />
                  </div>
                  <div className="self-end">
                    <Button type="button" variant="outline" size="sm" className="mt-2">
                      Find
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <div className="relative">
                    <Input 
                      id="address" 
                      placeholder="Enter address" 
                      className="bg-white border-neutral-200 pl-9" 
                      defaultValue={isEditing ? "14 Willow Drive, Manchester, M20 1FG" : ""}
                    />
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-4 bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-medium text-sm text-neutral-500">Enquiry Details</h3>
        <div className="space-y-2">
          <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
          <Textarea 
            id="description" 
            placeholder="Enter enquiry details" 
            className="min-h-[100px] bg-white border-neutral-200"
            defaultValue={isEditing ? "Complete kitchen renovation including new cabinets, countertops, and appliances. Looking for a quote within the next week." : ""}
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="notes">Internal Notes (optional)</Label>
          <Textarea 
            id="notes" 
            placeholder="Add any internal notes here" 
            className="min-h-[60px] bg-white border-neutral-200"
            defaultValue={isEditing ? "Client mentioned they have a flexible budget but want quality materials" : ""}
          />
        </div>
        
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox 
            id="siteVisit" 
            checked={isSiteVisitRequired}
            onCheckedChange={(checked) => setIsSiteVisitRequired(checked as boolean)}
          />
          <Label htmlFor="siteVisit">Schedule Site Visit</Label>
        </div>
        
        {isSiteVisitRequired && (
          <div className="flex flex-col space-y-2">
            <Label htmlFor="visitDate">Preferred Visit Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="visitDate"
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
        )}
        
        <div className="space-y-2">
          <Label htmlFor="source">Enquiry Source</Label>
          <Select defaultValue={isEditing ? "phone" : ""}>
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
        
        <div className="space-y-2">
          <Label htmlFor="value">Estimated Value (optional)</Label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-neutral-500">£</span>
            <Input 
              id="value" 
              type="number" 
              placeholder="0.00" 
              className="bg-white border-neutral-200 pl-7" 
              defaultValue={isEditing ? "15000" : ""}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mt-4">
          <Button type="button" variant="outline" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Voice Input
          </Button>
          <Button type="button" variant="outline" className="flex items-center gap-2">
            <ImagePlus className="h-4 w-4" />
            Add Photos
          </Button>
        </div>
      </div>
    </div>
  );
}

function MobileEnquiryForm({ 
  date, 
  setDate, 
  isSiteVisitRequired,
  setIsSiteVisitRequired,
  isEditing
}: EnquiryFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium text-sm text-neutral-500">Client Information</h3>
        <div className="space-y-2">
          <Label htmlFor="mobile-title">Enquiry Title <span className="text-red-500">*</span></Label>
          <Input 
            id="mobile-title" 
            placeholder="Enter enquiry title" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "Kitchen Renovation" : ""}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-name">Client Name (optional)</Label>
          <Input 
            id="mobile-name" 
            placeholder="Enter client name" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "John Smith" : ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input 
            id="mobile-phone" 
            placeholder="Enter phone number" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "07700 900123" : ""}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mobile-email">Email (optional)</Label>
          <Input 
            id="mobile-email" 
            type="email" 
            placeholder="Enter email address" 
            className="bg-white border-neutral-200" 
            defaultValue={isEditing ? "john.smith@example.com" : ""}
          />
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="address" className="border-none">
            <AccordionTrigger className="py-2 text-sm font-medium">
              Address Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="mobile-postcode">Postcode</Label>
                    <Input 
                      id="mobile-postcode" 
                      placeholder="Enter postcode" 
                      className="bg-white border-neutral-200" 
                      defaultValue={isEditing ? "M20 1FG" : ""}
                    />
                  </div>
                  <div className="self-end">
                    <Button type="button" variant="outline" size="sm" className="mt-2">
                      Find
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mobile-address">Full Address</Label>
                  <div className="relative">
                    <Input 
                      id="mobile-address" 
                      placeholder="Enter address" 
                      className="bg-white border-neutral-200 pl-9" 
                      defaultValue={isEditing ? "14 Willow Drive, Manchester, M20 1FG" : ""}
                    />
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-4 bg-white p-4 rounded-lg border border-neutral-200">
        <h3 className="font-medium text-sm text-neutral-500">Enquiry Details</h3>
        <div className="space-y-2">
          <Label htmlFor="mobile-description">Description <span className="text-red-500">*</span></Label>
          <Textarea 
            id="mobile-description" 
            placeholder="Enter enquiry details" 
            className="min-h-[100px] bg-white border-neutral-200" 
            defaultValue={isEditing ? "Complete kitchen renovation including new cabinets, countertops, and appliances. Looking for a quote within the next week." : ""}
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mobile-notes">Internal Notes (optional)</Label>
          <Textarea 
            id="mobile-notes" 
            placeholder="Add any internal notes here" 
            className="min-h-[60px] bg-white border-neutral-200"
            defaultValue={isEditing ? "Client mentioned they have a flexible budget but want quality materials" : ""}
          />
        </div>
        
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox 
            id="mobile-siteVisit" 
            checked={isSiteVisitRequired}
            onCheckedChange={(checked) => setIsSiteVisitRequired(checked as boolean)}
          />
          <Label htmlFor="mobile-siteVisit">Schedule Site Visit</Label>
        </div>
        
        {isSiteVisitRequired && (
          <div className="flex flex-col space-y-2">
            <Label htmlFor="mobile-visitDate">Preferred Visit Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="mobile-visitDate"
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
        )}
        
        <div className="space-y-2">
          <Label htmlFor="mobile-source">Enquiry Source</Label>
          <Select defaultValue={isEditing ? "phone" : ""}>
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
        
        <div className="space-y-2">
          <Label htmlFor="mobile-value">Estimated Value (optional)</Label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-neutral-500">£</span>
            <Input 
              id="mobile-value" 
              type="number" 
              placeholder="0.00" 
              className="bg-white border-neutral-200 pl-7"
              defaultValue={isEditing ? "15000" : ""}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mt-4">
          <Button type="button" variant="outline" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Voice
          </Button>
          <Button type="button" variant="outline" className="flex items-center gap-2">
            <ImagePlus className="h-4 w-4" />
            Photos
          </Button>
        </div>
      </div>
    </div>
  );
}
