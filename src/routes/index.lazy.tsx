import { createLazyFileRoute } from "@tanstack/react-router";
import { RaceListSection } from "../features/race/RaceList";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div className="p-4 border m-2">
      <RaceListSection />
    </div>
  ),
});
