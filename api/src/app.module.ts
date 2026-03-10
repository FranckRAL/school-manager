import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretariatModule } from './modules/secretariat/secretariat.module';
import { FinanceModule } from './modules/finance/finance.module';
import { DirectorModule } from './modules/director/director.module';
import { ProfessorsModule } from './modules/professors/professors.module';
import { ClasseModule } from './modules/classe/classe.module';
import { LevelModule } from './modules/level/level.module';
import { ScolaryYearModule } from './modules/scolary_year/scolary_year.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';

@Module({
  imports: [
    SecretariatModule,
    FinanceModule,
    DirectorModule,
    ProfessorsModule,
    ClasseModule,
    LevelModule,
    ScolaryYearModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
