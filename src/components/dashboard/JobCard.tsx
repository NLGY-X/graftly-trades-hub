
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

const statusConfig: Record<JobStatus, { label: string; variant: "default" | "outline" | "secondary" | "destructive" }> = {
  "scheduled": { label: "Scheduled", variant: "outline" },
  "in-progress": { label: "In Progress", variant: "default" },
  "on-way": { label: "On Way", variant: "secondary" },
  "completed": { label: "Completed", variant: "default" },
  "cancelled": { label: "Cancelled", variant: "destructive" }
};

export function JobCard({ job, onClick }: JobCardProps) {
  const { label, variant } = statusConfig[job.status];
  
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:shadow-md",
        job.status === "in-progress" && "border-l-4 border-l-primary"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.client}</p>
          </div>
          <Badge variant={variant}>{label}</Badge>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <ClockIcon className="mr-2 h-4 w-4" />
            <span>{job.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPinIcon className="mr-2 h-4 w-4" />
            <span>{job.location}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-end">
          <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}
