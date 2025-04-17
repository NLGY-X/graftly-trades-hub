
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClientSection } from "./ClientSection";
import { InvoiceLineItems } from "./InvoiceLineItems";
import { InvoicePaymentOptions } from "./InvoicePaymentOptions";

export function InvoiceDetailsTab() {
  return (
    <>
      <ClientSection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="invoice-number" className="text-[#403E43] dark:text-[#F1F0FB]">Invoice Number</Label>
          <Input 
            id="invoice-number" 
            defaultValue="INV-2025-0042" 
            className="bg-white border-neutral-200 text-[#403E43] dark:text-[#F1F0FB] placeholder:text-[#8A898C] dark:placeholder:text-[#9F9EA1]" 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="po-number">Reference/PO Number</Label>
          <Input id="po-number" placeholder="Enter reference number" className="bg-white border-neutral-200" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="issue-date">Issue Date</Label>
          <Input type="date" id="issue-date" className="bg-white border-neutral-200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="due-date">Due Date</Label>
          <Input type="date" id="due-date" className="bg-white border-neutral-200" />
        </div>
      </div>
      
      <InvoiceLineItems />
      
      <InvoicePaymentOptions />
      
      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea 
          id="notes" 
          placeholder="Add any additional notes for the invoice" 
          className="min-h-[100px] bg-white border-neutral-200" 
          defaultValue="Thank you for your business. Please make payment by the due date."
        />
      </div>
    </>
  );
}
