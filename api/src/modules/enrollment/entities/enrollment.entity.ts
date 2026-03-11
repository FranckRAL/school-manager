import { z } from 'zod';
import { createEnrollmentSchema } from '../dto/create-enrollment.dto';
import { createZodDto } from 'nestjs-zod';

export const enrollmentSchema = createEnrollmentSchema.extend({
  id: z.cuid(),
  created_at: z.date(),
  updated_at: z.date(),
});

export class Enrollment extends createZodDto(enrollmentSchema) {}
