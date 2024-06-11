import { RaceDetails } from "../types/RaceDetails";

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
