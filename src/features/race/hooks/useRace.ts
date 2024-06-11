import { useQuery } from "@tanstack/react-query";
import { fetchRace } from "../api/fetchRaces";

export function useRace(index: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["race", index],
    queryFn: () => fetchRace(index),
  });

  return { data, isLoading, error };
}
