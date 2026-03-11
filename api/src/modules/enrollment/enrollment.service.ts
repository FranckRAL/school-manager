import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import prisma from 'src/lib/db';

@Injectable()
export class EnrollmentService {
  async create(createEnrollmentDto: CreateEnrollmentDto) {
    try {
      const enrollment = await prisma.enrollment.create({
        data: { ...createEnrollmentDto },
      });
      return enrollment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const enrollments = await prisma.enrollment.findMany();
      return enrollments;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    const enrollment = await prisma.enrollment.findUnique({
      where: { id },
    });
    return enrollment;
  }

  async update(id: string, updateEnrollmentDto: UpdateEnrollmentDto) {
    try {
      const enrollment = await prisma.enrollment.update({
        where: { id },
        data: { ...updateEnrollmentDto },
      });
      return enrollment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      const deletedEnrollment = await prisma.enrollment.delete({
        where: { id },
      });
      return deletedEnrollment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async massEnrollment(createEnrollmentDto: CreateEnrollmentDto[]) {
    try {
      const enrollment = await prisma.enrollment.createMany({
        data: createEnrollmentDto,
      });
      return enrollment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async setEnrollmentStatus(
    id: string,
    status: 'ACTIVE' | 'DROPPED' | 'SUSPENDED',
  ) {
    try {
      const enrollment = prisma.enrollment.update({
        where: { id },
        data: { status: status },
      });
      return enrollment;
    } catch (error) {
      throw new Error(error);
    }
  }
}
