
import React from "react";
import { useModal } from "@/contexts/ModalContext";
import { EnquiryModal } from "./EnquiryModal";
import { QuoteModal } from "./QuoteModal";
import { JobModal } from "./job/JobModal";
import { NewJobModal } from "./job/NewJobModal";
import { InvoiceModal } from "./InvoiceModal";
import { PaymentModal } from "./PaymentModal";

export function ModalRoot() {
  const { modalType, modalProps, closeModal } = useModal();

  return (
    <>
      <EnquiryModal 
        open={modalType === "newEnquiry"} 
        onOpenChange={(open) => !open && closeModal()} 
        {...(modalType === "newEnquiry" ? modalProps : {})}
      />
      
      <QuoteModal 
        open={modalType === "newQuote"} 
        onOpenChange={(open) => !open && closeModal()} 
        {...(modalType === "newQuote" ? modalProps : {})}
      />
      
      <JobModal 
        open={modalType === "jobManagement"} 
        onOpenChange={(open) => !open && closeModal()} 
        {...(modalType === "jobManagement" ? modalProps : {})}
      />
      
      <NewJobModal 
        open={modalType === "newJob"} 
        onOpenChange={(open) => !open && closeModal()} 
        {...(modalType === "newJob" ? modalProps : {})}
      />
      
      <InvoiceModal 
        open={modalType === "invoice"} 
        onOpenChange={(open) => !open && closeModal()} 
        {...(modalType === "invoice" ? modalProps : {})}
      />
      
      <PaymentModal 
        open={modalType === "paymentRecording"} 
        onOpenChange={(open) => !open && closeModal()} 
        {...(modalType === "paymentRecording" ? modalProps : {})}
      />
    </>
  );
}
