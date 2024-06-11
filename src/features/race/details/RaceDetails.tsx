import { useRace } from "./useRace";
import { RaceDetails } from "../types/Race";

export interface RaceDetailsProps {
  index: string;
}

export function RaceDetailsSection({ index }: RaceDetailsProps) {
  const result = useRace(index);

  if (result.status === "pending") {
    return <p>Loading...</p>;
  }

  if (result.status === "error") {
    return (
      <>
        <p>Oops, looks like we rolled a Nat 1...</p>
        <p>An error occurred while trying to fetch details</p>
        {result.error && <p>{result.error.message}</p>}
      </>
    );
  }

  return <div>{<RaceDetailsContent data={result.data} />}</div>;
}

interface RaceDetailsContentProps {
  data: RaceDetails;
}

function RaceDetailsContent({ data }: RaceDetailsContentProps) {
  return (
    <>
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
    </>
  );
}
