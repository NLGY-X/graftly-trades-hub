
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

export function JobDetailsTab() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="job-title">Job Title</Label>
            <Input id="job-title" defaultValue="Kitchen Renovation" className="bg-white border-neutral-200" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-reference">Job Reference</Label>
            <Input id="job-reference" defaultValue="J-2025-0042" className="bg-white border-neutral-200" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="job-description">Description</Label>
          <Textarea 
            id="job-description" 
            className="min-h-[100px] bg-white border-neutral-200" 
            defaultValue="Complete kitchen renovation including cabinet installation, plumbing for sink and dishwasher, and electrical work for new appliances."
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Client</Label>
            <Select defaultValue="client1">
              <SelectTrigger className="bg-white border-neutral-200">
                <SelectValue placeholder="Select client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client1">John & Sarah Thompson</SelectItem>
                <SelectItem value="client2">Mike Wilson</SelectItem>
                <SelectItem value="client3">Jennifer Garcia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="border rounded-md p-3 bg-white border-neutral-200">
            <div className="flex items-center text-sm">
              <Phone className="h-3.5 w-3.5 mr-2 text-neutral-500" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm mt-1">
              <Mail className="h-3.5 w-3.5 mr-2 text-neutral-500" />
              <span>thompson@example.com</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="relative">
            <Input 
              id="location" 
              defaultValue="123 Maple Street, Richmond" 
              className="bg-white border-neutral-200 pl-9" 
            />
            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
