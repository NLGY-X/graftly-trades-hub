
import { Wallet, Clock, UserSquare2, CalendarCheck2, CloudSun } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { JobCard } from "@/components/dashboard/JobCard";
import { CalendarView } from "@/components/dashboard/CalendarView";
import { NotificationList } from "@/components/dashboard/NotificationList";

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
  return (
    <div className="space-y-8 pb-8">
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
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column - Today's Jobs */}
        <div className="space-y-8 lg:col-span-7 xl:col-span-8">
          <div className="bg-card rounded-lg p-5 border shadow-sm">
            <h3 className="mb-5 text-lg font-medium border-b pb-3">Today's Jobs</h3>
            <div className="space-y-5">
              {todaysJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
          
          <CalendarView />
        </div>
        
        {/* Right Column - Notifications */}
        <div className="lg:col-span-5 xl:col-span-4">
          <NotificationList notifications={notifications} />
        </div>
      </div>
    </div>
  );
}
