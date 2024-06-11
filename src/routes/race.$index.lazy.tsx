import { createLazyFileRoute, Link, useRouter } from "@tanstack/react-router";
import { RaceDetails } from "../features/race/RaceDetails";

export const Route = createLazyFileRoute("/race/$index")({
  component: () => <RaceDetailsPage />,
});

function RaceDetailsPage() {
  const index = Route.useParams().index;

  const router = useRouter();
  return (
    <div className="p-4">
      <Link onClick={router.history.back}>{"← Back"}</Link>
      <br />
      <RaceDetails index={index} />
    </div>
  );
}
