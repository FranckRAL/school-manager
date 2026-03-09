"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClasseDto = exports.CreateClasseDto = exports.updateClasseSchema = exports.createClasseSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = __importDefault(require("zod"));
exports.createClasseSchema = zod_1.default.object({
    name: zod_1.default.string().min(1, 'Name is required'),
    description: zod_1.default.string().min(1).optional(),
    levelId: zod_1.default.cuid2('Level id invalide'),
    scolaryYearId: zod_1.default.uuid('Scolary ID invalide'),
});
exports.updateClasseSchema = exports.createClasseSchema.partial();
class CreateClasseDto extends (0, nestjs_zod_1.createZodDto)(exports.createClasseSchema) {
}
exports.CreateClasseDto = CreateClasseDto;
class UpdateClasseDto extends (0, nestjs_zod_1.createZodDto)(exports.updateClasseSchema) {
}
exports.UpdateClasseDto = UpdateClasseDto;
//# sourceMappingURL=classe.dto.js.map