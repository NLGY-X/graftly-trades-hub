
import { PlusIcon, SearchIcon, FilterIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  activeJobs: number;
  completedJobs: number;
  status: "active" | "new" | "inactive";
}

// Mock data for clients
const clients: Client[] = [
  {
    id: "client1",
    name: "John & Sarah Thompson",
    phone: "(555) 123-4567",
    email: "thompson@example.com",
    address: "123 Maple Street, Richmond",
    activeJobs: 1,
    completedJobs: 3,
    status: "active"
  },
  {
    id: "client2",
    name: "Mike Wilson",
    phone: "(555) 234-5678",
    email: "mike.wilson@example.com",
    address: "45 Oak Avenue, Northside",
    activeJobs: 1,
    completedJobs: 0,
    status: "new"
  },
  {
    id: "client3",
    name: "Jennifer Garcia",
    phone: "(555) 345-6789",
    email: "j.garcia@example.com",
    address: "78 Pine Road, Westfield",
    activeJobs: 1,
    completedJobs: 2,
    status: "active"
  },
  {
    id: "client4",
    name: "David Mitchell",
    phone: "(555) 456-7890",
    email: "d.mitchell@example.com",
    address: "156 Cedar Lane, Southview",
    activeJobs: 1,
    completedJobs: 0,
    status: "new"
  },
  {
    id: "client5",
    name: "Emily Rodriguez",
    phone: "(555) 567-8901",
    email: "emily.r@example.com",
    address: "234 Birch Drive, Eastville",
    activeJobs: 1,
    completedJobs: 1,
    status: "active"
  },
  {
    id: "client6",
    name: "Robert Chen",
    phone: "(555) 678-9012",
    email: "robert.chen@example.com",
    address: "89 Elm Court, Downtown",
    activeJobs: 0,
    completedJobs: 5,
    status: "active"
  },
  {
    id: "client7",
    name: "Patricia Lewis",
    phone: "(555) 789-0123",
    email: "p.lewis@example.com",
    address: "321 Willow Place, Lakeside",
    activeJobs: 0,
    completedJobs: 2,
    status: "inactive"
  }
];

const statusConfig = {
  active: { label: "Active", variant: "default" as const },
  new: { label: "New", variant: "secondary" as const },
  inactive: { label: "Inactive", variant: "outline" as const }
};

export default function Clients() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Clients</h2>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>
      
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search clients by name, email, or address..." 
            className="w-full pl-8"
          />
        </div>
        
        {/* Filters */}
        <Button variant="outline" size="icon">
          <FilterIcon className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Client List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <Card key={client.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.phone}</p>
                  </div>
                </div>
                <Badge variant={statusConfig[client.status].variant}>
                  {statusConfig[client.status].label}
                </Badge>
              </div>
              
              <div className="mt-4 space-y-2 text-sm">
                <div className="text-muted-foreground">{client.email}</div>
                <div className="text-muted-foreground truncate">{client.address}</div>
              </div>
              
              <div className="mt-4 flex justify-between border-t pt-3 text-sm">
                <div>
                  <span className="font-medium text-primary">{client.activeJobs}</span>
                  <span className="ml-1 text-muted-foreground">Active</span>
                </div>
                <div>
                  <span className="font-medium">{client.completedJobs}</span>
                  <span className="ml-1 text-muted-foreground">Completed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
