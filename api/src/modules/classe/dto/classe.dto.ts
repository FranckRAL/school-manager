import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createClasseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1).optional(),
  levelId: z.cuid2('invalid Level id'),
});

export const updateClasseSchema = createClasseSchema.partial();

export class CreateClasseDto extends createZodDto(createClasseSchema) {}
export class UpdateClasseDto extends createZodDto(updateClasseSchema) {}
