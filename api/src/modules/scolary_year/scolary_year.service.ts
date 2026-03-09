import { Injectable } from '@nestjs/common';
import { CreateScolaryYearDto } from './dto/create-scolary_year.dto';
import { UpdateScolaryYearDto } from './dto/update-scolary_year.dto';
import prisma from 'src/lib/db';

@Injectable()
export class ScolaryYearService {
  create(createScolaryYearDto: CreateScolaryYearDto) {
    try {
      const scolary_year = prisma.scolaryYear.create({
        data: { ...createScolaryYearDto },
      });
      return scolary_year;
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      const scolary_year = prisma.scolaryYear.findMany({
        orderBy: { id: 'desc' },
      });
      return scolary_year;
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: string) {
    try {
      const scolary_year = prisma.scolaryYear.findUnique({
        where: { id },
      });
      return scolary_year;
    } catch (error) {
      console.log(error);
    }
  }

  update(id: string, updateScolaryYearDto: UpdateScolaryYearDto) {
    try {
      const scolary_year = prisma.scolaryYear.update({
        where: { id },
        data: { ...updateScolaryYearDto },
      });
      return scolary_year;
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: string) {
    try {
      const scolary_year = prisma.scolaryYear.delete({
        where: { id },
      });
      return scolary_year;
    } catch (error) {
      console.log(error);
    }
  }
}
