import { useQuery } from "@tanstack/react-query";
import { fetchRaceDetails } from "../api/fetchRaceDetails";
import { RaceDetails } from "../types/RaceDetails";
import { Pending, Error, Success } from "@/types/resultStates";

export type RaceResult = Pending | Error | Success<RaceDetails>;

// Extract this as a custom hook to encapsulate the fact that I'm using Tanstack Query
export function useRace(index: string): RaceResult {
  const { status, data, error } = useQuery({
    queryKey: ["race", index],
    queryFn: () => fetchRaceDetails(index),
  });

  // This mapping may seem redundant given that the consumer could just check the status,
  // but I wanted to create a discriminated union to make the types more expressive of intent.

  if (status === "pending") {
    return { status: "pending" };
  }

  if (status === "error") {
    return { status: "error", error: error };
  }

  return { status, data };
}
