import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <h1 className="text-xl sm:text-2xl font-bold p-2">
          D&D Character Guide
        </h1>
        <hr />
      </header>
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
