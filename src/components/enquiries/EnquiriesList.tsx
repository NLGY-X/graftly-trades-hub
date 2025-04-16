
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
