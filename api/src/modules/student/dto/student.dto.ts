import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createStudentSchema = z.object({
  first_name: z.string().min(2),
  last_name1: z.string().min(2),
  gender: z.enum(['M', 'F']),
  date_of_birth: z.coerce.date(),
  father_name: z.string().optional(),
  mother_name: z.string().optional(),
  tutor_phone_number: z.string().regex(/^\d{10}$/),
  address: z.string().optional(),
  classeId: z.cuid2('Classe id invalide'),
});

export const updateStudentSchema = createStudentSchema.partial();

export class CreateStudentDto extends createZodDto(createStudentSchema) {}
export class UpdateStudentDto extends createZodDto(updateStudentSchema) {}
