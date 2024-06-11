import { Link, useRouter } from "@tanstack/react-router";
import { useRace } from "./hooks/useRace";

export interface RaceDetailsProps {
  index: string;
}

export function RaceDetails({ index }: RaceDetailsProps) {
  const { data, isLoading, error } = useRace(index);

  const router = useRouter();

  return (
    <div>
      <Link onClick={router.history.back}>{"← Back"}</Link>
      <br />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <br />
          <p>Age:</p>
          <p>{data.age}</p>
          <br />
          <p>Language:</p>
          <p>{data.language_desc}</p>
          <br />
          <p>Size:</p>
          <p>{data.size_description}</p>
          <br />
          <p>Speed:</p>
          <p>{`${data.speed} feet per round.`}</p>
          <br />
          <p>Alignment:</p>
          <p>{data.alignment}</p>
        </div>
      )}
    </div>
  );
}
