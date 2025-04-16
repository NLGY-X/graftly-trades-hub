
import { FilterIcon, ListIcon, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface JobFiltersProps {
  view: "list" | "calendar";
  setView: (view: "list" | "calendar") => void;
  onStatusChange: (status: string) => void;
}

export function JobFilters({ view, setView, onStatusChange }: JobFiltersProps) {
  return (
    <div className="flex gap-2">
      <Select defaultValue="all" onValueChange={onStatusChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="scheduled">Scheduled</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>
      
      <Button variant="outline" size="icon">
        <FilterIcon className="h-4 w-4" />
      </Button>
      
      <div className="flex items-center rounded-md border bg-background">
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-none ${view === 'list' ? 'bg-muted' : ''}`}
          onClick={() => setView("list")}
        >
          <ListIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-none ${view === 'calendar' ? 'bg-muted' : ''}`}
          onClick={() => setView("calendar")}
        >
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
