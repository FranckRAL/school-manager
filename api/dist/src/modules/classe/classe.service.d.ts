import { CreateClasseDto, UpdateClasseDto } from './dto/classe.dto';
export declare class ClasseService {
    create(data: CreateClasseDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    } | null>;
    update(id: string, data: UpdateClasseDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }>;
}
