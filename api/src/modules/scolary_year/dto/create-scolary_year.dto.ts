import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createScolaryYearSchema = z
  .object({
    start_year: z.int(),
    end_year: z.int(),
    is_active: z.boolean().default(false),
  })
  .required();

export class CreateScolaryYearDto extends createZodDto(
  createScolaryYearSchema,
) {}
