import { Injectable } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
import prisma from 'src/lib/db';

@Injectable()
export class StudentService {
  async create(createStudentDto: CreateStudentDto) {
    console.log(createStudentDto);
    const student = await prisma.student.create({
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
    const students = await prisma.student.findMany({
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

  async findOne(matricule: string) {
    const student = await prisma.student.findUnique({
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

  async update(matricule: string, updateStudentDto: UpdateStudentDto) {
    console.log(updateStudentDto);
    const student = await prisma.student.update({
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

  async remove(matricule: string) {
    const student = await prisma.student.delete({
      where: {
        matricule: matricule,
      },
    });
    return student;
  }

  async promote(matricule: string, classeId: string) {
    const student = await prisma.student.update({
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
}
