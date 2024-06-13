import { httpClient } from "@/lib/httpClient";
import { ApiRaceDetails, apiRaceDetailsSchema } from "./ApiRaceDetails";
import { RaceDetails } from "../types/RaceDetails";

export async function fetchRaceDetails(index: string) {
  const response = await httpClient.get(`/api/races/${index}`);
  const parsedData: ApiRaceDetails = apiRaceDetailsSchema.parse(response.data);
  return convertToDomainModel(parsedData);
}

function convertToDomainModel(details: ApiRaceDetails): RaceDetails {
  return {
    index: details.index,
    name: details.name,
    speed: details.speed,
    alignment: details.alignment,
    age: details.age,
    sizeDescription: details.size_description,
    languageDescription: details.language_desc,
  };
}
