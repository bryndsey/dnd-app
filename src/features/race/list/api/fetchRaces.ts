import { httpClient } from "@/lib/httpClient";
import { ApiRaceList, apiRaceListSchema } from "./ApiRace";
import { Race } from "../types/Race";

// I could handle more specific errors here, but given the simplicity of the state
// and time constraints, I opted not to.
export async function fetchRaces() {
  const response = await httpClient.get("/api/races");
  const listData = apiRaceListSchema.parse(response.data);
  return convertToDomainModel(listData);
}

// By convertig the API model to a domain model, the rest of the app code is
// decoupled from API specifics. Thus, if the API does something like rename a property,
// I only need to update the mapping logic.
function convertToDomainModel(data: ApiRaceList): Race[] {
  return data.results;
}
