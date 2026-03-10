import { Injectable } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
import prisma from 'src/lib/db';

@Injectable()
export class StudentService {
  async create(createStudentDto: CreateStudentDto) {
    try {
      const student = await prisma.student.create({
        data: { ...createStudentDto },
      });
      return student;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const students = await prisma.student.findMany({
      orderBy: {
        first_name: 'asc',
      },
    });
    return students;
  }

  async findOne(id: string) {
    const student = await prisma.student.findUnique({
      where: {
        id,
      },
    });
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await prisma.student.update({
      where: {
        id,
      },
      data: { ...updateStudentDto },
    });
    return student;
  }

  async remove(id: string) {
    const student = await prisma.student.delete({
      where: {
        id,
      },
    });
    return student;
  }
}
