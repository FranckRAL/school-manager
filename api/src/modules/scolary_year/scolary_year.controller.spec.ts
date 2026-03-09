import { Test, TestingModule } from '@nestjs/testing';
import { ScolaryYearController } from './scolary_year.controller';
import { ScolaryYearService } from './scolary_year.service';

describe('ScolaryYearController', () => {
  let controller: ScolaryYearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScolaryYearController],
      providers: [ScolaryYearService],
    }).compile();

    controller = module.get<ScolaryYearController>(ScolaryYearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
