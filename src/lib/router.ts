import { createRouter, NotFoundRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "@/routes/__root.tsx";
import { ErrorDisplay } from "@/components/ErrorDisplay";

// Import the generated route tree
import { routeTree } from "@/routeTree.gen";

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => ErrorDisplay({ message: "We couldn't find that page" }),
});

// Create a new router instance
export const router = createRouter({ routeTree, notFoundRoute });
// Register the router instance for type safety

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
