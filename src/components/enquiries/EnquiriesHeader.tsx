
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, ShareIcon, LayoutGrid, List } from "lucide-react";

interface EnquiriesHeaderProps {
  onAddNew: () => void;
  onShare: () => void;
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

export function EnquiriesHeader({ onAddNew, onShare, view, setView }: EnquiriesHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold tracking-tight">Enquiries</h2>
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-md border bg-background mr-2">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none ${view === 'grid' ? 'bg-muted' : ''}`}
            onClick={() => setView("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none ${view === 'list' ? 'bg-muted' : ''}`}
            onClick={() => setView("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
        
        <Button variant="outline" onClick={onShare}>
          <ShareIcon className="mr-2 h-4 w-4" />
          Share Enquiry Link
        </Button>
        
        <Button onClick={onAddNew}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Enquiry
        </Button>
      </div>
    </div>
  );
}
