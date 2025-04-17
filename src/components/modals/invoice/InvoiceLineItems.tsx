
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function InvoiceLineItems() {
  return (
    <div className="border rounded-md border-neutral-200 bg-white overflow-hidden">
      <div className="p-3 border-b border-neutral-200 bg-neutral-50 flex justify-between items-center">
        <h3 className="font-medium">Line Items</h3>
        <Button variant="outline" size="sm" className="text-xs h-8 px-3">
          Import from Job
        </Button>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-12 gap-1 mb-2 text-sm font-medium text-neutral-500">
          <div className="col-span-6">Description</div>
          <div className="col-span-1">Qty</div>
          <div className="col-span-2">Unit Price</div>
          <div className="col-span-1">VAT %</div>
          <div className="col-span-2 text-right">Total</div>
        </div>
        
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-1 py-2 items-center bg-neutral-50 rounded-md border border-neutral-200">
            <div className="col-span-6 px-2 truncate">
              Kitchen Cabinet Installation
            </div>
            <div className="col-span-1 px-1 text-center">1</div>
            <div className="col-span-2 px-1 text-center">£2,500.00</div>
            <div className="col-span-1 px-1 text-center">20%</div>
            <div className="col-span-2 text-right px-2 font-medium">
              £2,500.00
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-1 py-2 items-center bg-neutral-50 rounded-md border border-neutral-200">
            <div className="col-span-6 px-2 truncate">
              Plumbing Work
            </div>
            <div className="col-span-1 px-1 text-center">1</div>
            <div className="col-span-2 px-1 text-center">£350.00</div>
            <div className="col-span-1 px-1 text-center">20%</div>
            <div className="col-span-2 text-right px-2 font-medium">
              £350.00
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-1 py-2 items-center bg-neutral-50 rounded-md border border-neutral-200">
            <div className="col-span-6 px-2 truncate">
              Electrical Work
            </div>
            <div className="col-span-1 px-1 text-center">1</div>
            <div className="col-span-2 px-1 text-center">£450.00</div>
            <div className="col-span-1 px-1 text-center">20%</div>
            <div className="col-span-2 text-right px-2 font-medium">
              £450.00
            </div>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-2 w-full border border-dashed border-neutral-200 flex items-center justify-center"
        >
          <PlusCircle className="h-4 w-4 mr-1" /> Add Item
        </Button>
        
        <div className="mt-4 border-t border-neutral-200 pt-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-neutral-500">Subtotal:</span>
              <span>£3,300.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">VAT (20%):</span>
              <span>£660.00</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t border-neutral-200">
              <span>Total:</span>
              <span className="text-lg">£3,960.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
