
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";

interface MainLayoutProps {
  title?: string;
}

export function MainLayout({ title }: MainLayoutProps) {
  const isMobile = useIsMobile();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar - only show on desktop */}
      {!isMobile && <Sidebar />}
      
      {/* Mobile sidebar as overlay when explicitly opened */}
      {isMobile && mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-background/80">
          <div className="fixed inset-y-0 left-0">
            <Sidebar />
          </div>
          <div 
            className="fixed inset-0" 
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title={title} />
        
        <main className="flex-1 overflow-auto p-4 md:p-6 pb-20">
          <Outlet />
        </main>
        
        {/* Mobile Navigation */}
        {isMobile && (
          <MobileNav 
            onSidebarOpen={() => setMobileSidebarOpen(true)} 
          />
        )}
      </div>
    </div>
  );
}
