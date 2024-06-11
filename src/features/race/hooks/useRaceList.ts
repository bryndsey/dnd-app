import { useQuery } from "@tanstack/react-query";
import { fetchRaces } from "../api/fetchRaces";

export function useRaceList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["races"],
    queryFn: fetchRaces,
  });

  return { data, isLoading, error };
}
