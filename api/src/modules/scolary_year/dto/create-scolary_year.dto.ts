import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createScolaryYearSchema = z
  .object({
    start_year: z.date(),
    end_year: z.date(),
    is_active: z.boolean().default(false),
  })
  .required();

export class CreateScolaryYearDto extends createZodDto(
  createScolaryYearSchema,
) {}
