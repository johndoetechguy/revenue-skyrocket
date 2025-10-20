import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Segments from "./pages/Segments";
import Upsell from "./pages/Upsell";
import RoutesPage from "./pages/Routes";
import Predictions from "./pages/Predictions";
import Bundles from "./pages/Bundles";
import Channels from "./pages/Channels";
import Alerts from "./pages/Alerts";
import Recommendations from "./pages/Recommendations";
import Assistant from "./pages/Assistant";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/upsell" element={<Upsell />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
