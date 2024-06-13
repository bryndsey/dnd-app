import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { QueryProvider } from "../lib/QueryProvider";

// Because Tanstack router components (like `Link`) are used in the components being tested,
// we need to include a router so those components get their correct Context.
const TestProviders = ({ children }: { children: ReactNode }) => {
  // Add a new routing setup that renders the children
  const rootRoute = createRootRoute({ component: () => children });
  const router = createRouter({ routeTree: rootRoute });

  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: TestProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
