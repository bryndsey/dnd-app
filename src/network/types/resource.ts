import { z } from "zod";

export const resourceSchema = z.object({
  index: z.string(),
  name: z.string(),
  url: z.string(),
});

export type Resource = z.infer<typeof resourceSchema>;

export const resourceListSchema = z.object({
  count: z.number().gte(0),
  results: z.array(resourceSchema),
});

export type ResourceList = z.infer<typeof resourceListSchema>;
