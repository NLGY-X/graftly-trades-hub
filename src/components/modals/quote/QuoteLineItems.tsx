
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
  total: number;
}

interface QuoteLineItemsProps {
  lineItems: LineItem[];
  setLineItems: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export function QuoteLineItems({ lineItems, setLineItems }: QuoteLineItemsProps) {
  const handleAddLineItem = () => {
    setLineItems([
      ...lineItems,
      { 
        id: Math.random().toString(36).substring(7), 
        description: "", 
        quantity: 1, 
        unitPrice: 0, 
        vatRate: 20, 
        total: 0 
      }
    ]);
  };

  const calculateSubtotal = () => {
    return lineItems.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
  };

  const calculateVAT = () => {
    return lineItems.reduce((acc, item) => {
      const itemVat = (item.quantity * item.unitPrice) * (item.vatRate / 100);
      return acc + itemVat;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateVAT();
  };

  return (
    <div className="border rounded-md border-neutral-200 bg-white">
      <div className="p-4 border-b border-neutral-200 bg-neutral-50">
        <h3 className="font-medium">Line Items</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-12 gap-2 mb-2 text-sm font-medium text-neutral-500">
          <div className="col-span-1"></div>
          <div className="col-span-5">Description</div>
          <div className="col-span-1">Qty</div>
          <div className="col-span-2">Unit Price</div>
          <div className="col-span-1">VAT %</div>
          <div className="col-span-2 text-right">Total</div>
        </div>
        
        {lineItems.map((item, index) => (
          <div key={item.id} className={cn(
            "grid grid-cols-12 gap-2 py-2 items-center",
            index % 2 === 0 ? "bg-neutral-50" : "bg-white"
          )}>
            <div className="col-span-1 flex justify-center">
              <div className="cursor-move">
                <GripVertical className="h-4 w-4 text-neutral-400" />
              </div>
            </div>
            <div className="col-span-5">
              <Input 
                placeholder="Enter description" 
                className="border-dashed bg-transparent"
              />
            </div>
            <div className="col-span-1">
              <Input 
                type="number" 
                min="1" 
                defaultValue="1" 
                className="border-dashed bg-transparent"
              />
            </div>
            <div className="col-span-2">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-500">£</span>
                <Input 
                  type="number" 
                  min="0" 
                  step="0.01" 
                  className="pl-6 border-dashed bg-transparent" 
                />
              </div>
            </div>
            <div className="col-span-1">
              <Select defaultValue="20">
                <SelectTrigger className="border-dashed bg-transparent h-9">
                  <SelectValue placeholder="%" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0%</SelectItem>
                  <SelectItem value="5">5%</SelectItem>
                  <SelectItem value="20">20%</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 text-right font-medium">
              £0.00
            </div>
          </div>
        ))}
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-2 w-full border border-dashed border-neutral-200 flex items-center justify-center"
          onClick={handleAddLineItem}
        >
          <Plus className="h-4 w-4 mr-1" /> Add Item
        </Button>
        
        <div className="mt-4 border-t border-neutral-200 pt-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-neutral-500">Subtotal:</span>
              <span>£{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">VAT:</span>
              <span>£{calculateVAT().toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t border-neutral-200">
              <span>Total:</span>
              <span className="text-lg">£{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
