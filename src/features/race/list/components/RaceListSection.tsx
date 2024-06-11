import { useRaceList } from "../hooks/useRaceList";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { RaceListContent } from "./RaceListContent";

export function RaceListSection() {
  const result = useRaceList();

  if (result.status === "pending") {
    return <p>Loading...</p>;
  }

  if (result.status === "error") {
    return (
      <ErrorDisplay message="An error occurred while trying to fetch the list of races" />
    );
  }

  return (
    <div>
      <h2 className="text-lg font-bold">Races</h2>
      <RaceListContent races={result.data.results} />
    </div>
  );
}
