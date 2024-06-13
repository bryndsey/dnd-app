import { httpClient } from "@/lib/httpClient";
import { ApiRaceList, apiRaceListSchema } from "./ApiRace";
import { Race } from "../types/Race";

export async function fetchRaces() {
  const response = await httpClient.get("/api/races");
  const listData = apiRaceListSchema.parse(response.data);
  return convertToDomainModel(listData);
}

function convertToDomainModel(data: ApiRaceList): Race[] {
  return data.results;
}
