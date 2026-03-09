import z from 'zod';
export declare const createLevelDto: z.ZodObject<{
    name: z.ZodNonOptional<z.ZodString>;
    category: z.ZodNonOptional<z.ZodEnum<{
        PRIMAIRE: "PRIMAIRE";
        SECONDAIRE: "SECONDAIRE";
        LYCEE: "LYCEE";
    }>>;
}, z.core.$strip>;
declare const CreateLevelDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    name: z.ZodNonOptional<z.ZodString>;
    category: z.ZodNonOptional<z.ZodEnum<{
        PRIMAIRE: "PRIMAIRE";
        SECONDAIRE: "SECONDAIRE";
        LYCEE: "LYCEE";
    }>>;
}, z.core.$strip>, false>;
export declare class CreateLevelDto extends CreateLevelDto_base {
}
export {};
