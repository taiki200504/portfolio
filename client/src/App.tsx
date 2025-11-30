import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomCursor } from "@/components/ui/custom-cursor";
import CompanyPage from "@/pages/CompanyPage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PhilosophyPage from "@/pages/PhilosophyPage";
import Privacy from "@/pages/Privacy";
import ProductPage from "@/pages/ProductPage";
import Terms from "@/pages/Terms";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/philosophy"} component={PhilosophyPage} />
      <Route path={"/product"} component={ProductPage} />
      <Route path={"/company"} component={CompanyPage} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      // switchable
      >
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
