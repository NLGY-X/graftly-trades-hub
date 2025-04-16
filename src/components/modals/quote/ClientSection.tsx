
import React from "react";
import { Button } from "@/components/ui/button";
import { UserSquare2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function ClientSection() {
  return (
    <Card className="mb-6 border-[#1E40AF]/10">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40AF]/10 text-[#1E40AF]">
            <UserSquare2 className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Client Information</h3>
                <p className="text-sm text-muted-foreground">Select existing client or add new</p>
              </div>
              <Button variant="outline" size="sm" className="text-sm">Add New</Button>
            </div>
            <div className="mt-4">
              <Select>
                <SelectTrigger className="bg-white border-neutral-200 w-full">
                  <SelectValue placeholder="Select a client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client1">John & Sarah Thompson</SelectItem>
                  <SelectItem value="client2">Mike Wilson</SelectItem>
                  <SelectItem value="client3">Jennifer Garcia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
