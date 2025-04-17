
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvoiceCard } from "./InvoiceCard";

interface Invoice {
  id: string;
  client: string;
  title: string;
  amount: string;
  date: string;
  dueDate: string;
  status: "pending" | "paid" | "overdue";
  paymentMethod: string | null;
}

interface InvoiceListProps {
  invoices: Invoice[];
  searchTerm: string;
}

export const InvoiceList = ({ invoices, searchTerm }: InvoiceListProps) => {
  const filteredInvoices = (status?: "pending" | "paid" | "overdue") => {
    return invoices
      .filter(invoice => status ? invoice.status === status : true)
      .filter(invoice => 
        invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };
  
  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all">All Invoices</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="paid">Paid</TabsTrigger>
        <TabsTrigger value="overdue">Overdue</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="mt-4 space-y-4">
        {filteredInvoices().map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </TabsContent>
      
      <TabsContent value="pending" className="mt-4 space-y-4">
        {filteredInvoices("pending").map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </TabsContent>
      
      <TabsContent value="paid" className="mt-4 space-y-4">
        {filteredInvoices("paid").map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </TabsContent>
      
      <TabsContent value="overdue" className="mt-4 space-y-4">
        {filteredInvoices("overdue").map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </TabsContent>
    </Tabs>
  );
};
