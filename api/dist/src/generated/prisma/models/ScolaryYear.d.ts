import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ScolaryYearModel = runtime.Types.Result.DefaultSelection<Prisma.$ScolaryYearPayload>;
export type AggregateScolaryYear = {
    _count: ScolaryYearCountAggregateOutputType | null;
    _min: ScolaryYearMinAggregateOutputType | null;
    _max: ScolaryYearMaxAggregateOutputType | null;
};
export type ScolaryYearMinAggregateOutputType = {
    id: string | null;
    start_year: Date | null;
    end_year: Date | null;
    is_active: boolean | null;
};
export type ScolaryYearMaxAggregateOutputType = {
    id: string | null;
    start_year: Date | null;
    end_year: Date | null;
    is_active: boolean | null;
};
export type ScolaryYearCountAggregateOutputType = {
    id: number;
    start_year: number;
    end_year: number;
    is_active: number;
    _all: number;
};
export type ScolaryYearMinAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
    is_active?: true;
};
export type ScolaryYearMaxAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
    is_active?: true;
};
export type ScolaryYearCountAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
    is_active?: true;
    _all?: true;
};
export type ScolaryYearAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScolaryYearWhereInput;
    orderBy?: Prisma.ScolaryYearOrderByWithRelationInput | Prisma.ScolaryYearOrderByWithRelationInput[];
    cursor?: Prisma.ScolaryYearWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScolaryYearCountAggregateInputType;
    _min?: ScolaryYearMinAggregateInputType;
    _max?: ScolaryYearMaxAggregateInputType;
};
export type GetScolaryYearAggregateType<T extends ScolaryYearAggregateArgs> = {
    [P in keyof T & keyof AggregateScolaryYear]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScolaryYear[P]> : Prisma.GetScalarType<T[P], AggregateScolaryYear[P]>;
};
export type ScolaryYearGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScolaryYearWhereInput;
    orderBy?: Prisma.ScolaryYearOrderByWithAggregationInput | Prisma.ScolaryYearOrderByWithAggregationInput[];
    by: Prisma.ScolaryYearScalarFieldEnum[] | Prisma.ScolaryYearScalarFieldEnum;
    having?: Prisma.ScolaryYearScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScolaryYearCountAggregateInputType | true;
    _min?: ScolaryYearMinAggregateInputType;
    _max?: ScolaryYearMaxAggregateInputType;
};
export type ScolaryYearGroupByOutputType = {
    id: string;
    start_year: Date;
    end_year: Date;
    is_active: boolean;
    _count: ScolaryYearCountAggregateOutputType | null;
    _min: ScolaryYearMinAggregateOutputType | null;
    _max: ScolaryYearMaxAggregateOutputType | null;
};
type GetScolaryYearGroupByPayload<T extends ScolaryYearGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScolaryYearGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScolaryYearGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScolaryYearGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScolaryYearGroupByOutputType[P]>;
}>>;
export type ScolaryYearWhereInput = {
    AND?: Prisma.ScolaryYearWhereInput | Prisma.ScolaryYearWhereInput[];
    OR?: Prisma.ScolaryYearWhereInput[];
    NOT?: Prisma.ScolaryYearWhereInput | Prisma.ScolaryYearWhereInput[];
    id?: Prisma.StringFilter<"ScolaryYear"> | string;
    start_year?: Prisma.DateTimeFilter<"ScolaryYear"> | Date | string;
    end_year?: Prisma.DateTimeFilter<"ScolaryYear"> | Date | string;
    is_active?: Prisma.BoolFilter<"ScolaryYear"> | boolean;
    classes?: Prisma.ClasseListRelationFilter;
};
export type ScolaryYearOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    classes?: Prisma.ClasseOrderByRelationAggregateInput;
};
export type ScolaryYearWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScolaryYearWhereInput | Prisma.ScolaryYearWhereInput[];
    OR?: Prisma.ScolaryYearWhereInput[];
    NOT?: Prisma.ScolaryYearWhereInput | Prisma.ScolaryYearWhereInput[];
    start_year?: Prisma.DateTimeFilter<"ScolaryYear"> | Date | string;
    end_year?: Prisma.DateTimeFilter<"ScolaryYear"> | Date | string;
    is_active?: Prisma.BoolFilter<"ScolaryYear"> | boolean;
    classes?: Prisma.ClasseListRelationFilter;
}, "id">;
export type ScolaryYearOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    _count?: Prisma.ScolaryYearCountOrderByAggregateInput;
    _max?: Prisma.ScolaryYearMaxOrderByAggregateInput;
    _min?: Prisma.ScolaryYearMinOrderByAggregateInput;
};
export type ScolaryYearScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScolaryYearScalarWhereWithAggregatesInput | Prisma.ScolaryYearScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScolaryYearScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScolaryYearScalarWhereWithAggregatesInput | Prisma.ScolaryYearScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ScolaryYear"> | string;
    start_year?: Prisma.DateTimeWithAggregatesFilter<"ScolaryYear"> | Date | string;
    end_year?: Prisma.DateTimeWithAggregatesFilter<"ScolaryYear"> | Date | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"ScolaryYear"> | boolean;
};
export type ScolaryYearCreateInput = {
    id?: string;
    start_year: Date | string;
    end_year: Date | string;
    is_active?: boolean;
    classes?: Prisma.ClasseCreateNestedManyWithoutScolaryYearInput;
};
export type ScolaryYearUncheckedCreateInput = {
    id?: string;
    start_year: Date | string;
    end_year: Date | string;
    is_active?: boolean;
    classes?: Prisma.ClasseUncheckedCreateNestedManyWithoutScolaryYearInput;
};
export type ScolaryYearUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    classes?: Prisma.ClasseUpdateManyWithoutScolaryYearNestedInput;
};
export type ScolaryYearUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    classes?: Prisma.ClasseUncheckedUpdateManyWithoutScolaryYearNestedInput;
};
export type ScolaryYearCreateManyInput = {
    id?: string;
    start_year: Date | string;
    end_year: Date | string;
    is_active?: boolean;
};
export type ScolaryYearUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ScolaryYearUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ScolaryYearCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type ScolaryYearMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type ScolaryYearMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type ScolaryYearScalarRelationFilter = {
    is?: Prisma.ScolaryYearWhereInput;
    isNot?: Prisma.ScolaryYearWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ScolaryYearCreateNestedOneWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.ScolaryYearCreateWithoutClassesInput, Prisma.ScolaryYearUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.ScolaryYearCreateOrConnectWithoutClassesInput;
    connect?: Prisma.ScolaryYearWhereUniqueInput;
};
export type ScolaryYearUpdateOneRequiredWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.ScolaryYearCreateWithoutClassesInput, Prisma.ScolaryYearUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.ScolaryYearCreateOrConnectWithoutClassesInput;
    upsert?: Prisma.ScolaryYearUpsertWithoutClassesInput;
    connect?: Prisma.ScolaryYearWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScolaryYearUpdateToOneWithWhereWithoutClassesInput, Prisma.ScolaryYearUpdateWithoutClassesInput>, Prisma.ScolaryYearUncheckedUpdateWithoutClassesInput>;
};
export type ScolaryYearCreateWithoutClassesInput = {
    id?: string;
    start_year: Date | string;
    end_year: Date | string;
    is_active?: boolean;
};
export type ScolaryYearUncheckedCreateWithoutClassesInput = {
    id?: string;
    start_year: Date | string;
    end_year: Date | string;
    is_active?: boolean;
};
export type ScolaryYearCreateOrConnectWithoutClassesInput = {
    where: Prisma.ScolaryYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScolaryYearCreateWithoutClassesInput, Prisma.ScolaryYearUncheckedCreateWithoutClassesInput>;
};
export type ScolaryYearUpsertWithoutClassesInput = {
    update: Prisma.XOR<Prisma.ScolaryYearUpdateWithoutClassesInput, Prisma.ScolaryYearUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.ScolaryYearCreateWithoutClassesInput, Prisma.ScolaryYearUncheckedCreateWithoutClassesInput>;
    where?: Prisma.ScolaryYearWhereInput;
};
export type ScolaryYearUpdateToOneWithWhereWithoutClassesInput = {
    where?: Prisma.ScolaryYearWhereInput;
    data: Prisma.XOR<Prisma.ScolaryYearUpdateWithoutClassesInput, Prisma.ScolaryYearUncheckedUpdateWithoutClassesInput>;
};
export type ScolaryYearUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ScolaryYearUncheckedUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_year?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ScolaryYearCountOutputType = {
    classes: number;
};
export type ScolaryYearCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | ScolaryYearCountOutputTypeCountClassesArgs;
};
export type ScolaryYearCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearCountOutputTypeSelect<ExtArgs> | null;
};
export type ScolaryYearCountOutputTypeCountClassesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
};
export type ScolaryYearSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    is_active?: boolean;
    classes?: boolean | Prisma.ScolaryYear$classesArgs<ExtArgs>;
    _count?: boolean | Prisma.ScolaryYearCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scolaryYear"]>;
export type ScolaryYearSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["scolaryYear"]>;
export type ScolaryYearSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["scolaryYear"]>;
export type ScolaryYearSelectScalar = {
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    is_active?: boolean;
};
export type ScolaryYearOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "start_year" | "end_year" | "is_active", ExtArgs["result"]["scolaryYear"]>;
export type ScolaryYearInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.ScolaryYear$classesArgs<ExtArgs>;
    _count?: boolean | Prisma.ScolaryYearCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ScolaryYearIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ScolaryYearIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ScolaryYearPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScolaryYear";
    objects: {
        classes: Prisma.$ClassePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        start_year: Date;
        end_year: Date;
        is_active: boolean;
    }, ExtArgs["result"]["scolaryYear"]>;
    composites: {};
};
export type ScolaryYearGetPayload<S extends boolean | null | undefined | ScolaryYearDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload, S>;
export type ScolaryYearCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScolaryYearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScolaryYearCountAggregateInputType | true;
};
export interface ScolaryYearDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScolaryYear'];
        meta: {
            name: 'ScolaryYear';
        };
    };
    findUnique<T extends ScolaryYearFindUniqueArgs>(args: Prisma.SelectSubset<T, ScolaryYearFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScolaryYearFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScolaryYearFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScolaryYearFindFirstArgs>(args?: Prisma.SelectSubset<T, ScolaryYearFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScolaryYearFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScolaryYearFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScolaryYearFindManyArgs>(args?: Prisma.SelectSubset<T, ScolaryYearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScolaryYearCreateArgs>(args: Prisma.SelectSubset<T, ScolaryYearCreateArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScolaryYearCreateManyArgs>(args?: Prisma.SelectSubset<T, ScolaryYearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScolaryYearCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScolaryYearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScolaryYearDeleteArgs>(args: Prisma.SelectSubset<T, ScolaryYearDeleteArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScolaryYearUpdateArgs>(args: Prisma.SelectSubset<T, ScolaryYearUpdateArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScolaryYearDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScolaryYearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScolaryYearUpdateManyArgs>(args: Prisma.SelectSubset<T, ScolaryYearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScolaryYearUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScolaryYearUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScolaryYearUpsertArgs>(args: Prisma.SelectSubset<T, ScolaryYearUpsertArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScolaryYearCountArgs>(args?: Prisma.Subset<T, ScolaryYearCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScolaryYearCountAggregateOutputType> : number>;
    aggregate<T extends ScolaryYearAggregateArgs>(args: Prisma.Subset<T, ScolaryYearAggregateArgs>): Prisma.PrismaPromise<GetScolaryYearAggregateType<T>>;
    groupBy<T extends ScolaryYearGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScolaryYearGroupByArgs['orderBy'];
    } : {
        orderBy?: ScolaryYearGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScolaryYearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScolaryYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScolaryYearFieldRefs;
}
export interface Prisma__ScolaryYearClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classes<T extends Prisma.ScolaryYear$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScolaryYear$classesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScolaryYearFieldRefs {
    readonly id: Prisma.FieldRef<"ScolaryYear", 'String'>;
    readonly start_year: Prisma.FieldRef<"ScolaryYear", 'DateTime'>;
    readonly end_year: Prisma.FieldRef<"ScolaryYear", 'DateTime'>;
    readonly is_active: Prisma.FieldRef<"ScolaryYear", 'Boolean'>;
}
export type ScolaryYearFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    where: Prisma.ScolaryYearWhereUniqueInput;
};
export type ScolaryYearFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    where: Prisma.ScolaryYearWhereUniqueInput;
};
export type ScolaryYearFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    where?: Prisma.ScolaryYearWhereInput;
    orderBy?: Prisma.ScolaryYearOrderByWithRelationInput | Prisma.ScolaryYearOrderByWithRelationInput[];
    cursor?: Prisma.ScolaryYearWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScolaryYearScalarFieldEnum | Prisma.ScolaryYearScalarFieldEnum[];
};
export type ScolaryYearFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    where?: Prisma.ScolaryYearWhereInput;
    orderBy?: Prisma.ScolaryYearOrderByWithRelationInput | Prisma.ScolaryYearOrderByWithRelationInput[];
    cursor?: Prisma.ScolaryYearWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScolaryYearScalarFieldEnum | Prisma.ScolaryYearScalarFieldEnum[];
};
export type ScolaryYearFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    where?: Prisma.ScolaryYearWhereInput;
    orderBy?: Prisma.ScolaryYearOrderByWithRelationInput | Prisma.ScolaryYearOrderByWithRelationInput[];
    cursor?: Prisma.ScolaryYearWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScolaryYearScalarFieldEnum | Prisma.ScolaryYearScalarFieldEnum[];
};
export type ScolaryYearCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScolaryYearCreateInput, Prisma.ScolaryYearUncheckedCreateInput>;
};
export type ScolaryYearCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScolaryYearCreateManyInput | Prisma.ScolaryYearCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScolaryYearCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    data: Prisma.ScolaryYearCreateManyInput | Prisma.ScolaryYearCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScolaryYearUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScolaryYearUpdateInput, Prisma.ScolaryYearUncheckedUpdateInput>;
    where: Prisma.ScolaryYearWhereUniqueInput;
};
export type ScolaryYearUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScolaryYearUpdateManyMutationInput, Prisma.ScolaryYearUncheckedUpdateManyInput>;
    where?: Prisma.ScolaryYearWhereInput;
    limit?: number;
};
export type ScolaryYearUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScolaryYearUpdateManyMutationInput, Prisma.ScolaryYearUncheckedUpdateManyInput>;
    where?: Prisma.ScolaryYearWhereInput;
    limit?: number;
};
export type ScolaryYearUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    where: Prisma.ScolaryYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScolaryYearCreateInput, Prisma.ScolaryYearUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScolaryYearUpdateInput, Prisma.ScolaryYearUncheckedUpdateInput>;
};
export type ScolaryYearDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
    where: Prisma.ScolaryYearWhereUniqueInput;
};
export type ScolaryYearDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScolaryYearWhereInput;
    limit?: number;
};
export type ScolaryYear$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithRelationInput | Prisma.ClasseOrderByWithRelationInput[];
    cursor?: Prisma.ClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClasseScalarFieldEnum | Prisma.ClasseScalarFieldEnum[];
};
export type ScolaryYearDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScolaryYearSelect<ExtArgs> | null;
    omit?: Prisma.ScolaryYearOmit<ExtArgs> | null;
    include?: Prisma.ScolaryYearInclude<ExtArgs> | null;
};
export {};
