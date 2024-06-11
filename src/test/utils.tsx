import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { QueryProvider } from "../lib/QueryProvider";

const TestProviders = ({ children }: { children: ReactNode }) => {
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
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
