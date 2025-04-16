
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Receipt, 
  Users, 
  Package, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    title: "Enquiries",
    icon: Receipt,
    path: "/enquiries"
  },
  {
    title: "Quotes",
    icon: FileText,
    path: "/quotes"
  },
  {
    title: "Jobs",
    icon: Briefcase,
    path: "/jobs"
  },
  {
    title: "Invoices",
    icon: Receipt,
    path: "/invoices"
  },
  {
    title: "Clients",
    icon: Users,
    path: "/clients"
  },
  {
    title: "Materials",
    icon: Package,
    path: "/materials"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div
      className={cn(
        "relative flex h-screen border-r bg-sidebar transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[240px]",
        className
      )}
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex h-14 items-center px-4 py-4">
          {!collapsed && (
            <h1 className="text-xl font-bold text-primary">Graftly</h1>
          )}
        </div>
        
        <ScrollArea className="flex-1 overflow-auto">
          <nav className="flex flex-col gap-2 px-2 py-2">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex h-10 items-center rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-accent text-accent-foreground" : "",
                    collapsed ? "justify-center" : ""
                  )
                }
              >
                <item.icon className={cn("h-5 w-5", collapsed ? "" : "mr-2")} />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </ScrollArea>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-8 h-8 w-8 rounded-full border bg-background"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
    </div>
  );
}
