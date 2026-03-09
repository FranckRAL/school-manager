"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLevelDto = exports.createLevelDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = __importDefault(require("zod"));
exports.createLevelDto = zod_1.default
    .object({
    name: zod_1.default.string().min(1),
    category: zod_1.default.enum(['PRIMAIRE', 'SECONDAIRE', 'LYCEE']),
})
    .required();
class CreateLevelDto extends (0, nestjs_zod_1.createZodDto)(exports.createLevelDto) {
}
exports.CreateLevelDto = CreateLevelDto;
//# sourceMappingURL=create-level.dto.js.map