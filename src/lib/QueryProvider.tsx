import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/queryClient";

// Attempt to encapsulate the implementation detail that I am using Tanstack Query
export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition="top-right" />
      {children}
    </QueryClientProvider>
  );
}
