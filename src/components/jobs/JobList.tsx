
import { CalendarIcon } from "lucide-react";
import { JobCard } from "@/components/dashboard/JobCard";

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
  if (view === "calendar") {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
        <div className="text-center">
          <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-lg font-medium">Calendar View</h3>
          <p className="text-sm text-muted-foreground">
            Calendar view will be available in a future update.
          </p>
        </div>
      </div>
    );
  }

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
