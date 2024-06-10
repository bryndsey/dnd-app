import { z } from "zod";
import { Resource, resourceSchema } from "../../../network/types/resource";

export type Race = Resource;

export const raceSchema = z.object({
  ...resourceSchema.shape,
  speed: z.number(),
  alignment: z.string(),
  age: z.string(),
  size: z.string(),
  size_description: z.string(),
  language_desc: z.string(),
});

export type RaceDetails = z.infer<typeof raceSchema>;
