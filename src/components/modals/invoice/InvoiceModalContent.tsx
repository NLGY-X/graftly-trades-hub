
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InvoiceDetailsTab } from "./InvoiceDetailsTab";
import { InvoicePreviewTab } from "./InvoicePreviewTab";

interface InvoiceModalContentProps {
  isMobile: boolean;
}

export function InvoiceModalContent({ isMobile }: InvoiceModalContentProps) {
  return (
    <div className="flex-1 w-full overflow-hidden">
      <Tabs defaultValue="details" className="h-full w-full flex flex-col">
        <div className="px-4 py-3 md:px-6 md:py-4 border-b border-neutral-200 sticky top-0 z-10 bg-[#FEF2F2]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Invoice Details</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex-1 relative overflow-hidden">
          <TabsContent 
            value="details" 
            className="h-full w-full px-4 pb-4 md:px-6 md:pb-6 mt-0 overflow-auto"
          >
            <ScrollArea className="h-full w-full">
              <div className="space-y-6 pb-6">
                <InvoiceDetailsTab />
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent 
            value="preview" 
            className="h-full w-full px-4 pb-4 md:px-6 md:pb-6 mt-0 overflow-auto"
          >
            <ScrollArea className="h-full w-full">
              <div className="pb-6">
                <InvoicePreviewTab />
              </div>
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
