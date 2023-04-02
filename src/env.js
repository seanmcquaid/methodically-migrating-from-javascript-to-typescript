import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_MSW_ENABLED: z
    .string()
    .transform(val => Boolean(JSON.parse(val)))
    .optional(),
  MODE: z.union([
    z.literal('development'),
    z.literal('test'),
    z.literal('production'),
  ]),
});

const env = envSchema.parse(import.meta.env);

export default env;
