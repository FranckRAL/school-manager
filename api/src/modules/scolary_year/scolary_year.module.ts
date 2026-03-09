import { Module } from '@nestjs/common';
import { ScolaryYearService } from './scolary_year.service';
import { ScolaryYearController } from './scolary_year.controller';

@Module({
  controllers: [ScolaryYearController],
  providers: [ScolaryYearService],
})
export class ScolaryYearModule {}
