
import React from "react";
import { Info } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TermsConditionsTab() {
  return (
    <div className="space-y-4">
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
    </div>
  );
}
