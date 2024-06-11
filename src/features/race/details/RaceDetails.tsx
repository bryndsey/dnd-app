import { useRace } from "./useRace";
import { RaceDetails } from "../types/Race";
import { ErrorDisplay } from "../../../components/ErrorDisplay";

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
      <ErrorDisplay message="An error occurred while trying to fetch details" />
    );
  }

  return <div>{<RaceDetailsContent data={result.data} />}</div>;
}

interface RaceDetailsContentProps {
  data: RaceDetails;
}

export function RaceDetailsContent({ data }: RaceDetailsContentProps) {
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
