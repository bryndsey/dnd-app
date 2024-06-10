import { useQuery } from "@tanstack/react-query";
import { Route } from "../../routes/race.$index.lazy";
import { fetchRace } from "./api/fetchRaces";

export function RaceDetails() {
  const index = Route.useParams().index;

  const { data, isLoading, error } = useQuery({
    queryKey: ["race", index],
    queryFn: () => fetchRace(index),
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.age}</p>
          <p>{data.language_desc}</p>
          <p>{data.size_description}</p>
          <p>{data.speed}</p>
          <p>{data.alignment}</p>
        </div>
      )}
    </div>
  );
}
