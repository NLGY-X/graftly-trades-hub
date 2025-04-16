
import { useState } from "react";
import { PlusIcon, SearchIcon, FilterIcon, FileText, CreditCard, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for invoices
const allInvoices = [
  {
    id: "inv-2025-001",
    client: "John & Sarah Thompson",
    title: "Kitchen Renovation - Final Payment",
    amount: "£2,850.00",
    date: "10 April 2025",
    dueDate: "24 April 2025",
    status: "paid" as const,
    paymentMethod: "Bank Transfer"
  },
  {
    id: "inv-2025-002",
    client: "Mike Wilson",
    title: "Bathroom Plumbing",
    amount: "£1,250.00",
    date: "12 April 2025",
    dueDate: "26 April 2025",
    status: "pending" as const,
    paymentMethod: null
  },
  {
    id: "inv-2025-003",
    client: "Jennifer Garcia",
    title: "Electrical Inspection",
    amount: "£350.00",
    date: "14 April 2025",
    dueDate: "28 April 2025",
    status: "pending" as const,
    paymentMethod: null
  },
  {
    id: "inv-2025-004",
    client: "Robert Chen",
    title: "HVAC Maintenance",
    amount: "£420.00",
    date: "05 April 2025",
    dueDate: "19 April 2025",
    status: "overdue" as const,
    paymentMethod: null
  },
  {
    id: "inv-2025-005",
    client: "Patricia Lewis",
    title: "Window Replacement",
    amount: "£1,650.00",
    date: "02 April 2025",
    dueDate: "16 April 2025",
    status: "paid" as const,
    paymentMethod: "Card Payment"
  }
];

const statusConfig = {
  pending: { label: "Pending", variant: "default" as const, icon: Clock },
  paid: { label: "Paid", variant: "success" as const, icon: CheckCircle },
  overdue: { label: "Overdue", variant: "destructive" as const, icon: AlertTriangle }
};

export default function Invoices() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const outstandingTotal = allInvoices
    .filter(inv => inv.status !== "paid")
    .reduce((total, inv) => total + parseFloat(inv.amount.replace('£', '')), 0);
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Invoices & Payments</h2>
          <p className="text-muted-foreground">
            Outstanding: <span className="font-semibold text-red-500">£{outstandingTotal.toFixed(2)}</span>
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Invoice
        </Button>
      </div>
      
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search invoices, clients, or reference numbers..." 
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Filters */}
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Invoices</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4 space-y-4">
          {allInvoices
            .filter(invoice => 
              invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
        </TabsContent>
        
        <TabsContent value="pending" className="mt-4 space-y-4">
          {allInvoices
            .filter(invoice => invoice.status === "pending")
            .filter(invoice => 
              invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
        </TabsContent>
        
        <TabsContent value="paid" className="mt-4 space-y-4">
          {allInvoices
            .filter(invoice => invoice.status === "paid")
            .filter(invoice => 
              invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
        </TabsContent>
        
        <TabsContent value="overdue" className="mt-4 space-y-4">
          {allInvoices
            .filter(invoice => invoice.status === "overdue")
            .filter(invoice => 
              invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface InvoiceProps {
  invoice: {
    id: string;
    client: string;
    title: string;
    amount: string;
    date: string;
    dueDate: string;
    status: "pending" | "paid" | "overdue";
    paymentMethod: string | null;
  };
}

const InvoiceCard = ({ invoice }: InvoiceProps) => {
  const StatusIcon = statusConfig[invoice.status].icon;
  
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{invoice.title}</h3>
                <span className="text-xs text-muted-foreground">{invoice.id}</span>
              </div>
              <p className="text-sm text-muted-foreground">{invoice.client}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <span>Issued: {invoice.date}</span>
                <span>•</span>
                <span>Due: {invoice.dueDate}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <Badge variant={statusConfig[invoice.status].variant} className="flex items-center gap-1">
              <StatusIcon className="h-3 w-3" />
              {statusConfig[invoice.status].label}
            </Badge>
            <div className="text-lg font-semibold">{invoice.amount}</div>
            {invoice.paymentMethod && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <CreditCard className="h-3 w-3" />
                {invoice.paymentMethod}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="sm">View Invoice</Button>
          {invoice.status !== "paid" && (
            <Button size="sm">Record Payment</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
