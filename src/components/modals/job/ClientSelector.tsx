
import React from "react";
import { 
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage 
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PlusCircle, User } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

// Mock client data
const clients = [
  { id: "client1", name: "John & Sarah Thompson" },
  { id: "client2", name: "Mike Wilson" },
  { id: "client3", name: "Jennifer Garcia" },
  { id: "client4", name: "David Mitchell" },
  { id: "client5", name: "Emily Rodriguez" },
  { id: "client6", name: "Robert Chen" },
  { id: "client7", name: "Patricia Lewis" },
];

interface ClientSelectorProps {
  control: any;
  name: string;
}

export function ClientSelector({ control, name }: ClientSelectorProps) {
  const { openModal } = useModal();

  const handleNewClient = () => {
    // We can implement this in a future update
    // For now just log the action
    console.log("Creating new client");
  };

  return (
    <div className="space-y-1">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Client</FormLabel>
            <div className="flex gap-2">
              <FormControl className="flex-1">
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <SelectTrigger className="bg-white border-neutral-200">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-neutral-500" />
                      <SelectValue placeholder="Select a client" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {clients.map(client => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <Button 
                type="button" 
                variant="outline" 
                size="icon" 
                onClick={handleNewClient}
                className="h-10 w-10 flex-shrink-0"
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
