
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Wrench } from "lucide-react";

export function JobMaterialsTab() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Materials & Costs</h3>
          <Button variant="outline" size="sm">
            Add Material
          </Button>
        </div>
        
        <div className="border rounded-md border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-2 p-3 bg-neutral-50 text-sm font-medium text-neutral-500">
            <div className="col-span-6">Item</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Total</div>
          </div>
          
          <div className="divide-y divide-neutral-100">
            <div className="grid grid-cols-12 gap-2 p-3 items-center">
              <div className="col-span-6 flex items-center">
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-neutral-100 text-neutral-500">
                  <Package className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Kitchen Cabinet Set</div>
                  <div className="text-xs text-neutral-500">Custom white shaker style</div>
                </div>
              </div>
              <div className="col-span-2">1</div>
              <div className="col-span-2">£2,500.00</div>
              <div className="col-span-2 font-medium">£2,500.00</div>
            </div>
            
            <div className="grid grid-cols-12 gap-2 p-3 items-center">
              <div className="col-span-6 flex items-center">
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-neutral-100 text-neutral-500">
                  <Package className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Sink & Fixtures</div>
                  <div className="text-xs text-neutral-500">Stainless steel undermount</div>
                </div>
              </div>
              <div className="col-span-2">1</div>
              <div className="col-span-2">£350.00</div>
              <div className="col-span-2 font-medium">£350.00</div>
            </div>
          </div>
          
          <div className="p-3 border-t border-neutral-200 bg-neutral-50">
            <div className="flex justify-between items-center">
              <span className="font-medium">Materials Total:</span>
              <span className="font-medium">£2,850.00</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dashed border-neutral-200 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Labor</h3>
            <Button variant="outline" size="sm">
              Add Labor
            </Button>
          </div>
          
          <div className="border rounded-md border-neutral-200 mt-4 overflow-hidden">
            <div className="grid grid-cols-12 gap-2 p-3 bg-neutral-50 text-sm font-medium text-neutral-500">
              <div className="col-span-6">Service</div>
              <div className="col-span-2">Hours</div>
              <div className="col-span-2">Rate</div>
              <div className="col-span-2">Total</div>
            </div>
            
            <div className="divide-y divide-neutral-100">
              <div className="grid grid-cols-12 gap-2 p-3 items-center">
                <div className="col-span-6 flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded bg-neutral-100 text-neutral-500">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Cabinet Installation</div>
                    <div className="text-xs text-neutral-500">John Smith</div>
                  </div>
                </div>
                <div className="col-span-2">8</div>
                <div className="col-span-2">£45.00</div>
                <div className="col-span-2 font-medium">£360.00</div>
              </div>
            </div>
            
            <div className="p-3 border-t border-neutral-200 bg-neutral-50">
              <div className="flex justify-between items-center">
                <span className="font-medium">Labor Total:</span>
                <span className="font-medium">£360.00</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 border-t border-neutral-200 flex justify-between items-center">
            <span className="font-medium">Job Total:</span>
            <span className="text-lg font-semibold">£3,210.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
