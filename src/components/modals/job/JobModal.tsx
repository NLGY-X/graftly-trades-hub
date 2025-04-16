
import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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

  // Function to update job status
  const updateStatus = (newStatus: string) => {
    setStatus(newStatus);
    // Here you would typically also make an API call to update the status on the server
  };

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
            <JobStatusTimeline 
              statusOptions={statusOptions} 
              status={status} 
              updateStatus={updateStatus} 
            />

            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-6 space-y-6">
                <JobDetailsTab />
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-6 space-y-6">
                <JobScheduleTab date={date} setDate={setDate} />
              </TabsContent>
              
              <TabsContent value="materials" className="mt-6 space-y-6">
                <JobMaterialsTab />
              </TabsContent>
              
              <TabsContent value="notes" className="mt-6 space-y-6">
                <JobNotesTab />
              </TabsContent>
            </Tabs>
          </div>

          <SheetFooter className="border-t border-neutral-200 p-6 flex flex-row justify-between gap-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-1">
                <AlertCircle className="h-4 w-4" />
                Report Issue
              </Button>
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
