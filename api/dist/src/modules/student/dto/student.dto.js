"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = exports.CreateStudentDto = exports.updateStudentSchema = exports.createStudentSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.createStudentSchema = zod_1.z.object({
    first_name: zod_1.z.string().min(2),
    last_name1: zod_1.z.string().min(2),
    gender: zod_1.z.enum(['M', 'F']),
    date_of_birth: zod_1.z.coerce.date(),
    father_name: zod_1.z.string().optional(),
    mother_name: zod_1.z.string().optional(),
    tutor_phone_number: zod_1.z.string().regex(/^\d{10}$/),
    address: zod_1.z.string().optional(),
    classeId: zod_1.z.cuid2('Classe id invalide'),
});
exports.updateStudentSchema = exports.createStudentSchema.partial();
class CreateStudentDto extends (0, nestjs_zod_1.createZodDto)(exports.createStudentSchema) {
}
exports.CreateStudentDto = CreateStudentDto;
class UpdateStudentDto extends (0, nestjs_zod_1.createZodDto)(exports.updateStudentSchema) {
}
exports.UpdateStudentDto = UpdateStudentDto;
//# sourceMappingURL=student.dto.js.map