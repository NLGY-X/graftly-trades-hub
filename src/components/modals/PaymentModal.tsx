
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

import { PaymentInfo } from "@/components/payment/PaymentInfo";
import { PaymentForm } from "@/components/payment/PaymentForm";
import { PaymentActions } from "@/components/payment/PaymentActions";

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
            <PaymentInfo 
              outstandingAmount={outstandingAmount} 
              isFullPayment={isFullPayment} 
            />
            
            <PaymentForm 
              amount={amount}
              setAmount={setAmount}
              isFullPayment={isFullPayment}
              setIsFullPayment={setIsFullPayment}
              sendReceipt={sendReceipt}
              setSendReceipt={setSendReceipt}
              outstandingAmount={outstandingAmount}
              isMobile={true}
            />
          </div>
          <PaymentActions 
            onCancel={() => onOpenChange(false)} 
            onSubmit={handleRecordPayment}
            isMobile={true}
          />
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
        
        <PaymentInfo 
          outstandingAmount={outstandingAmount} 
          isFullPayment={isFullPayment} 
        />
        
        <PaymentForm 
          amount={amount}
          setAmount={setAmount}
          isFullPayment={isFullPayment}
          setIsFullPayment={setIsFullPayment}
          sendReceipt={sendReceipt}
          setSendReceipt={setSendReceipt}
          outstandingAmount={outstandingAmount}
          isMobile={false}
        />
        
        <PaymentActions 
          onCancel={() => onOpenChange(false)} 
          onSubmit={handleRecordPayment}
          isMobile={false}
        />
      </DialogContent>
    </Dialog>
  );
}
