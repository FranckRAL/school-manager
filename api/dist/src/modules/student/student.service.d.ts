import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
export declare class StudentService {
    create(createStudentDto: CreateStudentDto): Promise<{
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
    findAll(): Promise<({
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
    findOne(matricule: string): Promise<({
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
    update(matricule: string, updateStudentDto: UpdateStudentDto): Promise<{
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
    remove(matricule: string): Promise<{
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
}
