import { useQuery } from "@tanstack/react-query";
import { fetchRace } from "./fetchRaceDetails";
import { RaceDetails } from "./RaceDetails";
import { Pending, Error, Success } from "@/types/resultStates";

export type RaceResult = Pending | Error | Success<RaceDetails>;

export function useRace(index: string): RaceResult {
  const { status, data, error } = useQuery({
    queryKey: ["race", index],
    queryFn: () => fetchRace(index),
  });

  if (status === "pending") {
    return { status: "pending" };
  }

  if (status === "error") {
    return { status: "error", error: error };
  }

  return { status, data };
}
