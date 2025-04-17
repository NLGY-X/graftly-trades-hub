
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Receipt } from "lucide-react";
import { format } from "date-fns";

interface PaymentFormProps {
  amount: number;
  setAmount: (amount: number) => void;
  isFullPayment: boolean;
  setIsFullPayment: (isFullPayment: boolean) => void;
  sendReceipt: boolean;
  setSendReceipt: (sendReceipt: boolean) => void;
  outstandingAmount: number;
  isMobile: boolean;
}

export const PaymentForm = ({ 
  amount, 
  setAmount, 
  isFullPayment, 
  setIsFullPayment, 
  sendReceipt, 
  setSendReceipt, 
  outstandingAmount,
  isMobile
}: PaymentFormProps) => {
  const idSuffix = isMobile ? "-mobile" : "";
  
  return (
    <div className={isMobile ? "space-y-4" : "grid grid-cols-2 gap-4"}>
      <div className="space-y-2">
        <Label htmlFor={`payment-amount${idSuffix}`}>Payment Amount</Label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">£</span>
          <Input 
            id={`payment-amount${idSuffix}`}
            type="number" 
            value={amount}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setAmount(value);
              setIsFullPayment(value === outstandingAmount);
            }}
            className="bg-white border-neutral-200 pl-7" 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor={`payment-date${idSuffix}`}>Payment Date</Label>
        <Input 
          id={`payment-date${idSuffix}`}
          type="date" 
          defaultValue={format(new Date(), "yyyy-MM-dd")}
          className="bg-white border-neutral-200" 
        />
      </div>
      
      {isMobile ? (
        <>
          <div className="space-y-2">
            <Label htmlFor={`payment-method${idSuffix}`}>Payment Method</Label>
            <Select defaultValue="bank">
              <SelectTrigger id={`payment-method${idSuffix}`} className="bg-white border-neutral-200">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="card">Credit/Debit Card</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="check">Check</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor={`reference${idSuffix}`}>Reference/Transaction ID</Label>
            <Input 
              id={`reference${idSuffix}`}
              placeholder="Enter reference or transaction ID" 
              className="bg-white border-neutral-200" 
            />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor={`payment-method${idSuffix}`}>Payment Method</Label>
            <Select defaultValue="bank">
              <SelectTrigger id={`payment-method${idSuffix}`} className="bg-white border-neutral-200">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="card">Credit/Debit Card</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="check">Check</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor={`reference${idSuffix}`}>Reference/Transaction ID</Label>
            <Input 
              id={`reference${idSuffix}`}
              placeholder="Enter reference or transaction ID" 
              className="bg-white border-neutral-200" 
            />
          </div>
        </>
      )}
      
      <div className={isMobile ? "space-y-4 pt-2" : "space-y-4 col-span-2"}>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id={`final-payment${idSuffix}`} 
            checked={isFullPayment}
            onCheckedChange={(checked) => {
              if (checked) {
                setAmount(outstandingAmount);
                setIsFullPayment(true);
              } else {
                setIsFullPayment(false);
              }
            }}
          />
          <Label htmlFor={`final-payment${idSuffix}`}>Mark as final payment</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id={`send-receipt${idSuffix}`} 
            checked={sendReceipt}
            onCheckedChange={(checked) => setSendReceipt(!!checked)}
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor={`send-receipt${idSuffix}`} className="flex items-center gap-1">
              Send receipt
              <Receipt className="h-3.5 w-3.5 text-muted-foreground" />
            </Label>
            <p className="text-sm text-muted-foreground">
              Email a receipt to the client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
