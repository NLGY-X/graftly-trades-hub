
import { CalendarIcon, MapPinIcon, ClockIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type JobStatus = "scheduled" | "in-progress" | "on-way" | "completed" | "cancelled";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    client: string;
    time: string;
    location: string;
    status: JobStatus;
  };
  onClick?: () => void;
}

const statusConfig: Record<JobStatus, { label: string; variant: "default" | "success" | "secondary" | "destructive" | "warning" | "info" | "accent" | "outline" }> = {
  "scheduled": { label: "Scheduled", variant: "secondary" },
  "in-progress": { label: "In Progress", variant: "info" },
  "on-way": { label: "On Way", variant: "warning" },
  "completed": { label: "Completed", variant: "success" },
  "cancelled": { label: "Cancelled", variant: "destructive" }
};

export function JobCard({ job, onClick }: JobCardProps) {
  const { label, variant } = statusConfig[job.status];
  
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:shadow-md border-l-4",
        job.status === "in-progress" ? "border-l-info" :
        job.status === "scheduled" ? "border-l-secondary" :
        job.status === "on-way" ? "border-l-warning" :
        job.status === "completed" ? "border-l-success" :
        "border-l-destructive"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-lg">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.client}</p>
          </div>
          <Badge variant={variant}>{label}</Badge>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <ClockIcon className="mr-2 h-4 w-4 text-primary" />
            <span>{job.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPinIcon className="mr-2 h-4 w-4 text-accent" />
            <span>{job.location}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-end">
          <span className="text-xs font-medium text-primary mr-1">View Details</span>
          <ChevronRightIcon className="h-4 w-4 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
