
import React from "react";
import { 
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";
import { ClientSelector } from "../ClientSelector";
import { Control } from "react-hook-form";

interface JobDetailsFormTabProps {
  control: Control<any>;
}

export function JobDetailsFormTab({ control }: JobDetailsFormTabProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter job title" className="bg-white border-neutral-200" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <ClientSelector control={control} name="client" />
      </div>
      
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe the job details"
                className="min-h-[100px] bg-white border-neutral-200"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <div className="relative">
                <Input 
                  placeholder="Enter job location" 
                  className="bg-white border-neutral-200 pl-9" 
                  {...field}
                />
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
