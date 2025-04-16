
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      {title && !isMobile && (
        <h1 className="text-xl font-semibold">{title}</h1>
      )}
      
      {/* Search Bar - Hide on Mobile */}
      {!isMobile && (
        <div className="flex-1 ml-4 mr-4 max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-background pl-8 focus-visible:ring-primary"
            />
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            3
          </span>
        </Button>
        
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
