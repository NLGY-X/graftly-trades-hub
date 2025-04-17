
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard } from "lucide-react";

export function InvoicePaymentOptions() {
  return (
    <div className="border rounded-md border-neutral-200 bg-white">
      <div className="p-4 border-b border-neutral-200 bg-neutral-50">
        <h3 className="font-medium">Payment Options</h3>
      </div>
      <div className="p-4">
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
            <Label>Accepted Payment Methods</Label>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-3 py-1.5">
                <CreditCard className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-blue-700">Credit Card</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-md px-3 py-1.5">
                <CreditCard className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-700">Bank Transfer</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bank-details">Bank Details</Label>
            <Input 
              id="bank-details" 
              placeholder="Enter bank details" 
              className="bg-white border-neutral-200"
              defaultValue="Graftly Ltd - Sort Code: 12-34-56 - Account: 12345678"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
