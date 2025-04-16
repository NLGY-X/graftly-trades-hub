
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const [visibleDays, setVisibleDays] = useState<CalendarDayProps[]>(weekDays.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  const showPreviousDays = () => {
    if (startIndex > 0) {
      const newStartIndex = Math.max(0, startIndex - 1);
      setStartIndex(newStartIndex);
      setVisibleDays(weekDays.slice(newStartIndex, newStartIndex + 5));
    }
  };

  const showNextDays = () => {
    if (startIndex < weekDays.length - 5) {
      const newStartIndex = startIndex + 1;
      setStartIndex(newStartIndex);
      setVisibleDays(weekDays.slice(newStartIndex, newStartIndex + 5));
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Upcoming Work</CardTitle>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7" 
              onClick={showPreviousDays}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7" 
              onClick={showNextDays}
              disabled={startIndex >= weekDays.length - 5}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <div className="grid grid-cols-5 gap-2">
          {visibleDays.map((day) => (
            <CalendarDay key={day.date} {...day} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CalendarDay({ date, day, isToday, jobs }: CalendarDayProps) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="w-full">
      <div 
        className={cn(
          "rounded-lg p-2 mb-2 transition-colors cursor-pointer",
          isToday 
            ? "bg-primary/10 border border-primary/30" 
            : "border bg-card hover:bg-muted/50"
        )}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="text-center">
          <div className={cn("text-xs font-medium", isToday && "text-primary")}>
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
      
      {expanded && jobs.length > 0 && (
        <div className="space-y-1 mt-1">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="border rounded-md p-1.5 text-xs hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="font-medium truncate">{job.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-1"></span>
                {job.time}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {expanded && jobs.length === 0 && (
        <div className="text-center text-xs text-muted-foreground p-1.5 border border-dashed rounded-md">
          No jobs
        </div>
      )}
    </div>
  );
}
