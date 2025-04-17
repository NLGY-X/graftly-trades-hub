
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
    <ScrollArea className="flex-1 w-full">
      <Tabs defaultValue="details" className="h-full w-full">
        <div className="px-4 py-3 md:px-6 md:py-4 border-b border-neutral-200 sticky top-0 z-10 bg-[#FEF2F2]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Invoice Details</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="w-full">
          <TabsContent value="details" className="px-4 py-2 md:px-6 md:py-4 space-y-6 mt-0 block">
            <InvoiceDetailsTab />
          </TabsContent>
          
          <TabsContent value="preview" className="px-4 py-2 md:px-6 md:py-4 mt-0 block">
            <InvoicePreviewTab />
          </TabsContent>
        </div>
      </Tabs>
    </ScrollArea>
  );
}
