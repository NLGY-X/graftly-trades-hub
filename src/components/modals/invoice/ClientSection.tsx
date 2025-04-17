
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserSquare2 } from "lucide-react";

export function ClientSection() {
  return (
    <Card className="border-[#F97316]/10">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316]/10 text-[#8E9196] dark:text-[#9F9EA1]">
            <UserSquare2 className="h-5 w-4" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-[#403E43] dark:text-[#F1F0FB]">Client Information</h3>
                <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Select existing client or add new</p>
              </div>
            </div>
            <div className="mt-4">
              <Select defaultValue="client1">
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
            <div className="mt-4 p-3 bg-neutral-50 rounded-md border border-neutral-200">
              <div className="text-sm">
                <div className="font-medium">John & Sarah Thompson</div>
                <div className="text-neutral-500 mt-1">123 Maple Street, Richmond</div>
                <div className="text-neutral-500">thompson@example.com</div>
                <div className="text-neutral-500">(555) 123-4567</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
