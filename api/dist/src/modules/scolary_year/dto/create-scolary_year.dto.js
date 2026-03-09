"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateScolaryYearDto = exports.createScolaryYearSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = __importDefault(require("zod"));
exports.createScolaryYearSchema = zod_1.default
    .object({
    start_year: zod_1.default.date(),
    end_year: zod_1.default.date(),
    is_active: zod_1.default.boolean().default(false),
})
    .required();
class CreateScolaryYearDto extends (0, nestjs_zod_1.createZodDto)(exports.createScolaryYearSchema) {
}
exports.CreateScolaryYearDto = CreateScolaryYearDto;
//# sourceMappingURL=create-scolary_year.dto.js.map