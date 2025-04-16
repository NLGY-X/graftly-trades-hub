
import React, { useState } from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  PlusCircle, 
  Trash2, 
  Package, 
  DollarSign 
} from "lucide-react";

interface Material {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export function JobMaterialsTab() {
  const [materials, setMaterials] = useState<Material[]>([
    { id: "1", name: "Kitchen Cabinet - Maple", quantity: 5, price: 249.99 },
    { id: "2", name: "Granite Countertop", quantity: 1, price: 899.50 },
  ]);
  
  const [newMaterial, setNewMaterial] = useState({ name: "", quantity: 1, price: 0 });

  const addMaterial = () => {
    if (newMaterial.name.trim() === "") return;
    
    setMaterials([
      ...materials, 
      { 
        id: Date.now().toString(), 
        name: newMaterial.name,
        quantity: newMaterial.quantity,
        price: newMaterial.price
      }
    ]);
    
    setNewMaterial({ name: "", quantity: 1, price: 0 });
  };

  const removeMaterial = (id: string) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const totalCost = materials.reduce(
    (sum, material) => sum + material.quantity * material.price, 
    0
  );

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Material</TableHead>
                <TableHead className="w-[100px] text-right">Qty</TableHead>
                <TableHead className="w-[120px] text-right">Price</TableHead>
                <TableHead className="w-[120px] text-right">Total</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map(material => (
                <TableRow key={material.id}>
                  <TableCell>{material.name}</TableCell>
                  <TableCell className="text-right">{material.quantity}</TableCell>
                  <TableCell className="text-right">${material.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${(material.quantity * material.price).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeMaterial(material.id)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-end">
          <div className="flex-1">
            <Input 
              placeholder="Material name" 
              value={newMaterial.name}
              onChange={e => setNewMaterial({...newMaterial, name: e.target.value})}
              className="bg-white"
            />
          </div>
          <div className="w-20">
            <Input 
              type="number" 
              value={newMaterial.quantity}
              min={1}
              onChange={e => setNewMaterial({...newMaterial, quantity: parseInt(e.target.value) || 1})}
              className="bg-white"
            />
          </div>
          <div className="w-24 relative">
            <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-neutral-500" />
            <Input 
              type="number" 
              value={newMaterial.price}
              min={0}
              step={0.01}
              onChange={e => setNewMaterial({...newMaterial, price: parseFloat(e.target.value) || 0})}
              className="bg-white pl-7"
            />
          </div>
          <Button 
            onClick={addMaterial}
            className="bg-[#059669] hover:bg-[#059669]/90"
          >
            <PlusCircle className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>

        <div className="flex justify-between items-center pt-2 border-t">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-neutral-500" />
            <span className="text-sm font-medium">
              {materials.length} items, {materials.reduce((sum, m) => sum + m.quantity, 0)} total units
            </span>
          </div>
          <div className="text-lg font-semibold">
            Total: ${totalCost.toFixed(2)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
