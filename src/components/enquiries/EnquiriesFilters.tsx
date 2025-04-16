
import React from "react";
import { Button } from "@/components/ui/button";
import { FilterIcon, X } from "lucide-react";

interface EnquiriesFiltersProps {
  statusFilter: string | null;
  onStatusFilter: (status: string | null) => void;
}

export function EnquiriesFilters({ statusFilter, onStatusFilter }: EnquiriesFiltersProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="flex flex-col">
      <Button 
        variant="outline" 
        size="icon" 
        className="self-end sm:self-auto"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FilterIcon className="h-4 w-4" />
      </Button>
      
      {isExpanded && (
        <div className="mt-2 p-4 bg-background rounded-md border shadow-sm">
          <div className="flex flex-col sm:flex-row gap-2">
            <p className="text-sm font-medium mb-2 sm:mr-4 sm:mb-0 sm:self-center">Filter by status:</p>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={statusFilter === 'new' ? 'default' : 'outline'}
                size="sm"
                className={statusFilter === 'new' ? 'bg-[#2962FF] hover:bg-[#2962FF]/90' : ''}
                onClick={() => onStatusFilter(statusFilter === 'new' ? null : 'new')}
              >
                New Enquiries
              </Button>
              
              <Button
                variant={statusFilter === 'quote_pending' ? 'default' : 'outline'}
                size="sm"
                className={statusFilter === 'quote_pending' ? 'bg-amber-500 hover:bg-amber-600' : ''}
                onClick={() => onStatusFilter(statusFilter === 'quote_pending' ? null : 'quote_pending')}
              >
                Quote Pending
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => onStatusFilter(null)}
              >
                <X className="h-3 w-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
