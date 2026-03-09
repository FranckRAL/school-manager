import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
export declare class LevelService {
    create(createLevelDto: CreateLevelDto): Promise<{
        id: string;
        name: string;
        category: import("../../generated/prisma/enums").LevelCategory;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        category: import("../../generated/prisma/enums").LevelCategory;
    }[]>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__LevelClient<{
        id: string;
        name: string;
        category: import("../../generated/prisma/enums").LevelCategory;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updateLevelDto: UpdateLevelDto): import("../../generated/prisma/models").Prisma__LevelClient<{
        id: string;
        name: string;
        category: import("../../generated/prisma/enums").LevelCategory;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__LevelClient<{
        id: string;
        name: string;
        category: import("../../generated/prisma/enums").LevelCategory;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
