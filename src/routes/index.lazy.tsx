import { createLazyFileRoute } from "@tanstack/react-router";
import { RaceListSection } from "@/features/race/list";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div className="p-4">
      <RaceListSection />
    </div>
  ),
});
