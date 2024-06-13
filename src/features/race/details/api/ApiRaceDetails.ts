import { z } from "zod";
import { resourceSchema } from "@/types/resource";

export const apiRaceDetailsSchema = z.object({
  ...resourceSchema.shape,
  speed: z.number(),
  alignment: z.string(),
  age: z.string(),
  size: z.string(),
  size_description: z.string(),
  language_desc: z.string(),
});

export type ApiRaceDetails = z.infer<typeof apiRaceDetailsSchema>;
