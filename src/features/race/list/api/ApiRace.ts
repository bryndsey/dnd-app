import { Resource, ResourceList, resourceListSchema } from "@/types/resource";

// Alias the types to abstract the fact that these are based on the Resource models,
// which helps decouple other code from that detail.

export type ApiRace = Resource;

export type ApiRaceList = ResourceList;

export const apiRaceListSchema = resourceListSchema;
