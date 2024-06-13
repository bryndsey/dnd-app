import { z } from "zod";

// Use Zod for validation purposes

// These are "generic" types that are used in multiple places in the
// API being used, so I have them extracted here. In practice, I'm
// only using them in one place right now, but this is to demonstrate
// what it would look like if these were to be reused more widely

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
