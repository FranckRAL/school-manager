import z from 'zod';
export declare const createScolaryYearSchema: z.ZodObject<{
    start_year: z.ZodNonOptional<z.ZodDate>;
    end_year: z.ZodNonOptional<z.ZodDate>;
    is_active: z.ZodNonOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
declare const CreateScolaryYearDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    start_year: z.ZodNonOptional<z.ZodDate>;
    end_year: z.ZodNonOptional<z.ZodDate>;
    is_active: z.ZodNonOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>, false>;
export declare class CreateScolaryYearDto extends CreateScolaryYearDto_base {
}
export {};
