import { createLazyFileRoute } from "@tanstack/react-router";
import { RaceDetails } from "../features/race/RaceDetails";

export const Route = createLazyFileRoute("/race/$index")({
  component: () => <RaceDetailsPage />,
});

function RaceDetailsPage() {
  const index = Route.useParams().index;

  return (
    <div className="p-4">
      <RaceDetails index={index} />
    </div>
  );
}
