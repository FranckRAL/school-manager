import { Injectable } from '@nestjs/common';
import prisma from 'src/lib/db';
import { CreateClasseDto, UpdateClasseDto } from './dto/classe.dto';

@Injectable()
export class ClasseService {
  async create(data: CreateClasseDto) {
    try {
      const classe = await prisma.classe.create({
        data: { ...data },
      });
      return classe;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const classes = await prisma.classe.findMany();
      return classes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      const classe = await prisma.classe.findUnique({
        where: {
          id,
        },
      });
      return classe;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: UpdateClasseDto) {
    try {
      const classe = await prisma.classe.update({
        where: {
          id,
        },
        data: { ...data },
      });
      return classe;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      const classe = await prisma.classe.delete({
        where: {
          id,
        },
      });
      return classe;
    } catch (error) {
      throw new Error(error);
    }
  }
}
