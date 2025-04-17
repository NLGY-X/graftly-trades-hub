import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Check, Receipt } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoiceRef?: string;
  outstandingAmount?: number;
}

export function PaymentModal({ 
  open, 
  onOpenChange, 
  invoiceRef = "INV-2025-0042", 
  outstandingAmount = 3960 
}: PaymentModalProps) {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [amount, setAmount] = useState(outstandingAmount);
  const [isFullPayment, setIsFullPayment] = useState(true);
  const [sendReceipt, setSendReceipt] = useState(true);
  
  const handleRecordPayment = () => {
    toast({
      title: "Payment Recorded",
      description: `£${amount.toFixed(2)} payment recorded for invoice ${invoiceRef}`,
      variant: "default"
    });
    onOpenChange(false);
  };
  
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="bg-[#ECFDF5] border-t border-[#059669]/30">
          <div className="mx-auto mt-4 h-1 w-[32px] rounded-full bg-[#059669]/30" />
          <DrawerHeader>
            <DrawerTitle className="text-[#059669]">Record Payment</DrawerTitle>
            <DrawerDescription className="text-sm">
              Recording payment for Invoice <span className="font-medium">{invoiceRef}</span>
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <div className="mb-6 p-3 bg-white rounded-lg border border-neutral-200 flex justify-between items-center">
              <div>
                <div className="text-sm font-medium">Outstanding Amount</div>
                <div className="text-2xl font-bold">£{outstandingAmount.toFixed(2)}</div>
              </div>
              {isFullPayment ? (
                <div className="flex items-center gap-1 bg-[#059669]/10 text-[#059669] px-3 py-1 rounded-full text-sm font-medium">
                  <Check className="h-4 w-4" />
                  <span>Full Payment</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Partial Payment</span>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payment-amount-mobile">Payment Amount</Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">£</span>
                  <Input 
                    id="payment-amount-mobile"
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
                <Label htmlFor="payment-date-mobile">Payment Date</Label>
                <Input 
                  id="payment-date-mobile"
                  type="date" 
                  defaultValue={format(new Date(), "yyyy-MM-dd")}
                  className="bg-white border-neutral-200" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="payment-method-mobile">Payment Method</Label>
                <Select defaultValue="bank">
                  <SelectTrigger id="payment-method-mobile" className="bg-white border-neutral-200">
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
                <Label htmlFor="reference-mobile">Reference/Transaction ID</Label>
                <Input 
                  id="reference-mobile"
                  placeholder="Enter reference or transaction ID" 
                  className="bg-white border-neutral-200" 
                />
              </div>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="final-payment-mobile" 
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
                  <Label htmlFor="final-payment-mobile">Mark as final payment</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="send-receipt-mobile" 
                    checked={sendReceipt}
                    onCheckedChange={(checked) => setSendReceipt(!!checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="send-receipt-mobile" className="flex items-center gap-1">
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
          </div>
          <DrawerFooter className="pt-2">
            <Button className="bg-[#059669] hover:bg-[#059669]/90" onClick={handleRecordPayment}>
              Record Payment
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#ECFDF5] border border-[#059669]/30 max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[#059669]">Record Payment</DialogTitle>
          <DialogDescription className="text-sm">
            Recording payment for Invoice <span className="font-medium">{invoiceRef}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="mb-6 p-4 bg-white rounded-lg border border-neutral-200 flex justify-between items-center">
          <div>
            <div className="text-sm font-medium">Outstanding Amount</div>
            <div className="text-2xl font-bold">£{outstandingAmount.toFixed(2)}</div>
          </div>
          {isFullPayment ? (
            <div className="flex items-center gap-1 bg-[#059669]/10 text-[#059669] px-3 py-1 rounded-full text-sm font-medium">
              <Check className="h-4 w-4" />
              <span>Full Payment</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>Partial Payment</span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="payment-amount">Payment Amount</Label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">£</span>
              <Input 
                id="payment-amount"
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
            <Label htmlFor="payment-date">Payment Date</Label>
            <Input 
              id="payment-date"
              type="date" 
              defaultValue={format(new Date(), "yyyy-MM-dd")}
              className="bg-white border-neutral-200" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select defaultValue="bank">
              <SelectTrigger id="payment-method" className="bg-white border-neutral-200">
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
            <Label htmlFor="reference">Reference/Transaction ID</Label>
            <Input 
              id="reference"
              placeholder="Enter reference or transaction ID" 
              className="bg-white border-neutral-200" 
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="final-payment" 
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
            <Label htmlFor="final-payment">Mark as final payment</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="send-receipt" 
              checked={sendReceipt}
              onCheckedChange={(checked) => setSendReceipt(!!checked)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="send-receipt" className="flex items-center gap-1">
                Send receipt
                <Receipt className="h-3.5 w-3.5 text-muted-foreground" />
              </Label>
              <p className="text-sm text-muted-foreground">
                Email a receipt to the client
              </p>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-[#059669] hover:bg-[#059669]/90" onClick={handleRecordPayment}>
            Record Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
