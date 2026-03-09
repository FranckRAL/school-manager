"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretariatController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("../student/student.service");
const student_dto_1 = require("../student/dto/student.dto");
const classe_service_1 = require("../classe/classe.service");
const classe_dto_1 = require("../classe/dto/classe.dto");
let SecretariatController = class SecretariatController {
    studentService;
    classeService;
    constructor(studentService, classeService) {
        this.studentService = studentService;
        this.classeService = classeService;
    }
    createStudent(createStudentDto) {
        return this.studentService.create(createStudentDto);
    }
    findAllStudent() {
        return this.studentService.findAll();
    }
    findOneStudent(matricule) {
        return this.studentService.findOne(matricule);
    }
    updateStudent(matricule, updateStudentDto) {
        return this.studentService.update(matricule, updateStudentDto);
    }
    removeStudent(matricule) {
        return this.studentService.remove(matricule);
    }
    promote(matricule, classeId) {
        return this.studentService.promote(matricule, classeId);
    }
    createClasse(createClasseDto) {
        return this.classeService.create(createClasseDto);
    }
    findAllClasse() {
        return this.classeService.findAll();
    }
    findOneClasse(classeId) {
        return this.classeService.findOne(classeId);
    }
    updateClasse(classeId, updateClasseDto) {
        return this.classeService.update(classeId, updateClasseDto);
    }
    removeClasse(classeId) {
        return this.classeService.remove(classeId);
    }
};
exports.SecretariatController = SecretariatController;
__decorate([
    (0, common_1.Post)('students'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Get)('students'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "findAllStudent", null);
__decorate([
    (0, common_1.Get)('students/:matricule'),
    __param(0, (0, common_1.Param)('matricule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "findOneStudent", null);
__decorate([
    (0, common_1.Patch)('students/:matricule'),
    __param(0, (0, common_1.Param)('matricule')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Delete)('students/:matricule'),
    __param(0, (0, common_1.Param)('matricule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "removeStudent", null);
__decorate([
    (0, common_1.Patch)('students/:matricule/promote'),
    __param(0, (0, common_1.Param)('matricule')),
    __param(1, (0, common_1.Body)('classeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "promote", null);
__decorate([
    (0, common_1.Post)('classes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classe_dto_1.CreateClasseDto]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "createClasse", null);
__decorate([
    (0, common_1.Get)('classes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "findAllClasse", null);
__decorate([
    (0, common_1.Get)('classes/:classeId'),
    __param(0, (0, common_1.Param)('matricule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "findOneClasse", null);
__decorate([
    (0, common_1.Patch)('classes/:classeId'),
    __param(0, (0, common_1.Param)('classeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, classe_dto_1.UpdateClasseDto]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "updateClasse", null);
__decorate([
    (0, common_1.Delete)('classes/:classeId'),
    __param(0, (0, common_1.Param)('classeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SecretariatController.prototype, "removeClasse", null);
exports.SecretariatController = SecretariatController = __decorate([
    (0, common_1.Controller)('secretariat'),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        classe_service_1.ClasseService])
], SecretariatController);
//# sourceMappingURL=secretariat.controller.js.map