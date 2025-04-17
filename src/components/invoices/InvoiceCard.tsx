
import React from "react";
import { FileText, CreditCard, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useModal } from "@/contexts/ModalContext";

interface InvoiceProps {
  invoice: {
    id: string;
    client: string;
    title: string;
    amount: string;
    date: string;
    dueDate: string;
    status: "pending" | "paid" | "overdue";
    paymentMethod: string | null;
  };
}

export const statusConfig = {
  pending: { label: "Pending", variant: "default" as const, icon: Clock },
  paid: { label: "Paid", variant: "secondary" as const, icon: CheckCircle },
  overdue: { label: "Overdue", variant: "destructive" as const, icon: AlertTriangle }
};

export const InvoiceCard = ({ invoice }: InvoiceProps) => {
  const { openModal } = useModal();
  const StatusIcon = statusConfig[invoice.status].icon;
  
  const handleRecordPayment = () => {
    openModal("paymentRecording", {
      invoiceRef: invoice.id,
      outstandingAmount: parseFloat(invoice.amount.replace('£', ''))
    });
  };
  
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{invoice.title}</h3>
                <span className="text-xs text-muted-foreground">{invoice.id}</span>
              </div>
              <p className="text-sm text-muted-foreground">{invoice.client}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <span>Issued: {invoice.date}</span>
                <span>•</span>
                <span>Due: {invoice.dueDate}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <Badge variant={statusConfig[invoice.status].variant} className="flex items-center gap-1">
              <StatusIcon className="h-3 w-3" />
              {statusConfig[invoice.status].label}
            </Badge>
            <div className="text-lg font-semibold">{invoice.amount}</div>
            {invoice.paymentMethod && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <CreditCard className="h-3 w-3" />
                {invoice.paymentMethod}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="sm">View Invoice</Button>
          {invoice.status !== "paid" && (
            <Button size="sm" onClick={handleRecordPayment}>Record Payment</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
