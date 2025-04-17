
import React from "react";
import { Check, AlertTriangle } from "lucide-react";

interface PaymentInfoProps {
  outstandingAmount: number;
  isFullPayment: boolean;
}

export const PaymentInfo = ({ outstandingAmount, isFullPayment }: PaymentInfoProps) => {
  return (
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
  );
};
