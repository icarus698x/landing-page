import { createBrowserRouter, redirect } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { AIAssistantPage } from "./pages/PlatformAIAssistant";
import { KnowledgeBasePage } from "./pages/PlatformKnowledgeBase";
import { ExpertEscalationPage } from "./pages/PlatformExpertEscalation";
import { OperationsDashboardPage } from "./pages/PlatformOperationsDashboard";
import { DocumentIntelligencePage } from "./pages/PlatformDocumentIntelligence";
import { MoreFeaturesPage } from "./pages/PlatformMoreFeatures";
import { DataPrivacyPage } from "./pages/DataPrivacyPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/platform",
    loader: () => redirect("/"),
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "platform/ai-assistant", Component: AIAssistantPage },
      { path: "platform/knowledge-base", Component: KnowledgeBasePage },
      { path: "platform/expert-escalation", Component: ExpertEscalationPage },
      { path: "platform/operations-dashboard", Component: OperationsDashboardPage },
      { path: "platform/document-intelligence", Component: DocumentIntelligencePage },
      { path: "platform/more-features", Component: MoreFeaturesPage },
      { path: "data-privacy", Component: DataPrivacyPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);