import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { fetchRaces } from "./api/fetchRaces";
import { Race } from "./types/Race";

export function RaceListSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["races"],
    queryFn: fetchRaces,
  });

  return (
    <div>
      <h2>Races</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <RaceList races={data.results} />}
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
