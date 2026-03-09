import { Test, TestingModule } from '@nestjs/testing';
import { ScolaryYearService } from './scolary_year.service';

describe('ScolaryYearService', () => {
  let service: ScolaryYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScolaryYearService],
    }).compile();

    service = module.get<ScolaryYearService>(ScolaryYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
