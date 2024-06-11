import { client } from "../../../network/client";
import { resourceListSchema } from "../../../network/types/resource";
import { raceSchema } from "../types/Race";

export async function fetchRaces() {
  const response = await client.get("/api/races");
  return resourceListSchema.parse(response.data);
}

export async function fetchRace(index: string) {
  const response = await client.get(`/api/races/${index}`);
  return raceSchema.parse(response.data);
}
