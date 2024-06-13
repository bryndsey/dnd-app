import { Error, Pending, Success } from "@/types/resultStates";
import { useQuery } from "@tanstack/react-query";
import { fetchRaces } from "../api/fetchRaces";
import { Race } from "../types/Race";

export type RaceListResult = Pending | Error | Success<Race[]>;

export function useRaceList(): RaceListResult {
  const { status, data, error } = useQuery({
    queryKey: ["races"],
    queryFn: fetchRaces,
  });

  if (status === "pending") {
    return { status: "pending" };
  }

  if (status === "error") {
    return { status: "error", error: error };
  }

  return { status, data };
}
