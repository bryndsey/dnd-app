import { httpClient } from "@/lib/httpClient";
import { raceSchema } from "../types/RaceDetails";

export async function fetchRace(index: string) {
  const response = await httpClient.get(`/api/races/${index}`);
  return raceSchema.parse(response.data);
}
