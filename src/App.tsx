import { RouterProvider } from "@tanstack/react-router";
import { CommonProviders } from "./components/providers/CommonProviders";
import { router } from "./router";

function App() {
  return (
    <CommonProviders>
      <RouterProvider router={router} />
    </CommonProviders>
  );
}

export default App;
