
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { JobMaterialsTab } from "./JobMaterialsTab";
import { JobNotesTab } from "./JobNotesTab";
import { JobDetailsFormTab } from "./tabs/JobDetailsFormTab";
import { JobScheduleFormTab } from "./tabs/JobScheduleFormTab";

interface NewJobModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  client: z.string().min(1, "Client is required"),
  description: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  status: z.enum(["scheduled", "in-progress", "on-way", "completed", "cancelled"]).default("scheduled"),
});

type FormValues = z.infer<typeof formSchema>;

export function NewJobModal({ open, onOpenChange }: NewJobModalProps) {
  const [activeTab, setActiveTab] = useState("details");
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      client: "",
      description: "",
      location: "",
      date: "",
      time: "",
      status: "scheduled",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("New job data:", data);
    
    // Here you would typically send this data to your backend
    toast({
      title: "Job created",
      description: `New job "${data.title}" has been created successfully`,
    });
    
    // Reset the form and close the modal
    form.reset();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        size="md"
        className={cn(
          isMobile ? "h-[90vh] rounded-t-xl pb-0 pt-4" : "p-0",
          "bg-[#ECFDF5] border-l border-[#059669]/30"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 p-4 md:p-6 border-b border-neutral-200">
            <SheetHeader className="text-left">
              {isMobile && (
                <div className="mx-auto mb-4 h-1 w-[32px] rounded-full bg-[#059669]/30" />
              )}
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
                <SheetTitle className="text-[#059669]">New Job</SheetTitle>
              </div>
              <SheetDescription>Create a new job with client and schedule details</SheetDescription>
            </SheetHeader>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:py-6 md:px-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  
                  <TabsContent value="details" className="mt-6 focus:outline-none">
                    <JobDetailsFormTab control={form.control} />
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="mt-6 focus:outline-none">
                    <JobScheduleFormTab control={form.control} />
                  </TabsContent>
                  
                  <TabsContent value="materials" className="mt-6 focus:outline-none">
                    <JobMaterialsTab />
                  </TabsContent>
                  
                  <TabsContent value="notes" className="mt-6 focus:outline-none">
                    <JobNotesTab />
                  </TabsContent>
                </Tabs>
              </form>
            </Form>
          </div>

          <SheetFooter className="border-t border-neutral-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between gap-4 bg-[#ECFDF5]">
            {isMobile ? (
              <>
                <Button 
                  className="bg-[#059669] hover:bg-[#059669]/90 w-full text-white font-medium"
                  onClick={form.handleSubmit(onSubmit)}
                >
                  Create Job
                </Button>
                <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full">
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button 
                  className="bg-[#059669] hover:bg-[#059669]/90"
                  onClick={form.handleSubmit(onSubmit)}
                >
                  Create Job
                </Button>
              </>
            )}
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
