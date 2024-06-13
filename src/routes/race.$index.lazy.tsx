import { RaceDetailsSection } from "@/features/race/details";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

// This is the "details" page showing a single item

export const Route = createLazyFileRoute("/race/$index")({
  component: () => <RaceDetailsPage />,
});

function RaceDetailsPage() {
  const index = Route.useParams().index;

  return (
    <div className="space-y-2 p-4">
      <Link to={"/"}>{"← Back"}</Link>
      <br />
      <RaceDetailsSection index={index} />
    </div>
  );
}
