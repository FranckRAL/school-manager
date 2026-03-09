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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = __importDefault(require("../../lib/db"));
let StudentService = class StudentService {
    async create(createStudentDto) {
        console.log(createStudentDto);
        const student = await db_1.default.student.create({
            data: {
                first_name: createStudentDto.first_name,
                last_name1: createStudentDto.last_name1,
                gender: createStudentDto.gender,
                date_of_birth: createStudentDto.date_of_birth,
                father_name: createStudentDto.father_name,
                mother_name: createStudentDto.mother_name,
                tutor_phone_number: createStudentDto.tutor_phone_number,
                address: createStudentDto.address,
                classe: {
                    connect: {
                        id: createStudentDto.classeId,
                    },
                },
            },
        });
        return student;
    }
    async findAll() {
        const students = await db_1.default.student.findMany({
            include: {
                classe: true,
            },
            orderBy: {
                first_name: 'asc',
            },
        });
        console.log(students);
        return students;
    }
    async findOne(matricule) {
        const student = await db_1.default.student.findUnique({
            where: {
                matricule: matricule,
            },
            include: {
                classe: true,
            },
        });
        console.log(student);
        return student;
    }
    async update(matricule, updateStudentDto) {
        console.log(updateStudentDto);
        const student = await db_1.default.student.update({
            where: {
                matricule: matricule,
            },
            data: {
                first_name: updateStudentDto.first_name,
                last_name1: updateStudentDto.last_name1,
                gender: updateStudentDto.gender,
                date_of_birth: updateStudentDto.date_of_birth,
                father_name: updateStudentDto.father_name,
                mother_name: updateStudentDto.mother_name,
                tutor_phone_number: updateStudentDto.tutor_phone_number,
                address: updateStudentDto.address,
                classe: {
                    connect: {
                        id: updateStudentDto.classeId,
                    },
                },
            },
        });
        console.log(student);
        return student;
    }
    async remove(matricule) {
        const student = await db_1.default.student.delete({
            where: {
                matricule: matricule,
            },
        });
        return student;
    }
    async promote(matricule, classeId) {
        const student = await db_1.default.student.update({
            where: {
                matricule: matricule,
            },
            data: {
                classe: {
                    connect: {
                        id: classeId,
                    },
                },
            },
        });
        return student;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
//# sourceMappingURL=student.service.js.map