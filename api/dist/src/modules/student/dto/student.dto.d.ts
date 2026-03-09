import { z } from 'zod';
export declare const createStudentSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name1: z.ZodString;
    gender: z.ZodEnum<{
        M: "M";
        F: "F";
    }>;
    date_of_birth: z.ZodCoercedDate<unknown>;
    father_name: z.ZodOptional<z.ZodString>;
    mother_name: z.ZodOptional<z.ZodString>;
    tutor_phone_number: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    classeId: z.ZodCUID2;
}, z.core.$strip>;
export declare const updateStudentSchema: z.ZodObject<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name1: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<{
        M: "M";
        F: "F";
    }>>;
    date_of_birth: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    father_name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    mother_name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    tutor_phone_number: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    classeId: z.ZodOptional<z.ZodCUID2>;
}, z.core.$strip>;
declare const CreateStudentDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    first_name: z.ZodString;
    last_name1: z.ZodString;
    gender: z.ZodEnum<{
        M: "M";
        F: "F";
    }>;
    date_of_birth: z.ZodCoercedDate<unknown>;
    father_name: z.ZodOptional<z.ZodString>;
    mother_name: z.ZodOptional<z.ZodString>;
    tutor_phone_number: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    classeId: z.ZodCUID2;
}, z.core.$strip>, false>;
export declare class CreateStudentDto extends CreateStudentDto_base {
}
declare const UpdateStudentDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name1: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<{
        M: "M";
        F: "F";
    }>>;
    date_of_birth: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    father_name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    mother_name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    tutor_phone_number: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    classeId: z.ZodOptional<z.ZodCUID2>;
}, z.core.$strip>, false>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
}
export {};
