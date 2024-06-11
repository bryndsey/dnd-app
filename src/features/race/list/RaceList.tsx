import { Link } from "@tanstack/react-router";
import { useRaceList } from "./useRaceList";
import { Race } from "../types/Race";
import { ErrorDisplay } from "../../../components/ErrorDisplay";

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
      <RaceList races={result.data.results} />
    </div>
  );
}

export function RaceList({ races }: { races: Race[] }) {
  return (
    <ul>
      {races.map(({ index, name }) => (
        <li key={index}>
          <Link to={`/race/${index}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
