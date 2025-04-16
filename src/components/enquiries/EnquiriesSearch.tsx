
import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface EnquiriesSearchProps {
  onSearch: (term: string) => void;
}

export function EnquiriesSearch({ onSearch }: EnquiriesSearchProps) {
  return (
    <div className="relative flex-1">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input 
        type="search" 
        placeholder="Search enquiries by name, description, or location..." 
        className="w-full pl-10 h-11 bg-white"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
