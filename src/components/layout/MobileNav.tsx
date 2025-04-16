
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Users, 
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onSidebarOpen: () => void;
}

const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    title: "Jobs",
    icon: Briefcase,
    path: "/jobs"
  },
  {
    title: "Quotes",
    icon: FileText,
    path: "/quotes"
  },
  {
    title: "Clients",
    icon: Users,
    path: "/clients"
  }
];

export function MobileNav({ onSidebarOpen }: MobileNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background p-2 md:hidden">
      <div className="flex items-center justify-between">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-1 flex-col items-center justify-center rounded-md p-2 text-xs",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <item.icon className="mb-1 h-5 w-5" />
            <span>{item.title}</span>
          </NavLink>
        ))}
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-1 flex-col items-center justify-center rounded-md p-2 text-xs text-muted-foreground"
          onClick={onSidebarOpen}
        >
          <Menu className="mb-1 h-5 w-5" />
          <span>More</span>
        </Button>
      </div>
    </div>
  );
}
