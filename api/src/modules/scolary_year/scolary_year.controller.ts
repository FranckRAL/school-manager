import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScolaryYearService } from './scolary_year.service';
import { CreateScolaryYearDto } from './dto/create-scolary_year.dto';
import { UpdateScolaryYearDto } from './dto/update-scolary_year.dto';

@Controller('scolary-year')
export class ScolaryYearController {
  constructor(private readonly scolaryYearService: ScolaryYearService) {}

  @Post()
  create(@Body() createScolaryYearDto: CreateScolaryYearDto) {
    return this.scolaryYearService.create(createScolaryYearDto);
  }

  @Get()
  findAll() {
    return this.scolaryYearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scolaryYearService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateScolaryYearDto: UpdateScolaryYearDto,
  ) {
    return this.scolaryYearService.update(id, updateScolaryYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scolaryYearService.remove(id);
  }
}
