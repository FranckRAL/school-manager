import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { StudentService } from '../student/student.service';
import { CreateStudentDto, UpdateStudentDto } from '../student/dto/student.dto';
import { ClasseService } from '../classe/classe.service';
import { CreateClasseDto, UpdateClasseDto } from '../classe/dto/classe.dto';

@Controller('secretariat')
export class SecretariatController {
  constructor(
    private readonly studentService: StudentService,
    private readonly classeService: ClasseService,
  ) {}

  /**
   * Create new student
   * @param createStudentDto
   * @returns new Student
   */
  @Post('students')
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  /**
   * Retrieve all student
   * @returns All students
   */
  @Get('students')
  findAllStudent() {
    return this.studentService.findAll();
  }

  /**
   * Retrieve one student by his matricule
   * @param matricule
   * @returns Student
   */
  @Get('students/:matricule')
  findOneStudent(@Param('matricule') matricule: string) {
    return this.studentService.findOne(matricule);
  }

  /**
   * Update some information relative to a student
   * @param matricule
   * @param updateStudentDto
   * @returns updated student info
   */
  @Patch('students/:matricule')
  updateStudent(
    @Param('matricule') matricule: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(matricule, updateStudentDto);
  }

  /**
   * Delete a student
   * @param matricule
   * @returns deleted student
   */
  @Delete('students/:matricule')
  removeStudent(@Param('matricule') matricule: string) {
    return this.studentService.remove(matricule);
  }

  /**
   * Promote the student's classe
   * @param matricule
   * @param classeId
   * @returns the promoted student
   */
  @Patch('students/:matricule/promote')
  promote(
    @Param('matricule') matricule: string,
    @Body('classeId') classeId: string,
  ) {
    return this.studentService.promote(matricule, classeId);
  }

  /**
   * Create new Classe
   * @param createClasseDto
   * @returns new classe
   */
  @Post('classes')
  createClasse(@Body() createClasseDto: CreateClasseDto) {
    return this.classeService.create(createClasseDto);
  }

  /**
   * Retrieve all classe
   * @returns All classes
   */
  @Get('classes')
  findAllClasse() {
    return this.classeService.findAll();
  }

  /**
   * Retrieve one classe by his matricule
   * @param matricule
   * @returns classe
   */
  @Get('classes/:classeId')
  findOneClasse(@Param('matricule') classeId: string) {
    return this.classeService.findOne(classeId);
  }

  /**
   * Update some information relative to a classe
   * @param matricule
   * @param updateclasseDto
   * @returns updated classe info
   */
  @Patch('classes/:classeId')
  updateClasse(
    @Param('classeId') classeId: string,
    @Body() updateClasseDto: UpdateClasseDto,
  ) {
    return this.classeService.update(classeId, updateClasseDto);
  }

  /**
   * Delete a classe
   * @param matricule
   * @returns deleted classe
   */
  @Delete('classes/:classeId')
  removeClasse(@Param('classeId') classeId: string) {
    return this.classeService.remove(classeId);
  }
}
