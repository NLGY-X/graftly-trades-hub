
import { useState } from "react";
import { PlusIcon, SearchIcon, FilterIcon, FilePlus, Clock, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for quotes
const allQuotes = [
  {
    id: "quote1",
    client: "John & Sarah Thompson",
    title: "Kitchen Renovation",
    address: "123 Maple Street, Richmond",
    date: "15 April 2025",
    amount: "£4,850.00",
    status: "pending" as const,
    expiryDate: "22 April 2025",
  },
  {
    id: "quote2",
    client: "Mike Wilson",
    title: "Bathroom Plumbing",
    address: "45 Oak Avenue, Northside",
    date: "14 April 2025",
    amount: "£1,250.00",
    status: "pending" as const,
    expiryDate: "21 April 2025",
  },
  {
    id: "quote3",
    client: "Jennifer Garcia",
    title: "Electrical Inspection",
    address: "78 Pine Road, Westfield",
    date: "13 April 2025",
    amount: "£350.00",
    status: "accepted" as const,
    expiryDate: "20 April 2025",
  },
  {
    id: "quote4",
    client: "David Mitchell",
    title: "Roof Repair",
    address: "156 Cedar Lane, Southview",
    date: "12 April 2025",
    amount: "£2,750.00",
    status: "accepted" as const,
    expiryDate: "19 April 2025",
  },
  {
    id: "quote5",
    client: "Emily Rodriguez",
    title: "Fence Installation",
    address: "234 Birch Drive, Eastville",
    date: "10 April 2025",
    amount: "£1,650.00",
    status: "declined" as const,
    expiryDate: "17 April 2025",
  }
];

const statusConfig = {
  pending: { label: "Pending", variant: "default" as const, icon: Clock },
  accepted: { label: "Accepted", variant: "secondary" as const, icon: CheckCircle },
  declined: { label: "Declined", variant: "destructive" as const, icon: X }
};

export default function Quotes() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Quotes Manager</h2>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Quote
        </Button>
      </div>
      
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search quotes, clients, or jobs..." 
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
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="declined">Declined</SelectItem>
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
          <TabsTrigger value="all">All Quotes</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="declined">Declined</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4 space-y-4">
          {allQuotes
            .filter(quote => 
              quote.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.address.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
        </TabsContent>
        
        <TabsContent value="pending" className="mt-4 space-y-4">
          {allQuotes
            .filter(quote => quote.status === "pending")
            .filter(quote => 
              quote.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.address.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
        </TabsContent>
        
        <TabsContent value="accepted" className="mt-4 space-y-4">
          {allQuotes
            .filter(quote => quote.status === "accepted")
            .filter(quote => 
              quote.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.address.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
        </TabsContent>
        
        <TabsContent value="declined" className="mt-4 space-y-4">
          {allQuotes
            .filter(quote => quote.status === "declined")
            .filter(quote => 
              quote.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              quote.address.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface QuoteProps {
  quote: {
    id: string;
    client: string;
    title: string;
    address: string;
    date: string;
    amount: string;
    status: "pending" | "accepted" | "declined";
    expiryDate: string;
  };
}

const QuoteCard = ({ quote }: QuoteProps) => {
  const StatusIcon = statusConfig[quote.status].icon;
  
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FilePlus className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">{quote.title}</h3>
              <p className="text-sm text-muted-foreground">{quote.client}</p>
              <p className="text-sm text-muted-foreground">{quote.address}</p>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <Badge variant={statusConfig[quote.status].variant} className="flex items-center gap-1">
              <StatusIcon className="h-3 w-3" />
              {statusConfig[quote.status].label}
            </Badge>
            <div className="text-lg font-semibold">{quote.amount}</div>
            <div className="text-xs text-muted-foreground">Created: {quote.date}</div>
            <div className="text-xs text-muted-foreground">Expires: {quote.expiryDate}</div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="sm">View Quote</Button>
          {quote.status === "pending" && (
            <Button size="sm">Convert to Job</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
