
import React from "react";

export function InvoicePreviewTab() {
  return (
    <div className="bg-white border border-neutral-200 rounded-md p-5 max-w-[640px] mx-auto overflow-hidden">
      <div className="flex justify-between items-start flex-wrap gap-4">
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
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
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
      
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-2 py-2 border-b border-neutral-200 font-semibold text-sm text-neutral-500">
          <div className="col-span-6">DESCRIPTION</div>
          <div className="col-span-1 text-right">QTY</div>
          <div className="col-span-2 text-right">PRICE</div>
          <div className="col-span-1 text-right">VAT</div>
          <div className="col-span-2 text-right">AMOUNT</div>
        </div>
        
        <div className="divide-y divide-neutral-100">
          <div className="grid grid-cols-12 gap-2 py-3">
            <div className="col-span-6 break-words">Kitchen Cabinet Installation</div>
            <div className="col-span-1 text-right">1</div>
            <div className="col-span-2 text-right">£2,500.00</div>
            <div className="col-span-1 text-right">20%</div>
            <div className="col-span-2 text-right font-medium">£2,500.00</div>
          </div>
          
          <div className="grid grid-cols-12 gap-2 py-3">
            <div className="col-span-6 break-words">Plumbing Work</div>
            <div className="col-span-1 text-right">1</div>
            <div className="col-span-2 text-right">£350.00</div>
            <div className="col-span-1 text-right">20%</div>
            <div className="col-span-2 text-right font-medium">£350.00</div>
          </div>
          
          <div className="grid grid-cols-12 gap-2 py-3">
            <div className="col-span-6 break-words">Electrical Work</div>
            <div className="col-span-1 text-right">1</div>
            <div className="col-span-2 text-right">£450.00</div>
            <div className="col-span-1 text-right">20%</div>
            <div className="col-span-2 text-right font-medium">£450.00</div>
          </div>
        </div>
        
        <div className="mt-4 py-4 border-t border-neutral-200">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-8"></div>
            <div className="col-span-2 text-right text-sm font-semibold text-neutral-500">SUBTOTAL</div>
            <div className="col-span-2 text-right">£3,300.00</div>
          </div>
          <div className="grid grid-cols-12 gap-2 mt-1">
            <div className="col-span-8"></div>
            <div className="col-span-2 text-right text-sm font-semibold text-neutral-500">VAT (20%)</div>
            <div className="col-span-2 text-right">£660.00</div>
          </div>
          <div className="grid grid-cols-12 gap-2 mt-3 pt-3 border-t border-neutral-200">
            <div className="col-span-8"></div>
            <div className="col-span-2 text-right text-sm font-bold text-neutral-700">TOTAL</div>
            <div className="col-span-2 text-right font-bold text-lg">£3,960.00</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        
        <div className="mt-4 text-center text-sm text-neutral-500">
          Thank you for your business. Please contact us if you have any questions.
        </div>
      </div>
    </div>
  );
}
