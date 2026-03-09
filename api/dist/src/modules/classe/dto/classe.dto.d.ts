import z from 'zod';
export declare const createClasseSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    levelId: z.ZodCUID2;
    scolaryYearId: z.ZodUUID;
}, z.core.$strip>;
export declare const updateClasseSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    levelId: z.ZodOptional<z.ZodCUID2>;
    scolaryYearId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strip>;
declare const CreateClasseDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    levelId: z.ZodCUID2;
    scolaryYearId: z.ZodUUID;
}, z.core.$strip>, false>;
export declare class CreateClasseDto extends CreateClasseDto_base {
}
declare const UpdateClasseDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    levelId: z.ZodOptional<z.ZodCUID2>;
    scolaryYearId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strip>, false>;
export declare class UpdateClasseDto extends UpdateClasseDto_base {
}
export {};
