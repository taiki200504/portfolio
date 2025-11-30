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
import CatalogPage from "@/pages/CatalogPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import { LanguageProvider } from "@/lib/i18n";

function Router() {
  return (
    <Switch>
      {/* English Routes */}
      <Route path="/en" component={Home} />
      <Route path="/en/philosophy" component={PhilosophyPage} />
      <Route path="/en/product" component={ProductPage} />
      <Route path="/en/company" component={CompanyPage} />
      <Route path="/en/news" component={NewsPage} />
      <Route path="/en/news/:slug" component={NewsDetailPage} />
      <Route path="/en/waiting-list" component={WaitingList} />
      <Route path="/en/catalog" component={CatalogPage} />
      <Route path="/en/privacy" component={PrivacyPolicy} />
      <Route path="/en/terms" component={TermsOfService} />

      {/* Japanese Routes */}
      <Route path="/" component={Home} />
      <Route path="/philosophy" component={PhilosophyPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/company" component={CompanyPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/news/:slug" component={NewsDetailPage} />
      <Route path="/waiting-list" component={WaitingList} />
      <Route path="/catalog" component={CatalogPage} />
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
          <LanguageProvider>
            <Router />
            <Toaster />
          </LanguageProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
