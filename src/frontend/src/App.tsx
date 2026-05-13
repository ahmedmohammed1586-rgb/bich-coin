import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./Layout";

const HeroSection = lazy(() => import("./pages/HeroSection"));
const CollectionSection = lazy(() => import("./pages/CollectionSection"));
const CampaignSection = lazy(() => import("./pages/CampaignSection"));
const AboutSection = lazy(() => import("./pages/AboutSection"));
const ExperienceSection = lazy(() => import("./pages/ExperienceSection"));
const CommunitySection = lazy(() => import("./pages/CommunitySection"));
const FooterSection = lazy(() => import("./pages/FooterSection"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

function HomePage() {
  return (
    <Layout>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <HeroSection />
        <CollectionSection />
        <CampaignSection />
        <AboutSection />
        <ExperienceSection />
        <CommunitySection />
        <FooterSection />
      </Suspense>
    </Layout>
  );
}

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute]),
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
