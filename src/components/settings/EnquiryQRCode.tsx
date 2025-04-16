
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QrCode, Download, Copy, Share2 } from "lucide-react";

export function EnquiryQRCode() {
  const [copied, setCopied] = useState(false);
  
  // In a real application, this would be dynamically generated
  const enquiryUrl = window.location.origin + "/enquiry";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(enquiryUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const downloadQRCode = () => {
    // In a real application, this would generate an actual QR code image
    alert("In a real app, this would download a high-resolution QR code");
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="h-5 w-5" />
          Public Enquiry QR Code
        </CardTitle>
        <CardDescription>
          Share this QR code with potential customers. When scanned, it will direct them to a
          custom enquiry form where they can submit their job details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center space-y-3 p-4 border rounded-md bg-muted/50">
          {/* Placeholder for actual QR code */}
          <div className="w-48 h-48 border-2 border-dashed border-border flex items-center justify-center bg-white">
            <QrCode className="h-24 w-24 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">Scan to access enquiry form</p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label htmlFor="enquiry-url" className="text-sm font-medium">
            Enquiry Form URL
          </label>
          <div className="flex space-x-2">
            <Input
              id="enquiry-url"
              value={enquiryUrl}
              readOnly
              className="font-mono text-sm"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-4">
        <Button variant="outline" onClick={downloadQRCode}>
          <Download className="mr-2 h-4 w-4" />
          Download QR Code
        </Button>
        <Button onClick={() => alert("This would open your device's share dialog")}>
          <Share2 className="mr-2 h-4 w-4" />
          Share Link
        </Button>
      </CardFooter>
    </Card>
  );
}

// Missing import for Check icon
import { Check } from "lucide-react";
