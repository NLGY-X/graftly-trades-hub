import { useState } from "react";
import { Wallet, Clock, UserSquare2, CalendarCheck2, CloudSun, ChevronUp, ChevronDown } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { JobCard } from "@/components/dashboard/JobCard";
import { CalendarView } from "@/components/dashboard/CalendarView";
import { NotificationList } from "@/components/dashboard/NotificationList";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

// Mock data for today's jobs
const todaysJobs = [
  {
    id: "job1",
    title: "Kitchen Renovation",
    client: "John & Sarah Thompson",
    time: "09:00 AM - 11:30 AM",
    location: "123 Maple Street, Richmond",
    status: "in-progress" as const
  },
  {
    id: "job2",
    title: "Bathroom Plumbing",
    client: "Mike Wilson",
    time: "02:30 PM - 04:00 PM",
    location: "45 Oak Avenue, Northside",
    status: "scheduled" as const
  },
  {
    id: "job3",
    title: "Electrical Inspection",
    client: "Jennifer Garcia",
    time: "05:00 PM - 06:00 PM",
    location: "78 Pine Road, Westfield",
    status: "scheduled" as const
  }
];

// Mock data for notifications
const notifications = [
  {
    id: "notif1",
    type: "inquiry" as const,
    title: "New Job Inquiry",
    description: "Alex Morgan is requesting a quote for roof repairs",
    time: "15 minutes ago",
    read: false
  },
  {
    id: "notif2",
    type: "message" as const,
    title: "Message from Sam Harris",
    description: "Please call me about the kitchen renovation",
    time: "1 hour ago",
    read: false
  },
  {
    id: "notif3",
    type: "alert" as const,
    title: "Invoice Overdue",
    description: "Williams Project invoice is 15 days overdue",
    time: "Yesterday",
    read: true
  },
  {
    id: "notif4",
    type: "system" as const,
    title: "Materials Ordered",
    description: "Your order #45698 has been confirmed",
    time: "2 days ago",
    read: true
  }
];

export default function Dashboard() {
  const [jobsExpanded, setJobsExpanded] = useState(true);
  const [notificationsExpanded, setNotificationsExpanded] = useState(true);
  
  return (
    <div className="space-y-6 pb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-primary-dark">Dashboard</h2>
        <div className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-1.5 rounded-full">
          <CloudSun className="h-4 w-4 text-accent" />
          <span>21°C, Mostly Sunny</span>
        </div>
      </div>
      
      {/* Stats Row */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Outstanding Invoices"
          value="£4,250.00"
          icon={<Wallet className="h-4 w-4" />}
          trend={{ value: "12%", positive: false }}
          className="border-l-4 border-l-destructive"
        />
        <StatsCard
          title="Jobs Today"
          value="3"
          icon={<Clock className="h-4 w-4" />}
          className="border-l-4 border-l-primary"
        />
        <StatsCard
          title="Active Clients"
          value="18"
          icon={<UserSquare2 className="h-4 w-4" />}
          trend={{ value: "4%", positive: true }}
          className="border-l-4 border-l-success"
        />
        <StatsCard
          title="Completed This Week"
          value="7"
          icon={<CalendarCheck2 className="h-4 w-4" />}
          className="border-l-4 border-l-accent"
        />
      </div>
      
      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left Column - Today's Jobs */}
        <div className="space-y-6 lg:col-span-7 xl:col-span-8">
          <Collapsible open={jobsExpanded} onOpenChange={setJobsExpanded} className="w-full">
            <div className="bg-card rounded-lg border shadow-sm">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-medium">Today's Jobs</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                    {jobsExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="p-4 space-y-4">
                  {todaysJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
          
          <CalendarView />
        </div>
        
        {/* Right Column - Notifications */}
        <div className="lg:col-span-5 xl:col-span-4">
          <Collapsible open={notificationsExpanded} onOpenChange={setNotificationsExpanded} className="w-full">
            <div className="bg-card rounded-lg border shadow-sm h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium">Notifications</h3>
                  {notifications.filter(n => !n.read).length > 0 && (
                    <div className="ml-2 bg-accent text-accent-foreground text-xs font-semibold rounded-full px-2 py-0.5">
                      {notifications.filter(n => !n.read).length} unread
                    </div>
                  )}
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                    {notificationsExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="p-4">
                  <NotificationList notifications={notifications} />
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
