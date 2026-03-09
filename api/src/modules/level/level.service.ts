import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import prisma from 'src/lib/db';

@Injectable()
export class LevelService {
  async create(createLevelDto: CreateLevelDto) {
    try {
      const level = await prisma.level.create({
        data: createLevelDto,
      });
      return level;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll() {
    try {
      const levels = await prisma.level.findMany();
      return levels;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  findOne(id: string) {
    try {
      const level = prisma.level.findUnique({
        where: { id },
      });
      return level;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  update(id: string, updateLevelDto: UpdateLevelDto) {
    try {
      const level = prisma.level.update({
        where: { id },
        data: updateLevelDto,
      });
      return level;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  remove(id: string) {
    try {
      const level = prisma.level.delete({
        where: { id },
      });
      return level;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
