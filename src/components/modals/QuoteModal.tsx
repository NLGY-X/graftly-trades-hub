
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { UserSquare2, Plus, GripVertical, Info } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const { toast } = useToast();
  const [lineItems, setLineItems] = React.useState([
    { id: "1", description: "", quantity: 1, unitPrice: 0, vatRate: 20, total: 0 }
  ]);

  const handleAddLineItem = () => {
    setLineItems([
      ...lineItems,
      { 
        id: Math.random().toString(36).substring(7), 
        description: "", 
        quantity: 1, 
        unitPrice: 0, 
        vatRate: 20, 
        total: 0 
      }
    ]);
  };

  const calculateSubtotal = () => {
    return lineItems.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
  };

  const calculateVAT = () => {
    return lineItems.reduce((acc, item) => {
      const itemVat = (item.quantity * item.unitPrice) * (item.vatRate / 100);
      return acc + itemVat;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateVAT();
  };

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
            <Card className="mb-6 border-[#1E40AF]/10">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40AF]/10 text-[#1E40AF]">
                    <UserSquare2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Client Information</h3>
                        <p className="text-sm text-muted-foreground">Select existing client or add new</p>
                      </div>
                      <Button variant="outline" size="sm" className="text-sm">Add New</Button>
                    </div>
                    <div className="mt-4">
                      <Select>
                        <SelectTrigger className="bg-white border-neutral-200 w-full">
                          <SelectValue placeholder="Select a client" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="client1">John & Sarah Thompson</SelectItem>
                          <SelectItem value="client2">Mike Wilson</SelectItem>
                          <SelectItem value="client3">Jennifer Garcia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="details">Quote Details</TabsTrigger>
                <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quote-ref">Quote Reference</Label>
                    <Input id="quote-ref" defaultValue="Q-2025-0042" className="bg-white border-neutral-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valid-until">Valid Until</Label>
                    <Input type="date" id="valid-until" className="bg-white border-neutral-200" />
                  </div>
                </div>

                <div className="border rounded-md border-neutral-200 bg-white">
                  <div className="p-4 border-b border-neutral-200 bg-neutral-50">
                    <h3 className="font-medium">Line Items</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-12 gap-2 mb-2 text-sm font-medium text-neutral-500">
                      <div className="col-span-1"></div>
                      <div className="col-span-5">Description</div>
                      <div className="col-span-1">Qty</div>
                      <div className="col-span-2">Unit Price</div>
                      <div className="col-span-1">VAT %</div>
                      <div className="col-span-2 text-right">Total</div>
                    </div>
                    
                    {lineItems.map((item, index) => (
                      <div key={item.id} className={cn(
                        "grid grid-cols-12 gap-2 py-2 items-center",
                        index % 2 === 0 ? "bg-neutral-50" : "bg-white"
                      )}>
                        <div className="col-span-1 flex justify-center">
                          <div className="cursor-move">
                            <GripVertical className="h-4 w-4 text-neutral-400" />
                          </div>
                        </div>
                        <div className="col-span-5">
                          <Input 
                            placeholder="Enter description" 
                            className="border-dashed bg-transparent"
                          />
                        </div>
                        <div className="col-span-1">
                          <Input 
                            type="number" 
                            min="1" 
                            defaultValue="1" 
                            className="border-dashed bg-transparent"
                          />
                        </div>
                        <div className="col-span-2">
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-500">£</span>
                            <Input 
                              type="number" 
                              min="0" 
                              step="0.01" 
                              className="pl-6 border-dashed bg-transparent" 
                            />
                          </div>
                        </div>
                        <div className="col-span-1">
                          <Select defaultValue="20">
                            <SelectTrigger className="border-dashed bg-transparent h-9">
                              <SelectValue placeholder="%" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">0%</SelectItem>
                              <SelectItem value="5">5%</SelectItem>
                              <SelectItem value="20">20%</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-2 text-right font-medium">
                          £0.00
                        </div>
                      </div>
                    ))}
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-2 w-full border border-dashed border-neutral-200 flex items-center justify-center"
                      onClick={handleAddLineItem}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Item
                    </Button>
                    
                    <div className="mt-4 border-t border-neutral-200 pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Subtotal:</span>
                          <span>£{calculateSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">VAT:</span>
                          <span>£{calculateVAT().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-medium pt-2 border-t border-neutral-200">
                          <span>Total:</span>
                          <span className="text-lg">£{calculateTotal().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="payment-terms">Payment Terms</Label>
                    <Select defaultValue="14days">
                      <SelectTrigger id="payment-terms" className="bg-white border-neutral-200">
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">7 days</SelectItem>
                        <SelectItem value="14days">14 days</SelectItem>
                        <SelectItem value="30days">30 days</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notes">Notes (visible to client)</Label>
                      <div className="text-sm text-neutral-500">0/500</div>
                    </div>
                    <Input id="notes" className="bg-white border-neutral-200" placeholder="Add any additional notes for your client" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="terms" className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">Standard Terms & Conditions</h4>
                    <p className="text-sm text-amber-700">These terms will be included with your quote. You can customize them below.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Input
                    className="bg-white border-neutral-200"
                    defaultValue="Standard Terms & Conditions for Services"
                  />
                  <textarea 
                    className="w-full min-h-[300px] p-3 rounded-md border border-neutral-200 bg-white"
                    defaultValue={`1. ACCEPTANCE
This quote is valid for 30 days from the date of issue.
Acceptance of this quote can be made in writing or by payment of the deposit.

2. PAYMENT TERMS
A deposit of 50% is required to secure materials and commence work.
Final payment is due within 14 days of job completion.
Late payments will incur interest at 8% above the Bank of England base rate.

3. VARIATIONS
Any variations to the quoted work must be agreed in writing.
Additional charges may apply for variations or unforeseen circumstances.

4. CANCELLATION
Cancellation after acceptance may incur charges for materials ordered and time allocated.

5. WARRANTY
All workmanship is guaranteed for 12 months from completion.
Manufacturer warranties apply to all installed products and materials.`}
                  />
                </div>
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
