import { Module } from '@nestjs/common';
import { SecretariatController } from './secretariat.controller';
import { StudentModule } from '../student/student.module';
import { ClasseModule } from '../classe/classe.module';

@Module({
  imports: [StudentModule, ClasseModule],
  controllers: [SecretariatController],
})
export class SecretariatModule {}
