
import React from "react";
import { Button } from "@/components/ui/button";
import { Inbox, Plus, Share } from "lucide-react";

interface EnquiriesEmptyStateProps {
  onAddNew: () => void;
}

export function EnquiriesEmptyState({ onAddNew }: EnquiriesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-64 border border-dashed rounded-lg p-8 text-center">
      <Inbox className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium mb-2">No enquiries found</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-md">
        Start by adding a new enquiry or sharing your enquiry link with potential clients.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button onClick={onAddNew}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Enquiry
        </Button>
        <Button variant="outline">
          <Share className="mr-2 h-4 w-4" />
          Share Enquiry Link
        </Button>
      </div>
    </div>
  );
}
