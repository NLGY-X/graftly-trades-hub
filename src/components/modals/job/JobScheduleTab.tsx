
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Clock, User2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobScheduleTabProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function JobScheduleTab({ date, setDate }: JobScheduleTabProps) {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white border-neutral-200",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="start-time">Start Time</Label>
              <div className="relative">
                <Input 
                  id="start-time" 
                  type="time" 
                  defaultValue="09:00" 
                  className="bg-white border-neutral-200 pl-9" 
                />
                <Clock className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-time">End Time</Label>
              <Input 
                id="end-time" 
                type="time" 
                defaultValue="11:30" 
                className="bg-white border-neutral-200" 
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Team Members</Label>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-md px-3 py-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#059669]/10 text-[#059669]">
                <User2 className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm">John Smith</span>
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <User2 className="h-3.5 w-3.5 mr-1" /> Add Member
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Estimated Duration</Label>
          <div className="grid grid-cols-3 gap-2">
            <Input 
              type="number" 
              min="0" 
              defaultValue="2" 
              className="bg-white border-neutral-200" 
            />
            <Select defaultValue="hours">
              <SelectTrigger className="bg-white border-neutral-200">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hours">Hours</SelectItem>
                <SelectItem value="days">Days</SelectItem>
                <SelectItem value="weeks">Weeks</SelectItem>
              </SelectContent>
            </Select>
            <div></div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 flex gap-2">
          <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-700">
            Client will be automatically notified when the job status changes. You can disable notifications in the settings.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
