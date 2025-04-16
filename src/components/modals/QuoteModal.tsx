
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ClientSection } from "./quote/ClientSection";
import { QuoteDetailsTab } from "./quote/QuoteDetailsTab";
import { TermsConditionsTab } from "./quote/TermsConditionsTab";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Quote Saved",
      description: "Your quote has been saved successfully."
    });
    onOpenChange(false);
  };

  const handleSend = () => {
    toast({
      title: "Quote Sent",
      description: "Your quote has been sent to the client."
    });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" size="wide" className="w-[800px] max-w-full bg-[#EEF2FF] border-l border-[#1E40AF]/30 p-0">
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 p-6 border-b border-neutral-200">
            <SheetHeader className="text-left pb-2">
              <SheetTitle className="text-[#1E40AF]">New Quote</SheetTitle>
              <SheetDescription>Create a detailed quote for your client</SheetDescription>
            </SheetHeader>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="text-sm">Convert from Enquiry</Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-6 px-6">
            <ClientSection />

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="details">Quote Details</TabsTrigger>
                <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-6">
                <QuoteDetailsTab />
              </TabsContent>
              
              <TabsContent value="terms" className="space-y-4">
                <TermsConditionsTab />
              </TabsContent>
            </Tabs>
          </div>

          <SheetFooter className="border-t border-neutral-200 p-6 flex flex-row justify-between gap-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-[#1E40AF] text-[#1E40AF]" onClick={handleSave}>
                Save
              </Button>
              <Button className="bg-[#1E40AF] hover:bg-[#1E40AF]/90" onClick={handleSend}>
                Save & Send Quote
              </Button>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
