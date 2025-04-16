import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/clients" element={<Clients />} />
            {/* Future pages will be added here */}
            <Route path="/quotes" element={<div className="p-4">Quotes Manager - Coming Soon</div>} />
            <Route path="/invoices" element={<div className="p-4">Invoices & Payments - Coming Soon</div>} />
            <Route path="/materials" element={<div className="p-4">Materials & Parts - Coming Soon</div>} />
            <Route path="/settings" element={<div className="p-4">Settings & Company Profile - Coming Soon</div>} />
          </Route>
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
