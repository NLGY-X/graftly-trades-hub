
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { InvoiceModalHeader } from "./InvoiceModalHeader";
import { InvoiceModalFooter } from "./InvoiceModalFooter";
import { InvoiceModalContent } from "./InvoiceModalContent";

interface InvoiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InvoiceModal({ open, onOpenChange }: InvoiceModalProps) {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleSave = () => {
    toast({
      title: "Invoice Saved",
      description: "Your invoice has been saved successfully."
    });
    onOpenChange(false);
  };

  const handleSend = () => {
    toast({
      title: "Invoice Sent",
      description: "Your invoice has been sent to the client."
    });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        size="wide" 
        className={cn(
          isMobile ? "h-[95vh] rounded-t-xl p-0 inset-x-0 w-full" : "p-0",
          "bg-[#FEF2F2] border-l border-[#F97316]/30 overflow-hidden flex flex-col"
        )}
      >
        <InvoiceModalHeader isMobile={isMobile} onOpenChange={onOpenChange} />
        <InvoiceModalContent isMobile={isMobile} />
        <InvoiceModalFooter 
          isMobile={isMobile} 
          onOpenChange={onOpenChange}
          handleSave={handleSave}
          handleSend={handleSend}
        />
      </SheetContent>
    </Sheet>
  );
}
