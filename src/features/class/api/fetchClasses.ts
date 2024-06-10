import { client } from "../../../network/client";
import { resourceListSchema } from "../../../network/types/resource";

export async function fetchClasses() {
  try {
    const response = await client.get("/api/classes");
    return resourceListSchema.parse(response.data);
  } catch (e) {
    console.error(e);
    return null;
  }
}
