
import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Check, Receipt, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import { JobStatusTimeline } from "./JobStatusTimeline";
import { JobDetailsTab } from "./JobDetailsTab";
import { JobScheduleTab } from "./JobScheduleTab";
import { JobMaterialsTab } from "./JobMaterialsTab";
import { JobNotesTab } from "./JobNotesTab";

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
  const [activeTab, setActiveTab] = useState("details");
  const isMobile = useIsMobile();

  // Function to update job status
  const updateStatus = (newStatus: string) => {
    setStatus(newStatus);
    // Here you would typically also make an API call to update the status on the server
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        className={cn(
          isMobile ? "h-[90vh] rounded-t-xl pb-0 pt-4" : "w-[650px] max-w-full p-0",
          "bg-[#ECFDF5] border-l border-[#059669]/30"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 p-4 md:p-6 border-b border-neutral-200">
            <SheetHeader className="text-left">
              {isMobile && (
                <div className="mx-auto mb-4 h-1 w-[32px] rounded-full bg-[#059669]/30" />
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {isMobile && (
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 mr-2 -ml-2" 
                      onClick={() => onOpenChange(false)}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span className="sr-only">Back</span>
                    </Button>
                  )}
                  <SheetTitle className="text-[#059669]">Job Management</SheetTitle>
                </div>
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

          <div className="flex-1 overflow-y-auto p-4 md:py-6 md:px-6">
            {/* Status Timeline */}
            <div className="mb-6 overflow-x-auto pb-2">
              <JobStatusTimeline 
                statusOptions={statusOptions} 
                status={status} 
                updateStatus={updateStatus} 
              />
            </div>

            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className={cn(
                "grid w-full rounded-md",
                isMobile ? "grid-cols-2 sticky top-0 z-10 bg-[#ECFDF5]" : "grid-cols-4"
              )}>
                <TabsTrigger value="details" className="rounded-md">Details</TabsTrigger>
                <TabsTrigger value="schedule" className="rounded-md">Schedule</TabsTrigger>
                {!isMobile && (
                  <>
                    <TabsTrigger value="materials" className="rounded-md">Materials</TabsTrigger>
                    <TabsTrigger value="notes" className="rounded-md">Notes</TabsTrigger>
                  </>
                )}
              </TabsList>
              
              {isMobile && (
                <TabsList className="grid w-full grid-cols-2 mt-2 rounded-md">
                  <TabsTrigger value="materials" className="rounded-md">Materials</TabsTrigger>
                  <TabsTrigger value="notes" className="rounded-md">Notes</TabsTrigger>
                </TabsList>
              )}
              
              <TabsContent value="details" className="mt-6 space-y-6 focus:outline-none">
                <JobDetailsTab />
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-6 space-y-6 focus:outline-none">
                <JobScheduleTab date={date} setDate={setDate} />
              </TabsContent>
              
              <TabsContent value="materials" className="mt-6 space-y-6 focus:outline-none">
                <JobMaterialsTab />
              </TabsContent>
              
              <TabsContent value="notes" className="mt-6 space-y-6 focus:outline-none">
                <JobNotesTab />
              </TabsContent>
            </Tabs>
          </div>

          <SheetFooter className="border-t border-neutral-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between gap-4 bg-[#ECFDF5]">
            {isMobile ? (
              <>
                <Button className="bg-[#059669] hover:bg-[#059669]/90 w-full text-white font-medium">
                  Save Changes
                </Button>
                <Button variant="outline" className="gap-1 w-full">
                  <AlertTriangle className="h-4 w-4" />
                  Report Issue
                </Button>
                <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full">
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="gap-1">
                    <AlertTriangle className="h-4 w-4" />
                    Report Issue
                  </Button>
                  <Button className="bg-[#059669] hover:bg-[#059669]/90">
                    Save Changes
                  </Button>
                </div>
              </>
            )}
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
