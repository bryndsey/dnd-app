import { httpClient } from "@/lib/httpClient";
import { ApiRaceDetails, apiRaceDetailsSchema } from "./ApiRaceDetails";
import { RaceDetails } from "../types/RaceDetails";

// I could handle more specific errors here, but given the simplicity of the state
// and time constraints, I opted not to.
//
// An example might be that if I get a 404, I could bubble that up and show a
// "Page does not exist" message.
export async function fetchRaceDetails(index: string) {
  const response = await httpClient.get(`/api/races/${index}`);
  const parsedData: ApiRaceDetails = apiRaceDetailsSchema.parse(response.data);
  return convertToDomainModel(parsedData);
}

// By convertig the API model to a domain model, the rest of the app code is
// decoupled from API specifics. Thus, if the API does something like rename a property,
// I only need to update the mapping logic.
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
