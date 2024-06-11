import { useRace } from "../hooks/useRace";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { RaceDetailsContent } from "./RaceDetailsContent";

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
