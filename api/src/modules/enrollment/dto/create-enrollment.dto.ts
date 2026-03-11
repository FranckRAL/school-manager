import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createEnrollmentSchema = z.object({
  studentId: z.cuid2(),
  classeId: z.cuid2(),
  scolaryYearId: z.cuid2(),
});

export class CreateEnrollmentDto extends createZodDto(createEnrollmentSchema) {}
