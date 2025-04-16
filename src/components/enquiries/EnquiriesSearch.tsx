
import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface EnquiriesSearchProps {
  onSearch: (term: string) => void;
}

export function EnquiriesSearch({ onSearch }: EnquiriesSearchProps) {
  return (
    <div className="relative flex-1">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input 
        type="search" 
        placeholder="Search enquiries by name, description, or location..." 
        className="w-full pl-8"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
