
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface JobSearchProps {
  onSearch: (term: string) => void;
}

export function JobSearch({ onSearch }: JobSearchProps) {
  return (
    <div className="relative flex-1">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input 
        type="search" 
        placeholder="Search jobs, clients, or locations..." 
        className="w-full pl-8"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
