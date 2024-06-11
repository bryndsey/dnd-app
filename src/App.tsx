import { QueryProvider } from "./lib/QueryProvider";
import { RouterProvider } from "./lib/RouterProvider";

function App() {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
}

export default App;
