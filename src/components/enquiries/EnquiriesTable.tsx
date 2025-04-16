
import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Enquiry } from "@/data/mockEnquiries";
import { format } from "date-fns";
import { Edit, FileText } from "lucide-react";

interface EnquiriesTableProps {
  enquiries: Enquiry[];
  onConvertToQuote: (enquiryId: string) => void;
  onEditEnquiry: (enquiryId: string) => void;
}

export function EnquiriesTable({ enquiries, onConvertToQuote, onEditEnquiry }: EnquiriesTableProps) {
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
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Enquiry</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Value</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {enquiries.map((enquiry) => (
            <TableRow key={enquiry.id}>
              <TableCell className="font-medium">
                <div>
                  <div className="font-medium">{enquiry.title}</div>
                  <div className="text-sm text-muted-foreground truncate max-w-[200px]">{enquiry.description}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div>{enquiry.client.name}</div>
                  <div className="text-sm text-muted-foreground">{enquiry.client.phone}</div>
                </div>
              </TableCell>
              <TableCell>{format(new Date(enquiry.createdAt), 'dd MMM yyyy')}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(enquiry.status)}>
                  {getStatusLabel(enquiry.status)}
                </Badge>
              </TableCell>
              <TableCell>
                {enquiry.estimatedValue 
                  ? `£${enquiry.estimatedValue.toLocaleString()}` 
                  : '-'}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onEditEnquiry(enquiry.id)}
                  >
                    <Edit className="h-3.5 w-3.5" />
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-[#F97316] hover:bg-[#F97316]/90"
                    onClick={() => onConvertToQuote(enquiry.id)}
                  >
                    <FileText className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
