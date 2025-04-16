
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QuoteLineItems } from "./QuoteLineItems";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
  total: number;
}

export function QuoteDetailsTab() {
  const [lineItems, setLineItems] = React.useState<LineItem[]>([
    { id: "1", description: "", quantity: 1, unitPrice: 0, vatRate: 20, total: 0 }
  ]);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="quote-ref">Quote Reference</Label>
          <Input id="quote-ref" defaultValue="Q-2025-0042" className="bg-white border-neutral-200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="valid-until">Valid Until</Label>
          <Input type="date" id="valid-until" className="bg-white border-neutral-200" />
        </div>
      </div>

      <QuoteLineItems lineItems={lineItems} setLineItems={setLineItems} />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="payment-terms">Payment Terms</Label>
          <Select defaultValue="14days">
            <SelectTrigger id="payment-terms" className="bg-white border-neutral-200">
              <SelectValue placeholder="Select payment terms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 days</SelectItem>
              <SelectItem value="14days">14 days</SelectItem>
              <SelectItem value="30days">30 days</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="notes">Notes (visible to client)</Label>
            <div className="text-sm text-neutral-500">0/500</div>
          </div>
          <Input id="notes" className="bg-white border-neutral-200" placeholder="Add any additional notes for your client" />
        </div>
      </div>
    </div>
  );
}
