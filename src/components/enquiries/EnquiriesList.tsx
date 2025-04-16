
import React from "react";
import { Enquiry } from "@/data/mockEnquiries";
import { EnquiryCard } from "./EnquiryCard";
import { EnquiriesTable } from "./EnquiriesTable";

interface EnquiriesListProps {
  enquiries: Enquiry[];
  view: "grid" | "list";
  onConvertToQuote: (enquiryId: string) => void;
  onEditEnquiry: (enquiryId: string) => void;
}

export function EnquiriesList({ enquiries, view, onConvertToQuote, onEditEnquiry }: EnquiriesListProps) {
  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {enquiries.map((enquiry) => (
          <EnquiryCard
            key={enquiry.id}
            enquiry={enquiry}
            onConvertToQuote={onConvertToQuote}
            onEditEnquiry={onEditEnquiry}
          />
        ))}
      </div>
    );
  }
  
  return (
    <EnquiriesTable 
      enquiries={enquiries} 
      onConvertToQuote={onConvertToQuote}
      onEditEnquiry={onEditEnquiry}
    />
  );
}
