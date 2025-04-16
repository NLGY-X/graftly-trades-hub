
import { useState } from "react";
import { PlusIcon, SearchIcon, FilterIcon, Package, ShoppingCart, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data for materials
const allMaterials = [
  {
    id: "mat001",
    name: "Copper Pipe (15mm)",
    category: "Plumbing",
    supplier: "BuildZone Supplies",
    price: "£4.50/m",
    quantity: 24,
    unit: "meters",
    inStock: 24,
    lowStockThreshold: 10,
    reorderStatus: "none" as const
  },
  {
    id: "mat002",
    name: "Radiator Valve (Thermostatic)",
    category: "Heating",
    supplier: "BuildZone Supplies",
    price: "£18.99",
    quantity: 8,
    unit: "units",
    inStock: 8,
    lowStockThreshold: 5,
    reorderStatus: "none" as const
  },
  {
    id: "mat003",
    name: "Electrical Cable (1.5mm²)",
    category: "Electrical",
    supplier: "ElectroParts Ltd",
    price: "£1.20/m",
    quantity: 45,
    unit: "meters",
    inStock: 45,
    lowStockThreshold: 50,
    reorderStatus: "low" as const
  },
  {
    id: "mat004",
    name: "Consumer Unit (10-Way)",
    category: "Electrical",
    supplier: "ElectroParts Ltd",
    price: "£65.00",
    quantity: 2,
    unit: "units",
    inStock: 2,
    lowStockThreshold: 3,
    reorderStatus: "low" as const
  },
  {
    id: "mat005",
    name: "Kitchen Tap (Mixer)",
    category: "Plumbing",
    supplier: "Plumb Nation",
    price: "£48.99",
    quantity: 0,
    unit: "units",
    inStock: 0,
    lowStockThreshold: 2,
    reorderStatus: "ordered" as const
  },
  {
    id: "mat006",
    name: "Roof Tile (Standard)",
    category: "Building Materials",
    supplier: "BuildZone Supplies",
    price: "£1.85",
    quantity: 122,
    unit: "units",
    inStock: 122,
    lowStockThreshold: 50,
    reorderStatus: "none" as const
  }
];

const reorderStatusConfig = {
  none: { label: "In Stock", variant: "secondary" as const, icon: CheckCircle },
  low: { label: "Low Stock", variant: "default" as const, icon: AlertCircle },
  ordered: { label: "On Order", variant: "default" as const, icon: ShoppingCart }
};

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Materials & Parts</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Create Order
          </Button>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Material
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search materials, parts, or suppliers..." 
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Filters */}
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="heating">Heating</SelectItem>
              <SelectItem value="building">Building Materials</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Supplier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Suppliers</SelectItem>
              <SelectItem value="buildzone">BuildZone Supplies</SelectItem>
              <SelectItem value="electroparts">ElectroParts Ltd</SelectItem>
              <SelectItem value="plumbnation">Plumb Nation</SelectItem>
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
          <TabsTrigger value="all">All Materials</TabsTrigger>
          <TabsTrigger value="low">Low Stock</TabsTrigger>
          <TabsTrigger value="ordered">On Order</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {allMaterials
              .filter(material => 
                material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                material.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                material.category.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="low" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {allMaterials
              .filter(material => material.reorderStatus === "low")
              .filter(material => 
                material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                material.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                material.category.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ordered" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {allMaterials
              .filter(material => material.reorderStatus === "ordered")
              .filter(material => 
                material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                material.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                material.category.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface MaterialProps {
  material: {
    id: string;
    name: string;
    category: string;
    supplier: string;
    price: string;
    quantity: number;
    unit: string;
    inStock: number;
    lowStockThreshold: number;
    reorderStatus: "none" | "low" | "ordered";
  };
}

const MaterialCard = ({ material }: MaterialProps) => {
  const StatusIcon = reorderStatusConfig[material.reorderStatus].icon;
  const stockPercentage = Math.min(100, (material.inStock / material.lowStockThreshold) * 100);
  
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Package className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h3 className="font-medium">{material.name}</h3>
              <Badge variant={reorderStatusConfig[material.reorderStatus].variant} className="flex items-center gap-1 ml-2">
                <StatusIcon className="h-3 w-3" />
                {reorderStatusConfig[material.reorderStatus].label}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{material.category}</p>
            <p className="text-sm text-muted-foreground">Supplier: {material.supplier}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-semibold">{material.price}</span>
              <span className="text-sm">
                {material.inStock} {material.unit} in stock
              </span>
            </div>
            <div className="mt-3">
              <Progress value={stockPercentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0</span>
                <span>Reorder at {material.lowStockThreshold}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="sm">Details</Button>
          {material.reorderStatus === "low" && (
            <Button size="sm">Order More</Button>
          )}
          {material.reorderStatus === "none" && (
            <Button variant="outline" size="sm">Use Material</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
