import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomCursor } from "@/components/ui/custom-cursor";
import CompanyPage from "@/pages/CompanyPage";
import Home from "@/pages/Home";
import NewsPage from "@/pages/NewsPage";
import NewsDetailPage from "@/pages/NewsDetailPage";
import WaitingList from "@/pages/WaitingList";
import NotFound from "@/pages/NotFound";
import PhilosophyPage from "@/pages/PhilosophyPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ProductPage from "@/pages/ProductPage";
import TermsOfService from "@/pages/TermsOfService";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/philosophy" component={PhilosophyPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/company" component={CompanyPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/news/:slug" component={NewsDetailPage} />
      <Route path="/waiting-list" component={WaitingList} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
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
