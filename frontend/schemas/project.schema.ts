import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title minimum 3 characters"),

  description: z.string().min(10, "Description required"),
});

export type ProjectForm = z.infer<typeof projectSchema>;
