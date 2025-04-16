
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, FileText } from "lucide-react";

export function JobNotesTab() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="job-notes">Job Notes (Internal Only)</Label>
          <Textarea 
            id="job-notes" 
            className="min-h-[200px] bg-white border-neutral-200" 
            placeholder="Add notes about this job. These are only visible to your team."
            defaultValue="Client has requested all work to be completed before their housewarming party on the 15th. They'll be out of town during installation days 2-4, so we'll need the spare key to access the property."
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="client-notes">Notes for Client</Label>
          <Textarea 
            id="client-notes" 
            className="min-h-[100px] bg-white border-neutral-200" 
            placeholder="Add notes that will be visible to the client."
            defaultValue="Please ensure all personal belongings are removed from the kitchen area before we arrive. We'll need access to water and electricity throughout the installation."
          />
          <div className="text-sm text-neutral-500">
            These notes will be visible to the client on their job documentation.
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <Label>Attachments</Label>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Camera className="h-3.5 w-3.5 mr-1" /> Add Photos
            </Button>
            <Button variant="outline" size="sm" className="h-9">
              <FileText className="h-3.5 w-3.5 mr-1" /> Add Documents
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
