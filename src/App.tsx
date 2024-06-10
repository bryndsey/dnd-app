import { RouterProvider, createRouter } from "@tanstack/react-router";
import { CommonProviders } from "./components/providers/CommonProviders";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <CommonProviders>
      <RouterProvider router={router} />
    </CommonProviders>
  );
}

export default App;
