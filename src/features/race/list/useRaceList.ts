import { useQuery } from "@tanstack/react-query";
import { fetchRaces } from "./fetchRaces";
import { Pending, Error, Success } from "@/types/resultStates";
import { ResourceList } from "@/network/types/resource";

export type RaceListResult = Pending | Error | Success<ResourceList>;

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
