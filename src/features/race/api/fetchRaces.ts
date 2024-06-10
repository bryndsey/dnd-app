import { client } from "../../../network/client";
import { resourceListSchema } from "../../../network/types/resource";

export async function fetchRaces() {
  try {
    const response = await client.get("/api/races");
    return resourceListSchema.parse(response.data);
  } catch (e) {
    console.error(e);
    return null;
  }
}
