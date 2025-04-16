
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useModal } from "@/contexts/ModalContext";
import { JobsHeader } from "@/components/jobs/JobsHeader";
import { JobSearch } from "@/components/jobs/JobSearch";
import { JobFilters } from "@/components/jobs/JobFilters";
import { JobList } from "@/components/jobs/JobList";

// Mock data for jobs
const allJobs = [
  {
    id: "job1",
    title: "Kitchen Renovation",
    client: "John & Sarah Thompson",
    time: "Today, 09:00 AM - 11:30 AM",
    location: "123 Maple Street, Richmond",
    status: "in-progress" as const
  },
  {
    id: "job2",
    title: "Bathroom Plumbing",
    client: "Mike Wilson",
    time: "Today, 02:30 PM - 04:00 PM",
    location: "45 Oak Avenue, Northside",
    status: "scheduled" as const
  },
  {
    id: "job3",
    title: "Electrical Inspection",
    client: "Jennifer Garcia",
    time: "Today, 05:00 PM - 06:00 PM",
    location: "78 Pine Road, Westfield",
    status: "scheduled" as const
  },
  {
    id: "job4",
    title: "Roof Repair",
    client: "David Mitchell",
    time: "Tomorrow, 10:00 AM - 03:00 PM",
    location: "156 Cedar Lane, Southview",
    status: "scheduled" as const
  },
  {
    id: "job5",
    title: "Fence Installation",
    client: "Emily Rodriguez",
    time: "Tomorrow, 01:00 PM - 05:00 PM",
    location: "234 Birch Drive, Eastville",
    status: "scheduled" as const
  },
  {
    id: "job6",
    title: "HVAC Service",
    client: "Robert Chen",
    time: "Yesterday, 11:00 AM - 12:30 PM",
    location: "89 Elm Court, Downtown",
    status: "completed" as const
  },
  {
    id: "job7",
    title: "Window Replacement",
    client: "Patricia Lewis",
    time: "Yesterday, 02:00 PM - 04:30 PM",
    location: "321 Willow Place, Lakeside",
    status: "completed" as const
  }
];

export default function Jobs() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { openModal } = useModal();
  
  const handleManageJob = () => {
    openModal("jobManagement");
  };
  
  const handleNewJob = () => {
    openModal("newJob");
  };
  
  const handleJobClick = (jobId: string) => {
    openModal("jobManagement", { jobId });
  };

  const filterJobs = (jobs: typeof allJobs, tabValue: string) => {
    return jobs
      .filter(job => 
        tabValue === "all" || 
        (tabValue === "today" && job.time.includes("Today")) ||
        (tabValue === "upcoming" && job.time.includes("Tomorrow")) ||
        (tabValue === "completed" && job.status === "completed")
      )
      .filter(job => 
        statusFilter === "all" || job.status === statusFilter
      )
      .filter(job => 
        searchTerm === "" || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };
  
  return (
    <div className="space-y-6 pb-8">
      <JobsHeader 
        onNewJob={handleNewJob} 
        onManageJob={handleManageJob} 
      />
      
      <div className="flex flex-col gap-4 md:flex-row">
        <JobSearch onSearch={setSearchTerm} />
        
        <JobFilters 
          view={view} 
          setView={setView}
          onStatusChange={setStatusFilter}
        />
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <JobList 
            jobs={filterJobs(allJobs, "all")} 
            view={view} 
            onJobClick={handleJobClick} 
          />
        </TabsContent>
        
        <TabsContent value="today" className="mt-4">
          <JobList 
            jobs={filterJobs(allJobs, "today")} 
            view={view}
            onJobClick={handleJobClick}
          />
        </TabsContent>
        
        <TabsContent value="upcoming" className="mt-4">
          <JobList 
            jobs={filterJobs(allJobs, "upcoming")} 
            view={view}
            onJobClick={handleJobClick}
          />
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          <JobList 
            jobs={filterJobs(allJobs, "completed")} 
            view={view}
            onJobClick={handleJobClick}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
