
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
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
        size="wide"
        className={cn(
          isMobile ? "h-[95vh] rounded-t-xl p-0 inset-x-0 w-full" : "w-full max-w-[1200px] p-0",
          "bg-[#F3F0FF] border-l border-[#7E22CE]/30 overflow-hidden flex flex-col"
        )}
      >
        <div className="flex-shrink-0 px-4 py-3 md:p-6 border-b border-neutral-200">
          <SheetHeader className="text-left pb-2">
            {isMobile && (
              <div className="mx-auto mb-3 h-1 w-[32px] rounded-full bg-[#7E22CE]/30" />
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
              <SheetTitle className="text-[#7E22CE]">New Quote</SheetTitle>
            </div>
            <SheetDescription>Create a detailed quote for your client</SheetDescription>
          </SheetHeader>
          <div className="mt-2">
            <Button variant="outline" size="sm" className="text-sm">Convert from Enquiry</Button>
          </div>
        </div>

        <ScrollArea className="flex-1 px-4 md:px-6 py-2">
          <div className="pr-2 space-y-6">
            <ClientSection />

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 rounded-md">
                <TabsTrigger value="details" className="rounded-md">Quote Details</TabsTrigger>
                <TabsTrigger value="terms" className="rounded-md">Terms & Conditions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="focus:outline-none">
                <QuoteDetailsTab />
              </TabsContent>
              
              <TabsContent value="terms" className="focus:outline-none">
                <TermsConditionsTab />
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>

        <SheetFooter className="border-t border-neutral-200 p-4 md:p-6 flex flex-col md:flex-row-reverse md:justify-between gap-4 bg-[#F3F0FF] flex-shrink-0">
          {isMobile ? (
            <>
              <Button className="bg-[#7E22CE] hover:bg-[#7E22CE]/90 w-full text-white font-medium" onClick={handleSend}>
                Save & Send Quote
              </Button>
              <Button variant="outline" className="border-[#7E22CE] text-[#7E22CE] w-full" onClick={handleSave}>
                Save
              </Button>
              <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full">
                Cancel
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="border-[#7E22CE] text-[#7E22CE]" onClick={handleSave}>
                  Save
                </Button>
                <Button className="bg-[#7E22CE] hover:bg-[#7E22CE]/90" onClick={handleSend}>
                  Save & Send Quote
                </Button>
              </div>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
