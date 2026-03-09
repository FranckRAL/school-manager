"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = __importDefault(require("../../lib/db"));
let LevelService = class LevelService {
    async create(createLevelDto) {
        try {
            const level = await db_1.default.level.create({
                data: createLevelDto,
            });
            return level;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async findAll() {
        try {
            const levels = await db_1.default.level.findMany();
            return levels;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    findOne(id) {
        try {
            const level = db_1.default.level.findUnique({
                where: { id },
            });
            return level;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    update(id, updateLevelDto) {
        try {
            const level = db_1.default.level.update({
                where: { id },
                data: updateLevelDto,
            });
            return level;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    remove(id) {
        try {
            const level = db_1.default.level.delete({
                where: { id },
            });
            return level;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
exports.LevelService = LevelService;
exports.LevelService = LevelService = __decorate([
    (0, common_1.Injectable)()
], LevelService);
//# sourceMappingURL=level.service.js.map