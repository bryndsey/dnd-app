import { z } from "zod";
import { resourceSchema } from "@/types/resource";

// Zod for validation
export const apiRaceDetailsSchema = z.object({
  ...resourceSchema.shape,
  speed: z.number(),
  alignment: z.string(),
  age: z.string(),
  size: z.string(),
  size_description: z.string(),
  language_desc: z.string(),
});

// Create separate API model from the main "domain" model.
export type ApiRaceDetails = z.infer<typeof apiRaceDetailsSchema>;
