import { createLazyFileRoute, Link, useRouter } from "@tanstack/react-router";
import { RaceDetailsSection } from "@/features/race/details";

export const Route = createLazyFileRoute("/race/$index")({
  component: () => <RaceDetailsPage />,
});

function RaceDetailsPage() {
  const index = Route.useParams().index;

  const router = useRouter();
  return (
    <div className="space-y-2 p-4">
      <Link onClick={router.history.back}>{"← Back"}</Link>
      <br />
      <RaceDetailsSection index={index} />
    </div>
  );
}
