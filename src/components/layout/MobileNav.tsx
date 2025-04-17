
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Users, 
  Receipt,
  Package,
  Settings,
  Plus,
  Search
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onSidebarOpen: () => void;
}

// Main navigation items for the bottom bar
const mainNavItems = [
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

// Additional items for the more menu
const moreNavItems = [
  {
    title: "Enquiries",
    icon: Receipt,
    path: "/enquiries"
  },
  {
    title: "Invoices",
    icon: Receipt,
    path: "/invoices"
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

export function MobileNav({ onSidebarOpen }: MobileNavProps) {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  
  // Helper function to render nav item with consistent styling
  const renderNavItem = (item: typeof mainNavItems[0], onClick?: () => void) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        cn(
          "flex flex-col items-center justify-center rounded-md p-1.5 text-xs",
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        )
      }
      onClick={onClick}
    >
      <item.icon className="mb-1 h-5 w-5" />
      <span>{item.title}</span>
    </NavLink>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background p-2 md:hidden">
      <div className="grid grid-cols-5 items-center gap-1">
        {mainNavItems.map(item => renderNavItem(item))}
        
        {/* More menu with sheet */}
        <Sheet open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center justify-center rounded-md p-1.5 text-xs text-muted-foreground"
            >
              <div className="relative">
                <Plus className="mb-1 h-5 w-5" />
                <span>More</span>
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[60vh] pb-safe">
            <div className="flex flex-col space-y-2 pt-2">
              <div className="text-sm font-medium mb-2">More Options</div>
              <div className="grid grid-cols-4 gap-4">
                {moreNavItems.map(item => renderNavItem(item, () => setIsMoreMenuOpen(false)))}
              </div>
              
              {/* Quick actions */}
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm font-medium mb-2">Quick Actions</div>
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" className="flex items-center gap-2 h-10">
                    <Briefcase className="h-4 w-4" />
                    <span>New Job</span>
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 h-10">
                    <Search className="h-4 w-4" />
                    <span>Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
