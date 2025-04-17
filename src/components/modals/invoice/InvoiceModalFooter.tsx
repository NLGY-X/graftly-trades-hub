
import React from "react";
import { SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Printer, Mail, Download, Trash } from "lucide-react";

interface InvoiceModalFooterProps {
  isMobile: boolean;
  onOpenChange: (open: boolean) => void;
  handleSave: () => void;
  handleSend: () => void;
}

export function InvoiceModalFooter({ 
  isMobile, 
  onOpenChange, 
  handleSave, 
  handleSend 
}: InvoiceModalFooterProps) {
  return (
    <SheetFooter className="border-t border-neutral-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between gap-4 bg-[#FEF2F2] flex-shrink-0">
      {isMobile ? (
        <>
          <Button 
            className="bg-[#F97316] hover:bg-[#F97316]/90 w-full text-white font-medium" 
            onClick={handleSend}
          >
            <Mail className="h-4 w-4 mr-2" /> Send Invoice
          </Button>
          <Button 
            variant="outline" 
            className="border-[#F97316] text-[#8E9196] dark:text-[#9F9EA1] w-full" 
            onClick={handleSave}
          >
            Save Draft
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)} 
            className="w-full text-[#8E9196] dark:text-[#9F9EA1]"
          >
            Cancel
          </Button>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" title="Print Invoice">
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" title="Download PDF">
              <Download className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <Button variant="outline" size="icon" className="text-destructive hover:bg-destructive/10" title="Delete">
              <Trash className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button variant="outline" className="border-[#F97316] text-[#8E9196] dark:text-[#9F9EA1]" onClick={handleSave}>
              Save Draft
            </Button>
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90" onClick={handleSend}>
              <Mail className="h-4 w-4 mr-2" /> Send Invoice
            </Button>
          </div>
        </>
      )}
    </SheetFooter>
  );
}
