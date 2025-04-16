
import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Enquiry } from "@/data/mockEnquiries";
import { formatDistanceToNow } from "date-fns";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Edit, 
  FileText, 
  Clock,
  User
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface EnquiryCardProps {
  enquiry: Enquiry;
  onConvertToQuote: (enquiryId: string) => void;
  onEditEnquiry: (enquiryId: string) => void;
}

export function EnquiryCard({ enquiry, onConvertToQuote, onEditEnquiry }: EnquiryCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-[#2962FF] hover:bg-[#2962FF]/90';
      case 'quote_pending':
        return 'bg-amber-500 hover:bg-amber-600';
      case 'converted':
        return 'bg-green-600 hover:bg-green-700';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return 'New Enquiry';
      case 'quote_pending':
        return 'Quote Pending';
      case 'converted':
        return 'Converted';
      default:
        return status;
    }
  };
  
  const createdDate = new Date(enquiry.createdAt);
  const timeAgo = formatDistanceToNow(createdDate, { addSuffix: true });
  
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 pr-2">
            <h3 className="font-semibold text-lg truncate">{enquiry.title}</h3>
            <div className="flex items-center text-sm text-muted-foreground gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{timeAgo}</span>
            </div>
          </div>
          <Badge className={getStatusColor(enquiry.status)}>
            {getStatusLabel(enquiry.status)}
          </Badge>
        </div>
        
        <div className="space-y-2.5">
          <div className="flex items-center text-sm gap-1.5">
            <User className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="font-medium">{enquiry.client.name}</span>
          </div>
          
          <div className="flex items-center text-sm gap-1.5">
            <Phone className="h-3.5 w-3.5 text-muted-foreground" />
            <a 
              href={`tel:${enquiry.client.phone}`} 
              className="text-primary hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {enquiry.client.phone}
            </a>
          </div>
          
          {enquiry.client.email && (
            <div className="flex items-center text-sm gap-1.5">
              <Mail className="h-3.5 w-3.5 text-muted-foreground" />
              <a 
                href={`mailto:${enquiry.client.email}`} 
                className="text-primary hover:underline truncate max-w-[200px]"
                onClick={(e) => e.stopPropagation()}
              >
                {enquiry.client.email}
              </a>
            </div>
          )}
          
          <div className="flex items-start text-sm gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground mt-0.5 shrink-0" />
            <span className="truncate">{enquiry.location}</span>
          </div>
          
          <div className="pt-1">
            <p className="text-sm line-clamp-2">{enquiry.description}</p>
          </div>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <Button 
          className="w-full bg-[#F97316] hover:bg-[#F97316]/90" 
          onClick={(e) => {
            e.stopPropagation();
            onConvertToQuote(enquiry.id);
          }}
        >
          <FileText className="mr-2 h-4 w-4" />
          Convert to Quote
        </Button>
      </div>
      
      <CollapsibleTrigger asChild onClick={(e) => e.stopPropagation()}>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-between m-0 rounded-t-none border-t" 
        >
          <span>{isOpen ? "Show Less" : "Show More"}</span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="px-4 pb-4 space-y-3 bg-slate-50">
        {enquiry.notes && (
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Notes</h4>
            <p className="text-sm">{enquiry.notes}</p>
          </div>
        )}
        
        {enquiry.locationNotes && (
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Location Notes</h4>
            <p className="text-sm">{enquiry.locationNotes}</p>
          </div>
        )}
        
        {enquiry.estimatedValue && (
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Estimated Value</h4>
            <p className="text-sm">£{enquiry.estimatedValue.toLocaleString()}</p>
          </div>
        )}
        
        <div className="pt-2 flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onEditEnquiry(enquiry.id);
            }}
          >
            <Edit className="mr-2 h-3.5 w-3.5" />
            Edit Details
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
