
import React from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/contexts/ModalContext";

interface InvoiceHeaderProps {
  outstandingTotal: number;
}

export const InvoiceHeader = ({ outstandingTotal }: InvoiceHeaderProps) => {
  const { openModal } = useModal();
  
  const handleNewInvoice = () => {
    openModal("invoice");
  };
  
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Invoices & Payments</h2>
        <p className="text-muted-foreground">
          Outstanding: <span className="font-semibold text-red-500">£{outstandingTotal.toFixed(2)}</span>
        </p>
      </div>
      <Button onClick={handleNewInvoice}>
        <PlusIcon className="mr-2 h-4 w-4" />
        New Invoice
      </Button>
    </div>
  );
};
