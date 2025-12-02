import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import CompanyHub from "@/pages/company/CompanyHub";
import CompanyAbout from "@/pages/company/CompanyAbout";
import CompanyStory from "@/pages/company/CompanyStory";
import CompanyRoadmap from "@/pages/company/CompanyRoadmap";
import CompanyTeam from "@/pages/company/CompanyTeam";
import Home from "@/pages/Home";
import NewsPage from "@/pages/NewsPage";
import NewsDetailPage from "@/pages/NewsDetailPage";
import WaitingListPage from "@/pages/WaitingList"; // Changed from WaitingList
import NotFound from "@/pages/NotFound"; // Changed path
import PhilosophyPage from "@/pages/PhilosophyPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ProductPage from "@/pages/ProductPage";
import TheEggPage from "@/pages/product/TheEggPage";
import LineupPage from "@/pages/product/LineupPage";
import UseCasesPage from "@/pages/UseCasesPage";
import PlatformPage from "@/pages/PlatformPage";
import ContactPage from "@/pages/ContactPage";
import TermsOfService from "@/pages/TermsOfService";
import CatalogPage from "@/pages/CatalogPage";
import PreOrderPage from "@/pages/PreOrderPage"; // Added PreOrderPage
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
      <Route path="/en/product/the-egg" component={TheEggPage} />
      <Route path="/en/product/lineup" component={LineupPage} />
      <Route path="/en/use-cases" component={UseCasesPage} />
      <Route path="/en/platform" component={PlatformPage} />
      <Route path="/en/company" component={CompanyHub} />
      <Route path="/en/company/about" component={CompanyAbout} />
      <Route path="/en/company/story" component={CompanyStory} />
      <Route path="/en/company/roadmap" component={CompanyRoadmap} />
      <Route path="/en/company/team" component={CompanyTeam} />
      <Route path="/en/news" component={NewsPage} />
      <Route path="/en/news/:slug" component={NewsDetailPage} />
      <Route path="/en/waiting-list" component={WaitingListPage} />
      <Route path="/en/catalog" component={CatalogPage} />
      <Route path="/en/preorder" component={PreOrderPage} />
      <Route path="/en/contact" component={ContactPage} />
      <Route path="/en/privacy" component={PrivacyPolicy} />
      <Route path="/en/terms" component={TermsOfService} />

      {/* Japanese Routes */}
      <Route path="/" component={Home} />
      <Route path="/philosophy" component={PhilosophyPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/product/the-egg" component={TheEggPage} />
      <Route path="/product/lineup" component={LineupPage} />
      <Route path="/use-cases" component={UseCasesPage} />
      <Route path="/platform" component={PlatformPage} />
      <Route path="/company" component={CompanyHub} />
      <Route path="/company/about" component={CompanyAbout} />
      <Route path="/company/story" component={CompanyStory} />
      <Route path="/company/roadmap" component={CompanyRoadmap} />
      <Route path="/company/team" component={CompanyTeam} />
      <Route path="/news" component={NewsPage} />
      <Route path="/news/:slug" component={NewsDetailPage} />
      <Route path="/waiting-list" component={WaitingListPage} />
      <Route path="/catalog" component={CatalogPage} />
      <Route path="/preorder" component={PreOrderPage} />
      <Route path="/contact" component={ContactPage} />
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

          <LanguageProvider>
            <div className="relative min-h-screen">
              <Router />
            </div>
            <Toaster />
          </LanguageProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
