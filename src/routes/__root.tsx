import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <h1 className="text-3xl font-bold p-2">
          Dungeons and Dragons Character Guide
        </h1>
        <hr />
      </header>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
