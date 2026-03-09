"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const secretariat_module_1 = require("./modules/secretariat/secretariat.module");
const finance_module_1 = require("./modules/finance/finance.module");
const director_module_1 = require("./modules/director/director.module");
const professors_module_1 = require("./modules/professors/professors.module");
const classe_module_1 = require("./modules/classe/classe.module");
const level_module_1 = require("./modules/level/level.module");
const scolary_year_module_1 = require("./modules/scolary_year/scolary_year.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [secretariat_module_1.SecretariatModule, finance_module_1.FinanceModule, director_module_1.DirectorModule, professors_module_1.ProfessorsModule, classe_module_1.ClasseModule, level_module_1.LevelModule, scolary_year_module_1.ScolaryYearModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map