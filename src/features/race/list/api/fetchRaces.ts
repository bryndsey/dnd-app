import { httpClient } from "@/lib/httpClient";
import { resourceListSchema } from "@/types/resource";

export async function fetchRaces() {
  const response = await httpClient.get("/api/races");
  return resourceListSchema.parse(response.data);
}
