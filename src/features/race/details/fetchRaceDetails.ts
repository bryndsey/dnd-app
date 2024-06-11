import { client } from "@/network/client";
import { raceSchema } from "./RaceDetails";

export async function fetchRace(index: string) {
  const response = await client.get(`/api/races/${index}`);
  return raceSchema.parse(response.data);
}
