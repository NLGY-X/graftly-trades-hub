import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserSquare2, CreditCard, PlusCircle, Printer, Mail, Download, Trash, ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InvoiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InvoiceModal({ open, onOpenChange }: InvoiceModalProps) {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleSave = () => {
    toast({
      title: "Invoice Saved",
      description: "Your invoice has been saved successfully."
    });
    onOpenChange(false);
  };

  const handleSend = () => {
    toast({
      title: "Invoice Sent",
      description: "Your invoice has been sent to the client."
    });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        size="wide" 
        className={cn(
          isMobile ? "h-[95vh] rounded-t-xl p-0 inset-x-0 w-full" : "p-0",
          "bg-[#FEF2F2] border-l border-[#F97316]/30 overflow-hidden flex flex-col"
        )}
      >
        <div className="flex-shrink-0 px-4 py-3 md:p-6 border-b border-neutral-200">
          <SheetHeader className="text-left pb-2">
            {isMobile && (
              <div className="mx-auto mb-3 h-1 w-[32px] rounded-full bg-[#F97316]/30" />
            )}
            <div className="flex items-center">
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
              <SheetTitle className="text-[#8E9196] dark:text-[#D6BCFA]">New Invoice</SheetTitle>
            </div>
            <SheetDescription className="text-[#8A898C] dark:text-[#9F9EA1]">
              Create a professional invoice for your client
            </SheetDescription>
          </SheetHeader>
          <div className="mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm text-[#8E9196] hover:bg-[#F1F0FB] dark:text-[#C8C8C9]"
            >
              Generate from Job
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <Tabs defaultValue="details" className="h-full">
            <div className="px-4 py-3 md:px-6 md:py-4 border-b border-neutral-200 sticky top-0 z-10 bg-[#FEF2F2]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Invoice Details</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="px-4 py-2 md:px-6 md:py-4">
              <TabsContent value="details" className="space-y-6 pr-2">
                <Card className="border-[#F97316]/10">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316]/10 text-[#8E9196] dark:text-[#9F9EA1]">
                        <UserSquare2 className="h-5 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-[#403E43] dark:text-[#F1F0FB]">Client Information</h3>
                            <p className="text-sm text-[#8A898C] dark:text-[#9F9EA1]">Select existing client or add new</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Select defaultValue="client1">
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
                        <div className="mt-4 p-3 bg-neutral-50 rounded-md border border-neutral-200">
                          <div className="text-sm">
                            <div className="font-medium">John & Sarah Thompson</div>
                            <div className="text-neutral-500 mt-1">123 Maple Street, Richmond</div>
                            <div className="text-neutral-500">thompson@example.com</div>
                            <div className="text-neutral-500">(555) 123-4567</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="invoice-number" className="text-[#403E43] dark:text-[#F1F0FB]">Invoice Number</Label>
                    <Input 
                      id="invoice-number" 
                      defaultValue="INV-2025-0042" 
                      className="bg-white border-neutral-200 text-[#403E43] dark:text-[#F1F0FB] placeholder:text-[#8A898C] dark:placeholder:text-[#9F9EA1]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="po-number">Reference/PO Number</Label>
                    <Input id="po-number" placeholder="Enter reference number" className="bg-white border-neutral-200" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="issue-date">Issue Date</Label>
                    <Input type="date" id="issue-date" className="bg-white border-neutral-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input type="date" id="due-date" className="bg-white border-neutral-200" />
                  </div>
                </div>
                
                <div className="border rounded-md border-neutral-200 bg-white">
                  <div className="p-4 border-b border-neutral-200 bg-neutral-50 flex justify-between items-center">
                    <h3 className="font-medium">Line Items</h3>
                    <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                      Import from Job
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-12 gap-2 mb-2 text-sm font-medium text-neutral-500">
                      <div className="col-span-6">Description</div>
                      <div className="col-span-1">Qty</div>
                      <div className="col-span-2">Unit Price</div>
                      <div className="col-span-1">VAT %</div>
                      <div className="col-span-2 text-right">Total</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="grid grid-cols-12 gap-2 py-2 items-center bg-neutral-50 rounded-md border border-neutral-200">
                        <div className="col-span-6 px-2">
                          Kitchen Cabinet Installation
                        </div>
                        <div className="col-span-1 px-2">1</div>
                        <div className="col-span-2 px-2">£2,500.00</div>
                        <div className="col-span-1 px-2">20%</div>
                        <div className="col-span-2 text-right px-3 font-medium">
                          £2,500.00
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-12 gap-2 py-2 items-center bg-neutral-50 rounded-md border border-neutral-200">
                        <div className="col-span-6 px-2">
                          Plumbing Work
                        </div>
                        <div className="col-span-1 px-2">1</div>
                        <div className="col-span-2 px-2">£350.00</div>
                        <div className="col-span-1 px-2">20%</div>
                        <div className="col-span-2 text-right px-3 font-medium">
                          £350.00
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-12 gap-2 py-2 items-center bg-neutral-50 rounded-md border border-neutral-200">
                        <div className="col-span-6 px-2">
                          Electrical Work
                        </div>
                        <div className="col-span-1 px-2">1</div>
                        <div className="col-span-2 px-2">£450.00</div>
                        <div className="col-span-1 px-2">20%</div>
                        <div className="col-span-2 text-right px-3 font-medium">
                          £450.00
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-2 w-full border border-dashed border-neutral-200 flex items-center justify-center"
                    >
                      <PlusCircle className="h-4 w-4 mr-1" /> Add Item
                    </Button>
                    
                    <div className="mt-4 border-t border-neutral-200 pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Subtotal:</span>
                          <span>£3,300.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">VAT (20%):</span>
                          <span>£660.00</span>
                        </div>
                        <div className="flex justify-between font-medium pt-2 border-t border-neutral-200">
                          <span>Total:</span>
                          <span className="text-lg">£3,960.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md border-neutral-200 bg-white">
                  <div className="p-4 border-b border-neutral-200 bg-neutral-50">
                    <h3 className="font-medium">Payment Options</h3>
                  </div>
                  <div className="p-4">
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
                        <Label>Accepted Payment Methods</Label>
                        <div className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-3 py-1.5">
                            <CreditCard className="h-4 w-4 text-blue-500" />
                            <span className="text-sm text-blue-700">Credit Card</span>
                          </div>
                          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-md px-3 py-1.5">
                            <CreditCard className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-green-700">Bank Transfer</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bank-details">Bank Details</Label>
                        <Input 
                          id="bank-details" 
                          placeholder="Enter bank details" 
                          className="bg-white border-neutral-200"
                          defaultValue="Graftly Ltd - Sort Code: 12-34-56 - Account: 12345678"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Add any additional notes for the invoice" 
                    className="min-h-[100px] bg-white border-neutral-200" 
                    defaultValue="Thank you for your business. Please make payment by the due date."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="preview" className="pt-4 pr-2">
                <div className="bg-white border border-neutral-200 rounded-md p-8 max-w-[640px] mx-auto">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-[#F97316]">INVOICE</h2>
                      <div className="mt-2 text-sm text-neutral-500">#INV-2025-0042</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">Graftly Ltd</div>
                      <div className="text-sm">123 Business St, London, UK</div>
                      <div className="text-sm">info@graftly.com</div>
                      <div className="text-sm">+44 20 1234 5678</div>
                    </div>
                  </div>
                  
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <div className="text-sm font-semibold text-neutral-500">BILL TO</div>
                      <div className="mt-1">
                        <div className="font-medium">John & Sarah Thompson</div>
                        <div className="text-sm text-neutral-500">123 Maple Street, Richmond</div>
                        <div className="text-sm text-neutral-500">thompson@example.com</div>
                        <div className="text-sm text-neutral-500">(555) 123-4567</div>
                      </div>
                    </div>
                    <div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-semibold text-neutral-500">INVOICE DATE</div>
                        <div className="text-right">April 16, 2025</div>
                        <div className="font-semibold text-neutral-500">DUE DATE</div>
                        <div className="text-right">April 30, 2025</div>
                        <div className="font-semibold text-neutral-500">REFERENCE</div>
                        <div className="text-right">-</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <div className="grid grid-cols-12 gap-4 py-2 border-b border-neutral-200 font-semibold text-sm text-neutral-500">
                      <div className="col-span-6">DESCRIPTION</div>
                      <div className="col-span-1 text-right">QTY</div>
                      <div className="col-span-2 text-right">PRICE</div>
                      <div className="col-span-1 text-right">VAT</div>
                      <div className="col-span-2 text-right">AMOUNT</div>
                    </div>
                    
                    <div className="divide-y divide-neutral-100">
                      <div className="grid grid-cols-12 gap-4 py-3">
                        <div className="col-span-6">Kitchen Cabinet Installation</div>
                        <div className="col-span-1 text-right">1</div>
                        <div className="col-span-2 text-right">£2,500.00</div>
                        <div className="col-span-1 text-right">20%</div>
                        <div className="col-span-2 text-right font-medium">£2,500.00</div>
                      </div>
                      
                      <div className="grid grid-cols-12 gap-4 py-3">
                        <div className="col-span-6">Plumbing Work</div>
                        <div className="col-span-1 text-right">1</div>
                        <div className="col-span-2 text-right">£350.00</div>
                        <div className="col-span-1 text-right">20%</div>
                        <div className="col-span-2 text-right font-medium">£350.00</div>
                      </div>
                      
                      <div className="grid grid-cols-12 gap-4 py-3">
                        <div className="col-span-6">Electrical Work</div>
                        <div className="col-span-1 text-right">1</div>
                        <div className="col-span-2 text-right">£450.00</div>
                        <div className="col-span-1 text-right">20%</div>
                        <div className="col-span-2 text-right font-medium">£450.00</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 py-4 border-t border-neutral-200">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-8"></div>
                        <div className="col-span-2 text-right text-sm font-semibold text-neutral-500">SUBTOTAL</div>
                        <div className="col-span-2 text-right">£3,300.00</div>
                      </div>
                      <div className="grid grid-cols-12 gap-4 mt-1">
                        <div className="col-span-8"></div>
                        <div className="col-span-2 text-right text-sm font-semibold text-neutral-500">VAT (20%)</div>
                        <div className="col-span-2 text-right">£660.00</div>
                      </div>
                      <div className="grid grid-cols-12 gap-4 mt-3 pt-3 border-t border-neutral-200">
                        <div className="col-span-8"></div>
                        <div className="col-span-2 text-right text-sm font-bold text-neutral-700">TOTAL</div>
                        <div className="col-span-2 text-right font-bold text-lg">£3,960.00</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <div className="text-sm font-semibold text-neutral-500">PAYMENT TERMS</div>
                        <div className="mt-1 text-sm">
                          Due within 14 days. Please make payment by the due date.
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-500">PAYMENT DETAILS</div>
                        <div className="mt-1 text-sm">
                          Graftly Ltd<br />
                          Sort Code: 12-34-56<br />
                          Account: 12345678
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center text-sm text-neutral-500">
                      Thank you for your business. Please contact us if you have any questions.
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </ScrollArea>

        <SheetFooter className="border-t border-neutral-200 p-4 md:p-6 flex flex-col md:flex-row md:justify-between gap-4 bg-[#FEF2F2] flex-shrink-0">
          {isMobile ? (
            <>
              <Button 
                className="bg-[#F97316] hover:bg-[#F97316]/90 w-full text-white font-medium" 
                onClick={handleSend}
              >
                <Mail className="h-4 w-4 mr-2" /> Send Invoice
              </Button>
              <Button 
                variant="outline" 
                className="border-[#F97316] text-[#8E9196] dark:text-[#9F9EA1] w-full" 
                onClick={handleSave}
              >
                Save Draft
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onOpenChange(false)} 
                className="w-full text-[#8E9196] dark:text-[#9F9EA1]"
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" title="Print Invoice">
                  <Printer className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" title="Download PDF">
                  <Download className="h-4 w-4" />
                </Button>
                <Separator orientation="vertical" className="h-8" />
                <Button variant="outline" size="icon" className="text-destructive hover:bg-destructive/10" title="Delete">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button variant="outline" className="border-[#F97316] text-[#8E9196] dark:text-[#9F9EA1]" onClick={handleSave}>
                  Save Draft
                </Button>
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90" onClick={handleSend}>
                  <Mail className="h-4 w-4 mr-2" /> Send Invoice
                </Button>
              </div>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
