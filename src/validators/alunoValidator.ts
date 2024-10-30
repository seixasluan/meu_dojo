import { z } from "zod";

export const alunoSchema = z.object({
  name: z.string().min(3), // name have to be a string and not empty
  email: z.string().email(), // email have to be a string and a valid email
  phone: z.string().min(11).max(11), // phone have to ba a string an have 11 characters
});

export type AlunoInput = z.infer<typeof alunoSchema>; // infered type from schema
