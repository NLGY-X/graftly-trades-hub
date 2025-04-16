
import { PlusIcon, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/contexts/ModalContext";

export function JobsHeader() {
  const { openModal } = useModal();
  
  const handleNewJob = () => {
    openModal("newJob");
  };
  
  const handleManageJob = () => {
    openModal("jobManagement");
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold tracking-tight">Jobs</h2>
      <div className="flex gap-2">
        <Button onClick={handleManageJob}>
          <Hammer className="mr-2 h-4 w-4" />
          Manage Job
        </Button>
        <Button onClick={handleNewJob}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Job
        </Button>
      </div>
    </div>
  );
}
