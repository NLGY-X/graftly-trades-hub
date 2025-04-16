
import { PlusIcon, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobsHeaderProps {
  onNewJob: () => void;
  onManageJob: () => void;
}

export function JobsHeader({ onNewJob, onManageJob }: JobsHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold tracking-tight">Jobs</h2>
      <div className="flex gap-2">
        <Button onClick={onManageJob}>
          <Hammer className="mr-2 h-4 w-4" />
          Manage Job
        </Button>
        <Button onClick={onNewJob}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Job
        </Button>
      </div>
    </div>
  );
}
