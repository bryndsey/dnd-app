import { RouterProvider as TanstackRouterProvider } from "@tanstack/react-router";
import { router } from "./router";

// Attempt to encapsulate the implementation detail that I am using Tanstack Router
export function RouterProvider() {
  return <TanstackRouterProvider router={router} />;
}
