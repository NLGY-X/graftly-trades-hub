
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ClientSelector } from "./ClientSelector";
import { JobMaterialsTab } from "./JobMaterialsTab";
import { JobNotesTab } from "./JobNotesTab";

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
      <SheetContent side="right" className="w-[650px] max-w-full bg-[#ECFDF5] border-l border-[#059669]/30 p-0">
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 p-6 border-b border-neutral-200">
            <SheetHeader className="text-left">
              <SheetTitle className="text-[#059669]">New Job</SheetTitle>
              <SheetDescription>Create a new job with client and schedule details</SheetDescription>
            </SheetHeader>
          </div>

          <div className="flex-1 overflow-auto py-6 px-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="materials">Materials</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter job title" className="bg-white border-neutral-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <ClientSelector control={form.control} name="client" />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the job details"
                              className="min-h-[100px] bg-white border-neutral-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="Enter job location" 
                                className="bg-white border-neutral-200 pl-9" 
                                {...field}
                              />
                              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  type="date" 
                                  className="bg-white border-neutral-200 pl-9" 
                                  {...field}
                                />
                                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  type="time" 
                                  className="bg-white border-neutral-200 pl-9" 
                                  {...field}
                                />
                                <Clock className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white border-neutral-200">
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="scheduled">Scheduled</SelectItem>
                              <SelectItem value="in-progress">In Progress</SelectItem>
                              <SelectItem value="on-way">On Way</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="materials" className="mt-6">
                    <JobMaterialsTab />
                  </TabsContent>
                  
                  <TabsContent value="notes" className="mt-6">
                    <JobNotesTab />
                  </TabsContent>
                </Tabs>
              </form>
            </Form>
          </div>

          <SheetFooter className="border-t border-neutral-200 p-6 flex flex-row justify-between gap-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-[#059669] hover:bg-[#059669]/90"
              onClick={form.handleSubmit(onSubmit)}
            >
              Create Job
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
