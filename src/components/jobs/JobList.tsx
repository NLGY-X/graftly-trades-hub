
import { useState } from "react";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { JobCard } from "@/components/dashboard/JobCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, addDays, isToday, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface Job {
  id: string;
  title: string;
  client: string;
  time: string;
  location: string;
  status: "scheduled" | "in-progress" | "on-way" | "completed" | "cancelled";
}

interface JobListProps {
  jobs: Job[];
  view: "list" | "calendar";
  onJobClick: (jobId: string) => void;
}

export function JobList({ jobs, view, onJobClick }: JobListProps) {
  const isMobile = useIsMobile();
  const [currentDate, setCurrentDate] = useState(new Date());
  const visibleDays = isMobile ? 3 : 5;

  // Function to navigate to previous days
  const goToPreviousDays = () => {
    setCurrentDate(prevDate => addDays(prevDate, -visibleDays));
  };

  // Function to navigate to next days
  const goToNextDays = () => {
    setCurrentDate(prevDate => addDays(prevDate, visibleDays));
  };

  // Create an array of dates for the calendar
  const calendarDays = Array.from({ length: visibleDays }, (_, i) => {
    const date = addDays(currentDate, i);
    return date;
  });

  // Group jobs by date
  const groupJobsByDate = (jobs: Job[], date: Date) => {
    // Convert the date to the start of the day to compare
    const startOfCurrentDay = startOfDay(date);
    
    // For demo purposes, filter jobs based on the date string in the job.time
    // In a real app, you would use proper date objects for comparison
    return jobs.filter(job => {
      if (isToday(date) && job.time.includes("Today")) {
        return true;
      } else if (format(date, "EEEE").toLowerCase() === "tomorrow" && job.time.includes("Tomorrow")) {
        return true;
      } else if (job.time.includes(format(date, "MMMM d"))) {
        return true;
      }
      return false;
    });
  };

  if (view === "list") {
    return (
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCard 
            key={job.id} 
            job={job} 
            onClick={() => onJobClick(job.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-2">
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">
            {format(currentDate, "MMMM yyyy")}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={goToPreviousDays}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={goToNextDays}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <div className={cn(
          "grid gap-2",
          isMobile 
            ? "grid-cols-1 sm:grid-cols-3" 
            : "grid-cols-1 sm:grid-cols-3 md:grid-cols-5"
        )}>
          {calendarDays.map((date, index) => {
            const dateJobs = groupJobsByDate(jobs, date);
            return (
              <div key={index} className="flex flex-col gap-2">
                <div 
                  className={cn(
                    "rounded-lg p-2 text-center border",
                    isToday(date) 
                      ? "bg-primary/10 border-primary/30" 
                      : "bg-card hover:bg-muted/50"
                  )}
                >
                  <div className={cn("text-xs font-medium", isToday(date) && "text-primary")}>
                    {format(date, "EEEE")}
                  </div>
                  <div className={cn("text-xl font-bold", isToday(date) && "text-primary")}>
                    {format(date, "d")}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {dateJobs.length} {dateJobs.length === 1 ? "job" : "jobs"}
                  </div>
                </div>
                
                {dateJobs.length === 0 ? (
                  <div className="text-center py-2 px-1 text-xs text-muted-foreground border border-dashed rounded-md">
                    No jobs
                  </div>
                ) : (
                  <div className="space-y-2">
                    {dateJobs.map((job) => (
                      <div 
                        key={job.id} 
                        className="border rounded-md p-2 text-sm hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => onJobClick(job.id)}
                      >
                        <div className="font-medium truncate">{job.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          <span>{job.time.replace("Today, ", "").replace("Tomorrow, ", "")}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="text-xs truncate text-muted-foreground pr-2">
                            {job.client}
                          </div>
                          <Badge 
                            variant={
                              job.status === "completed" ? "success" :
                              job.status === "in-progress" ? "info" :
                              job.status === "on-way" ? "warning" :
                              job.status === "cancelled" ? "destructive" : 
                              "secondary"
                            }
                            className="text-xs"
                          >
                            {job.status === "in-progress" ? "In Progress" : 
                             job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
