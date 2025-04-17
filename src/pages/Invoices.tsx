
import React, { useState } from "react";
import { InvoiceHeader } from "@/components/invoices/InvoiceHeader";
import { InvoiceFilters } from "@/components/invoices/InvoiceFilters";
import { InvoiceList } from "@/components/invoices/InvoiceList";
import { allInvoices } from "@/data/mockInvoiceData";

export default function Invoices() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const outstandingTotal = allInvoices
    .filter(inv => inv.status !== "paid")
    .reduce((total, inv) => total + parseFloat(inv.amount.replace('£', '')), 0);
  
  return (
    <div className="space-y-6 pb-8">
      <InvoiceHeader outstandingTotal={outstandingTotal} />
      <InvoiceFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <InvoiceList invoices={allInvoices} searchTerm={searchTerm} />
    </div>
  );
}
