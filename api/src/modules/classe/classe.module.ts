import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';

@Module({
  providers: [ClasseService],
  exports: [ClasseService],
})
export class ClasseModule {}
