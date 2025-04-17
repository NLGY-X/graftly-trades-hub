
import React from "react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { DrawerFooter } from "@/components/ui/drawer";

interface PaymentActionsProps {
  onCancel: () => void;
  onSubmit: () => void;
  isMobile: boolean;
}

export const PaymentActions = ({ onCancel, onSubmit, isMobile }: PaymentActionsProps) => {
  if (isMobile) {
    return (
      <DrawerFooter className="pt-2">
        <Button className="bg-[#059669] hover:bg-[#059669]/90" onClick={onSubmit}>
          Record Payment
        </Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </DrawerFooter>
    );
  }
  
  return (
    <DialogFooter>
      <Button variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button className="bg-[#059669] hover:bg-[#059669]/90" onClick={onSubmit}>
        Record Payment
      </Button>
    </DialogFooter>
  );
};
