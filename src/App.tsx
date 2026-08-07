import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import TopNavBar from "@/components/TopNavBar";

import Index from "./pages/Index";
import StockMarkets from "./pages/StockMarkets";
import CryptoNFTs from "./pages/CryptoNFTs";
import OnlineBusiness from "./pages/OnlineBusiness";
import Success from "./pages/Success";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Budgeting from "./pages/Budgeting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TopNavBar />
          <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/stock-markets" element={<StockMarkets />} />
              <Route path="/crypto-nfts" element={<CryptoNFTs />} />
              <Route path="/online-business" element={<OnlineBusiness />} />
              <Route path="/success" element={<Success />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/budgeting" element={<Budgeting />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
