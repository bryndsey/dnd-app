import { client } from "../../../network/client";
import { resourceListSchema } from "../../../network/types/resource";
import { raceSchema } from "../types/Race";

export async function fetchRaces() {
  try {
    const response = await client.get("/api/races");
    return resourceListSchema.parse(response.data);
  } catch (e) {
    console.error(e);
    return null;
  }
}
export async function fetchRace(index: string) {
  try {
    const response = await client.get(`/api/races/${index}`);
    return raceSchema.parse(response.data);
  } catch (e) {
    console.error(e);
    return null;
  }
}
