
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import TopNavBar from "@/components/TopNavBar";
import SpotlightCursor from "@/components/SpotlightCursor";
import LiquidGlassInteractions from "@/components/LiquidGlassInteractions";
import './new-liquid-glass-effects.css';

import Index from "./pages/Index";
import StockMarkets from "./pages/StockMarkets";
import CryptoNFTs from "./pages/CryptoNFTs";
import OnlineBusiness from "./pages/OnlineBusiness";
import Success from "./pages/Success";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Budgeting from "./pages/Budgeting";
import Quiz from "./pages/Quiz";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SpotlightCursor />
        <LiquidGlassInteractions />
        <BrowserRouter>
          <TopNavBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/stock-markets" element={<StockMarkets />} />
            <Route path="/crypto-nfts" element={<CryptoNFTs />} />
            <Route path="/online-business" element={<OnlineBusiness />} />
            <Route path="/success" element={<Success />} />
            <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resources" element={<Resources />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
