import { useState } from "react";
import { CalendarIcon, GridIcon, ListIcon, PlusIcon, SearchIcon, FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobCard } from "@/components/dashboard/JobCard";

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
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Jobs</h2>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Job
        </Button>
      </div>
      
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search jobs, clients, or locations..." 
            className="w-full pl-8"
          />
        </div>
        
        {/* Filters */}
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center rounded-md border bg-background">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${view === 'list' ? 'bg-muted' : ''}`}
              onClick={() => setView("list")}
            >
              <ListIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${view === 'calendar' ? 'bg-muted' : ''}`}
              onClick={() => setView("calendar")}
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4 space-y-4">
          {view === "list" ? (
            allJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
              <div className="text-center">
                <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-lg font-medium">Calendar View</h3>
                <p className="text-sm text-muted-foreground">
                  Calendar view will be available in a future update.
                </p>
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="today" className="mt-4 space-y-4">
          {view === "list" ? (
            allJobs
              .filter(job => job.time.includes("Today"))
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))
          ) : (
            <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
              <div className="text-center">
                <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-lg font-medium">Calendar View</h3>
                <p className="text-sm text-muted-foreground">
                  Calendar view will be available in a future update.
                </p>
              </div>
            </div>
          )}
        </TabsContent>
        
        {/* Other tabs content would be similar */}
        <TabsContent value="upcoming" className="mt-4">
          {/* Upcoming jobs content */}
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          {/* Completed jobs content */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
