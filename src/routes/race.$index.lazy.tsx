import { createLazyFileRoute } from "@tanstack/react-router";
import { RaceDetails } from "../features/race/RaceDetails";

export const Route = createLazyFileRoute("/race/$index")({
  component: () => (
    <div className="p-4">
      <RaceDetails />
    </div>
  ),
});
