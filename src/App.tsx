
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Clients from "./pages/Clients";
import Quotes from "./pages/Quotes";
import Invoices from "./pages/Invoices";
import Materials from "./pages/Materials";
import Settings from "./pages/Settings";
import Enquiries from "./pages/Enquiries";
import PublicEnquiry from "./pages/PublicEnquiry";
import NotFound from "./pages/NotFound";
import { ModalProvider } from "./contexts/ModalContext";
import { ModalRoot } from "./components/modals/ModalRoot";
import Index from "./pages/Index"; // Ensure this import is present

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ModalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing page at root */}
            <Route path="/" element={<Index />} />
            
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/enquiries" element={<Enquiries />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            
            {/* Public enquiry page - standalone outside of MainLayout */}
            <Route path="/enquiry" element={<PublicEnquiry />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* Modal Root Component */}
        <ModalRoot />
      </ModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
