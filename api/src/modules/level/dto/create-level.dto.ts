import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createLevelDto = z
  .object({
    name: z.string().min(1),
    category: z.enum(['PRIMAIRE', 'SECONDAIRE', 'LYCEE']),
  })
  .required();

export class CreateLevelDto extends createZodDto(createLevelDto) {}
