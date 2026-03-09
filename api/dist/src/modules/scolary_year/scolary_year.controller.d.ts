import { ScolaryYearService } from './scolary_year.service';
import { CreateScolaryYearDto } from './dto/create-scolary_year.dto';
import { UpdateScolaryYearDto } from './dto/update-scolary_year.dto';
export declare class ScolaryYearController {
    private readonly scolaryYearService;
    constructor(scolaryYearService: ScolaryYearService);
    create(createScolaryYearDto: CreateScolaryYearDto): import("../../generated/prisma/models").Prisma__ScolaryYearClient<{
        id: string;
        start_year: Date;
        end_year: Date;
        is_active: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }> | undefined;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        start_year: Date;
        end_year: Date;
        is_active: boolean;
    }[]> | undefined;
    findOne(id: string): import("../../generated/prisma/models").Prisma__ScolaryYearClient<{
        id: string;
        start_year: Date;
        end_year: Date;
        is_active: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }> | undefined;
    update(id: string, updateScolaryYearDto: UpdateScolaryYearDto): import("../../generated/prisma/models").Prisma__ScolaryYearClient<{
        id: string;
        start_year: Date;
        end_year: Date;
        is_active: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }> | undefined;
    remove(id: string): import("../../generated/prisma/models").Prisma__ScolaryYearClient<{
        id: string;
        start_year: Date;
        end_year: Date;
        is_active: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }> | undefined;
}
