
import React from "react";
import { SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface InvoiceModalHeaderProps {
  isMobile: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InvoiceModalHeader({ isMobile, onOpenChange }: InvoiceModalHeaderProps) {
  return (
    <div className="flex-shrink-0 px-4 py-3 md:p-6 border-b border-neutral-200">
      <SheetHeader className="text-left pb-2">
        {isMobile && (
          <div className="mx-auto mb-3 h-1 w-[32px] rounded-full bg-[#F97316]/30" />
        )}
        <div className="flex items-center">
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 mr-2 -ml-2" 
              onClick={() => onOpenChange(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          )}
          <SheetTitle className="text-[#8E9196] dark:text-[#D6BCFA]">New Invoice</SheetTitle>
        </div>
        <SheetDescription className="text-[#8A898C] dark:text-[#9F9EA1]">
          Create a professional invoice for your client
        </SheetDescription>
      </SheetHeader>
      <div className="mt-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-sm text-[#8E9196] hover:bg-[#F1F0FB] dark:text-[#C8C8C9]"
        >
          Generate from Job
        </Button>
      </div>
    </div>
  );
}
