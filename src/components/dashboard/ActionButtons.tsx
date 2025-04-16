
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, ClipboardList, Hammer, Receipt, CreditCard } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

export function ActionButtons() {
  const { openModal } = useModal();
  
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <Button 
        onClick={() => openModal("newEnquiry")}
        className="bg-[#7E22CE] hover:bg-[#7E22CE]/90 text-white"
      >
        <Plus className="mr-2 h-4 w-4" /> New Enquiry
      </Button>
      
      <Button 
        onClick={() => openModal("newQuote")}
        className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white"
      >
        <ClipboardList className="mr-2 h-4 w-4" /> New Quote
      </Button>
      
      <Button 
        onClick={() => openModal("jobManagement")}
        className="bg-[#059669] hover:bg-[#059669]/90 text-white"
      >
        <Hammer className="mr-2 h-4 w-4" /> Manage Job
      </Button>
      
      <Button 
        onClick={() => openModal("invoice")}
        className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
      >
        <Receipt className="mr-2 h-4 w-4" /> New Invoice
      </Button>
      
      <Button 
        onClick={() => openModal("paymentRecording")}
        className="bg-[#059669] hover:bg-[#059669]/90 text-white"
      >
        <CreditCard className="mr-2 h-4 w-4" /> Record Payment
      </Button>
    </div>
  );
}
