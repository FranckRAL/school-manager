import { PartialType } from '@nestjs/mapped-types';
import { CreateScolaryYearDto } from './create-scolary_year.dto';

export class UpdateScolaryYearDto extends PartialType(CreateScolaryYearDto) {}
