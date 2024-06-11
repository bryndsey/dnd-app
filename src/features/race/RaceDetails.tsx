import { useRace } from "./hooks/useRace";
import { RaceDetails } from "./types/Race";

export interface RaceDetailsProps {
  index: string;
}

export function RaceDetailsSection({ index }: RaceDetailsProps) {
  const { data, isLoading, error } = useRace(index);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <RaceDetailsContent data={data} />}
    </div>
  );
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
