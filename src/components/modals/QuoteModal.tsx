
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft } from "lucide-react";
import { ClientSection } from "./quote/ClientSection";
import { QuoteDetailsTab } from "./quote/QuoteDetailsTab";
import { TermsConditionsTab } from "./quote/TermsConditionsTab";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("details");

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
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        size="lg"
        className={cn(
          isMobile ? "h-[90vh] rounded-t-xl pb-0 pt-4" : "p-0",
          "bg-[#EEF2FF] border-l border-[#1E40AF]/30"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 p-4 md:p-6 border-b border-neutral-200">
            <SheetHeader className="text-left pb-2">
              {isMobile && (
                <div className="mx-auto mb-4 h-1 w-[32px] rounded-full bg-[#1E40AF]/30" />
              )}
              <div className="flex items-center mb-1">
                {isMobile && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 mr-2 -ml-2" 
                    onClick={() => onOpenChange(false)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                )}
                <SheetTitle className="text-[#1E40AF]">New Quote</SheetTitle>
              </div>
              <SheetDescription>Create a detailed quote for your client</SheetDescription>
            </SheetHeader>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="text-sm">Convert from Enquiry</Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4 md:py-6 md:px-6">
            <ClientSection />

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 rounded-md">
                <TabsTrigger value="details" className="rounded-md">Quote Details</TabsTrigger>
                <TabsTrigger value="terms" className="rounded-md">Terms & Conditions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-6 focus:outline-none">
                <QuoteDetailsTab />
              </TabsContent>
              
              <TabsContent value="terms" className="space-y-4 focus:outline-none">
                <TermsConditionsTab />
              </TabsContent>
            </Tabs>
          </div>

          <SheetFooter className="border-t border-neutral-200 p-4 md:p-6 flex flex-col md:flex-row-reverse md:justify-between gap-4 bg-[#EEF2FF]">
            {isMobile ? (
              <>
                <Button className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 w-full text-white font-medium" onClick={handleSend}>
                  Save & Send Quote
                </Button>
                <Button variant="outline" className="border-[#1E40AF] text-[#1E40AF] w-full" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full">
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="border-[#1E40AF] text-[#1E40AF]" onClick={handleSave}>
                    Save
                  </Button>
                  <Button className="bg-[#1E40AF] hover:bg-[#1E40AF]/90" onClick={handleSend}>
                    Save & Send Quote
                  </Button>
                </div>
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
              </>
            )}
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
