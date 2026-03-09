"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretariatModule = void 0;
const common_1 = require("@nestjs/common");
const secretariat_controller_1 = require("./secretariat.controller");
const student_module_1 = require("../student/student.module");
const classe_module_1 = require("../classe/classe.module");
let SecretariatModule = class SecretariatModule {
};
exports.SecretariatModule = SecretariatModule;
exports.SecretariatModule = SecretariatModule = __decorate([
    (0, common_1.Module)({
        imports: [student_module_1.StudentModule, classe_module_1.ClasseModule],
        controllers: [secretariat_controller_1.SecretariatController],
    })
], SecretariatModule);
//# sourceMappingURL=secretariat.module.js.map