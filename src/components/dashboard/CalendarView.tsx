
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CalendarDayProps {
  date: string;
  day: string;
  isToday?: boolean;
  jobs: Array<{
    id: string;
    title: string;
    time: string;
  }>;
}

export function CalendarView() {
  // Simulated week data
  const weekDays: CalendarDayProps[] = [
    {
      date: "16",
      day: "Today",
      isToday: true,
      jobs: [
        { id: "1", title: "Kitchen Renovation", time: "09:00 AM" },
        { id: "2", title: "Bathroom Plumbing", time: "02:30 PM" }
      ]
    },
    {
      date: "17",
      day: "Wed",
      jobs: [
        { id: "3", title: "Electrical Inspection", time: "10:00 AM" },
        { id: "4", title: "New Roof Quote", time: "01:00 PM" },
        { id: "5", title: "Window Installation", time: "04:00 PM" }
      ]
    },
    {
      date: "18",
      day: "Thu",
      jobs: [
        { id: "6", title: "Flooring Installation", time: "09:30 AM" }
      ]
    },
    {
      date: "19",
      day: "Fri",
      jobs: [
        { id: "7", title: "HVAC Maintenance", time: "11:00 AM" },
        { id: "8", title: "Deck Repair", time: "03:00 PM" }
      ]
    },
    {
      date: "20",
      day: "Sat",
      jobs: []
    },
    {
      date: "21",
      day: "Sun",
      jobs: []
    },
    {
      date: "22",
      day: "Mon",
      jobs: [
        { id: "9", title: "New Construction Visit", time: "10:00 AM" }
      ]
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-md">Upcoming Work</CardTitle>
      </CardHeader>
      <CardContent className="px-1">
        <div className="flex overflow-x-auto pb-2 -mx-1 px-1">
          {weekDays.map((day) => (
            <CalendarDay key={day.date} {...day} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CalendarDay({ date, day, isToday, jobs }: CalendarDayProps) {
  return (
    <div className="flex-shrink-0 w-[130px] px-2">
      <div 
        className={cn(
          "rounded-md p-2 mb-2",
          isToday ? "bg-primary/10" : "border bg-card"
        )}
      >
        <div className="text-center">
          <div className={cn("text-sm font-medium", isToday && "text-primary")}>
            {day}
          </div>
          <div className={cn("text-xl font-bold", isToday && "text-primary")}>
            {date}
          </div>
          <div className="text-xs text-muted-foreground">
            {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {jobs.length === 0 ? (
          <div className="text-center text-xs text-muted-foreground p-2">
            No jobs scheduled
          </div>
        ) : (
          jobs.map((job) => (
            <div 
              key={job.id} 
              className="border rounded-md p-2 text-sm"
            >
              <div className="font-medium truncate">{job.title}</div>
              <div className="text-xs text-muted-foreground">{job.time}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
