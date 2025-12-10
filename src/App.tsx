
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GuiaSaudeMulher from "./pages/GuiaSaudeMulher";
import GuiaHigieneOral from "./pages/GuiaHigieneOral";
import GuiaAlimentacaoSaudavel from "./pages/GuiaAlimentacaoSaudavel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guia-saude-mulher" element={<GuiaSaudeMulher />} />
          <Route path="/guia-higiene-oral" element={<GuiaHigieneOral />} />
          <Route path="/guia-alimentacao-saudavel" element={<GuiaAlimentacaoSaudavel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
