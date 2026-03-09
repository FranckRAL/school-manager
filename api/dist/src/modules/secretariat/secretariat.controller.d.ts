import { StudentService } from '../student/student.service';
import { CreateStudentDto, UpdateStudentDto } from '../student/dto/student.dto';
import { ClasseService } from '../classe/classe.service';
import { CreateClasseDto, UpdateClasseDto } from '../classe/dto/classe.dto';
export declare class SecretariatController {
    private readonly studentService;
    private readonly classeService;
    constructor(studentService: StudentService, classeService: ClasseService);
    createStudent(createStudentDto: CreateStudentDto): Promise<{
        first_name: string;
        last_name1: string;
        gender: string;
        date_of_birth: Date;
        father_name: string | null;
        mother_name: string | null;
        tutor_phone_number: string | null;
        address: string | null;
        classeId: string;
        matricule: string;
    }>;
    findAllStudent(): Promise<({
        classe: {
            id: string;
            name: string;
            description: string | null;
            levelId: string;
            scolaryYearId: string;
        };
    } & {
        first_name: string;
        last_name1: string;
        gender: string;
        date_of_birth: Date;
        father_name: string | null;
        mother_name: string | null;
        tutor_phone_number: string | null;
        address: string | null;
        classeId: string;
        matricule: string;
    })[]>;
    findOneStudent(matricule: string): Promise<({
        classe: {
            id: string;
            name: string;
            description: string | null;
            levelId: string;
            scolaryYearId: string;
        };
    } & {
        first_name: string;
        last_name1: string;
        gender: string;
        date_of_birth: Date;
        father_name: string | null;
        mother_name: string | null;
        tutor_phone_number: string | null;
        address: string | null;
        classeId: string;
        matricule: string;
    }) | null>;
    updateStudent(matricule: string, updateStudentDto: UpdateStudentDto): Promise<{
        first_name: string;
        last_name1: string;
        gender: string;
        date_of_birth: Date;
        father_name: string | null;
        mother_name: string | null;
        tutor_phone_number: string | null;
        address: string | null;
        classeId: string;
        matricule: string;
    }>;
    removeStudent(matricule: string): Promise<{
        first_name: string;
        last_name1: string;
        gender: string;
        date_of_birth: Date;
        father_name: string | null;
        mother_name: string | null;
        tutor_phone_number: string | null;
        address: string | null;
        classeId: string;
        matricule: string;
    }>;
    promote(matricule: string, classeId: string): Promise<{
        first_name: string;
        last_name1: string;
        gender: string;
        date_of_birth: Date;
        father_name: string | null;
        mother_name: string | null;
        tutor_phone_number: string | null;
        address: string | null;
        classeId: string;
        matricule: string;
    }>;
    createClasse(createClasseDto: CreateClasseDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }>;
    findAllClasse(): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }[]>;
    findOneClasse(classeId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    } | null>;
    updateClasse(classeId: string, updateClasseDto: UpdateClasseDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }>;
    removeClasse(classeId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }>;
}
