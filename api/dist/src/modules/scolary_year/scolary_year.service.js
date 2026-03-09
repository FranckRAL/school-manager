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
exports.ScolaryYearService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = __importDefault(require("../../lib/db"));
let ScolaryYearService = class ScolaryYearService {
    create(createScolaryYearDto) {
        try {
            const scolary_year = db_1.default.scolaryYear.create({
                data: { ...createScolaryYearDto },
            });
            return scolary_year;
        }
        catch (error) {
            console.log(error);
        }
    }
    findAll() {
        try {
            const scolary_year = db_1.default.scolaryYear.findMany({
                orderBy: { id: 'desc' },
            });
            return scolary_year;
        }
        catch (error) {
            console.log(error);
        }
    }
    findOne(id) {
        try {
            const scolary_year = db_1.default.scolaryYear.findUnique({
                where: { id },
            });
            return scolary_year;
        }
        catch (error) {
            console.log(error);
        }
    }
    update(id, updateScolaryYearDto) {
        try {
            const scolary_year = db_1.default.scolaryYear.update({
                where: { id },
                data: { ...updateScolaryYearDto },
            });
            return scolary_year;
        }
        catch (error) {
            console.log(error);
        }
    }
    remove(id) {
        try {
            const scolary_year = db_1.default.scolaryYear.delete({
                where: { id },
            });
            return scolary_year;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ScolaryYearService = ScolaryYearService;
exports.ScolaryYearService = ScolaryYearService = __decorate([
    (0, common_1.Injectable)()
], ScolaryYearService);
//# sourceMappingURL=scolary_year.service.js.map