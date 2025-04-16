
import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface StatusOption {
  value: string;
  label: string;
  color: string;
}

interface JobStatusTimelineProps {
  statusOptions: StatusOption[];
  status: string;
  updateStatus: (newStatus: string) => void;
}

export function JobStatusTimeline({ statusOptions, status, updateStatus }: JobStatusTimelineProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center relative">
        {statusOptions.map((option, index) => (
          <div key={option.value} className="flex flex-col items-center z-10">
            <button
              className={cn(
                "w-8 h-8 rounded-full border-2",
                status === option.value 
                  ? "border-[#059669] bg-[#059669] text-white"
                  : statusOptions.findIndex(o => o.value === status) > index
                    ? "border-[#059669] bg-[#059669] text-white"
                    : "border-neutral-300 bg-white text-neutral-400"
              )}
              onClick={() => updateStatus(option.value)}
              aria-label={`Set status to ${option.label}`}
            >
              {statusOptions.findIndex(o => o.value === status) >= index ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <span className="text-xs">{index + 1}</span>
              )}
            </button>
            <span className="text-xs mt-1 whitespace-nowrap">{option.label}</span>
          </div>
        ))}
        <div className="absolute top-4 left-4 right-4 h-[2px] bg-neutral-200 -z-0"></div>
        <div 
          className="absolute top-4 left-4 h-[2px] bg-[#059669] -z-0"
          style={{ 
            width: `${(statusOptions.findIndex(o => o.value === status) / (statusOptions.length - 1)) * 100}%`
          }}
        ></div>
      </div>
    </div>
  );
}
