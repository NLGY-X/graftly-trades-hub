
import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { 
  CalendarIcon, 
  MapPin, 
  Clock, 
  User2, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Package, 
  Wrench, 
  Info
} from "lucide-react";

interface JobModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusOptions = [
  { value: "scheduled", label: "Scheduled", color: "bg-blue-100 text-blue-800 border-blue-300" },
  { value: "in-progress", label: "In Progress", color: "bg-amber-100 text-amber-800 border-amber-300" },
  { value: "completed", label: "Completed", color: "bg-green-100 text-green-800 border-green-300" },
  { value: "on-hold", label: "On Hold", color: "bg-purple-100 text-purple-800 border-purple-300" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-100 text-red-800 border-red-300" }
];

export function JobModal({ open, onOpenChange }: JobModalProps) {
  const [date, setDate] = useState<Date>();
  const [status, setStatus] = useState("scheduled");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[650px] max-w-full bg-[#ECFDF5] border-l border-[#059669]/30 p-0">
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 p-6 border-b border-neutral-200">
            <SheetHeader className="text-left">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-[#059669]">Job Management</SheetTitle>
                <div>
                  {statusOptions.map(option => (
                    option.value === status && (
                      <Badge key={option.value} className={cn("ml-2", option.color)}>
                        {option.label}
                      </Badge>
                    )
                  ))}
                </div>
              </div>
              <SheetDescription>Schedule and manage job details</SheetDescription>
            </SheetHeader>
          </div>

          <div className="flex-1 overflow-auto py-6 px-6">
            {/* Status Timeline */}
            <div className="mb-6">
              <div className="flex justify-between items-center relative">
                {statusOptions.map((option, index) => (
                  <div key={option.value} className="flex flex-col items-center z-10">
                    <button
                      className={cn(
                        "w-8 h-8 rounded-full border-2",
                        status === option.value 
                          ? "border-[#059669] bg-[#059669] text-white"
                          : statusOptions.findIndex(o => o.value === status) > index
                            ? "border-[#059669] bg-[#059669] text-white"
                            : "border-neutral-300 bg-white text-neutral-400"
                      )}
                      onClick={() => setStatus(option.value)}
                    >
                      {statusOptions.findIndex(o => o.value === status) >= index ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </button>
                    <span className="text-xs mt-1 whitespace-nowrap">{option.label}</span>
                  </div>
                ))}
                <div className="absolute top-4 left-4 right-4 h-[2px] bg-neutral-200 -z-0"></div>
                <div 
                  className="absolute top-4 left-4 h-[2px] bg-[#059669] -z-0"
                  style={{ 
                    width: `${(statusOptions.findIndex(o => o.value === status) / (statusOptions.length - 1)) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" defaultValue="Kitchen Renovation" className="bg-white border-neutral-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="job-reference">Job Reference</Label>
                        <Input id="job-reference" defaultValue="J-2025-0042" className="bg-white border-neutral-200" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="job-description">Description</Label>
                      <Textarea 
                        id="job-description" 
                        className="min-h-[100px] bg-white border-neutral-200" 
                        defaultValue="Complete kitchen renovation including cabinet installation, plumbing for sink and dishwasher, and electrical work for new appliances."
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Client</Label>
                        <Select defaultValue="client1">
                          <SelectTrigger className="bg-white border-neutral-200">
                            <SelectValue placeholder="Select client" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="client1">John & Sarah Thompson</SelectItem>
                            <SelectItem value="client2">Mike Wilson</SelectItem>
                            <SelectItem value="client3">Jennifer Garcia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="border rounded-md p-3 bg-white border-neutral-200">
                        <div className="flex items-center text-sm">
                          <Phone className="h-3.5 w-3.5 mr-2 text-neutral-500" />
                          <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center text-sm mt-1">
                          <Mail className="h-3.5 w-3.5 mr-2 text-neutral-500" />
                          <span>thompson@example.com</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <Input 
                          id="location" 
                          defaultValue="123 Maple Street, Richmond" 
                          className="bg-white border-neutral-200 pl-9" 
                        />
                        <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal bg-white border-neutral-200",
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
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor="start-time">Start Time</Label>
                          <div className="relative">
                            <Input 
                              id="start-time" 
                              type="time" 
                              defaultValue="09:00" 
                              className="bg-white border-neutral-200 pl-9" 
                            />
                            <Clock className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="end-time">End Time</Label>
                          <Input 
                            id="end-time" 
                            type="time" 
                            defaultValue="11:30" 
                            className="bg-white border-neutral-200" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Team Members</Label>
                      <div className="flex gap-2 flex-wrap">
                        <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-md px-3 py-1.5">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#059669]/10 text-[#059669]">
                            <User2 className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-sm">John Smith</span>
                        </div>
                        <Button variant="outline" size="sm" className="h-9">
                          <User2 className="h-3.5 w-3.5 mr-1" /> Add Member
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Estimated Duration</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Input 
                          type="number" 
                          min="0" 
                          defaultValue="2" 
                          className="bg-white border-neutral-200" 
                        />
                        <Select defaultValue="hours">
                          <SelectTrigger className="bg-white border-neutral-200">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hours">Hours</SelectItem>
                            <SelectItem value="days">Days</SelectItem>
                            <SelectItem value="weeks">Weeks</SelectItem>
                          </SelectContent>
                        </Select>
                        <div></div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-3 flex gap-2">
                      <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-700">
                        Client will be automatically notified when the job status changes. You can disable notifications in the settings.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="materials" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Materials & Costs</h3>
                      <Button variant="outline" size="sm">
                        Add Material
                      </Button>
                    </div>
                    
                    <div className="border rounded-md border-neutral-200 overflow-hidden">
                      <div className="grid grid-cols-12 gap-2 p-3 bg-neutral-50 text-sm font-medium text-neutral-500">
                        <div className="col-span-6">Item</div>
                        <div className="col-span-2">Quantity</div>
                        <div className="col-span-2">Price</div>
                        <div className="col-span-2">Total</div>
                      </div>
                      
                      <div className="divide-y divide-neutral-100">
                        <div className="grid grid-cols-12 gap-2 p-3 items-center">
                          <div className="col-span-6 flex items-center">
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-neutral-100 text-neutral-500">
                              <Package className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Kitchen Cabinet Set</div>
                              <div className="text-xs text-neutral-500">Custom white shaker style</div>
                            </div>
                          </div>
                          <div className="col-span-2">1</div>
                          <div className="col-span-2">£2,500.00</div>
                          <div className="col-span-2 font-medium">£2,500.00</div>
                        </div>
                        
                        <div className="grid grid-cols-12 gap-2 p-3 items-center">
                          <div className="col-span-6 flex items-center">
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-neutral-100 text-neutral-500">
                              <Package className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Sink & Fixtures</div>
                              <div className="text-xs text-neutral-500">Stainless steel undermount</div>
                            </div>
                          </div>
                          <div className="col-span-2">1</div>
                          <div className="col-span-2">£350.00</div>
                          <div className="col-span-2 font-medium">£350.00</div>
                        </div>
                      </div>
                      
                      <div className="p-3 border-t border-neutral-200 bg-neutral-50">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Materials Total:</span>
                          <span className="font-medium">£2,850.00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-dashed border-neutral-200 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Labor</h3>
                        <Button variant="outline" size="sm">
                          Add Labor
                        </Button>
                      </div>
                      
                      <div className="border rounded-md border-neutral-200 mt-4 overflow-hidden">
                        <div className="grid grid-cols-12 gap-2 p-3 bg-neutral-50 text-sm font-medium text-neutral-500">
                          <div className="col-span-6">Service</div>
                          <div className="col-span-2">Hours</div>
                          <div className="col-span-2">Rate</div>
                          <div className="col-span-2">Total</div>
                        </div>
                        
                        <div className="divide-y divide-neutral-100">
                          <div className="grid grid-cols-12 gap-2 p-3 items-center">
                            <div className="col-span-6 flex items-center">
                              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-neutral-100 text-neutral-500">
                                <Wrench className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-medium">Cabinet Installation</div>
                                <div className="text-xs text-neutral-500">John Smith</div>
                              </div>
                            </div>
                            <div className="col-span-2">8</div>
                            <div className="col-span-2">£45.00</div>
                            <div className="col-span-2 font-medium">£360.00</div>
                          </div>
                        </div>
                        
                        <div className="p-3 border-t border-neutral-200 bg-neutral-50">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Labor Total:</span>
                            <span className="font-medium">£360.00</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 border-t border-neutral-200 flex justify-between items-center">
                        <span className="font-medium">Job Total:</span>
                        <span className="text-lg font-semibold">£3,210.00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notes" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-notes">Job Notes (Internal Only)</Label>
                      <Textarea 
                        id="job-notes" 
                        className="min-h-[200px] bg-white border-neutral-200" 
                        placeholder="Add notes about this job. These are only visible to your team."
                        defaultValue="Client has requested all work to be completed before their housewarming party on the 15th. They'll be out of town during installation days 2-4, so we'll need the spare key to access the property."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="client-notes">Notes for Client</Label>
                      <Textarea 
                        id="client-notes" 
                        className="min-h-[100px] bg-white border-neutral-200" 
                        placeholder="Add notes that will be visible to the client."
                        defaultValue="Please ensure all personal belongings are removed from the kitchen area before we arrive. We'll need access to water and electricity throughout the installation."
                      />
                      <div className="text-sm text-neutral-500">
                        These notes will be visible to the client on their job documentation.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <SheetFooter className="border-t border-neutral-200 p-6 flex flex-row justify-between gap-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <div className="flex items-center gap-2">
              <Button className="bg-[#059669] hover:bg-[#059669]/90">
                Save Changes
              </Button>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
