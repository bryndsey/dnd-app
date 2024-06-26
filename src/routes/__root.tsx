import { CookieDialog } from "@/features/cookies/CookieDialog";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// This is the root layout that will be reused across different routes
export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <h1 className="p-2 text-xl font-bold sm:text-2xl">
          D&D Character Guide
        </h1>
        <hr />
      </header>
      <main className="mx-auto max-w-screen-xl sm:p-4">
        <Outlet />
        <div className="fixed bottom-4 right-4">
          <CookieDialog />
        </div>
      </main>
      {/* Enable this to see router dev tools */}
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
