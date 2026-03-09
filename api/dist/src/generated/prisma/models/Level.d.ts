import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type LevelModel = runtime.Types.Result.DefaultSelection<Prisma.$LevelPayload>;
export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null;
    _min: LevelMinAggregateOutputType | null;
    _max: LevelMaxAggregateOutputType | null;
};
export type LevelMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    category: $Enums.LevelCategory | null;
};
export type LevelMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    category: $Enums.LevelCategory | null;
};
export type LevelCountAggregateOutputType = {
    id: number;
    name: number;
    category: number;
    _all: number;
};
export type LevelMinAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
};
export type LevelMaxAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
};
export type LevelCountAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    _all?: true;
};
export type LevelAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LevelCountAggregateInputType;
    _min?: LevelMinAggregateInputType;
    _max?: LevelMaxAggregateInputType;
};
export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
    [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLevel[P]> : Prisma.GetScalarType<T[P], AggregateLevel[P]>;
};
export type LevelGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithAggregationInput | Prisma.LevelOrderByWithAggregationInput[];
    by: Prisma.LevelScalarFieldEnum[] | Prisma.LevelScalarFieldEnum;
    having?: Prisma.LevelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LevelCountAggregateInputType | true;
    _min?: LevelMinAggregateInputType;
    _max?: LevelMaxAggregateInputType;
};
export type LevelGroupByOutputType = {
    id: string;
    name: string;
    category: $Enums.LevelCategory;
    _count: LevelCountAggregateOutputType | null;
    _min: LevelMinAggregateOutputType | null;
    _max: LevelMaxAggregateOutputType | null;
};
type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LevelGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LevelGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LevelGroupByOutputType[P]>;
}>>;
export type LevelWhereInput = {
    AND?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    OR?: Prisma.LevelWhereInput[];
    NOT?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    id?: Prisma.StringFilter<"Level"> | string;
    name?: Prisma.StringFilter<"Level"> | string;
    category?: Prisma.EnumLevelCategoryFilter<"Level"> | $Enums.LevelCategory;
    classes?: Prisma.ClasseListRelationFilter;
};
export type LevelOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    classes?: Prisma.ClasseOrderByRelationAggregateInput;
};
export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    OR?: Prisma.LevelWhereInput[];
    NOT?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    name?: Prisma.StringFilter<"Level"> | string;
    category?: Prisma.EnumLevelCategoryFilter<"Level"> | $Enums.LevelCategory;
    classes?: Prisma.ClasseListRelationFilter;
}, "id">;
export type LevelOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    _count?: Prisma.LevelCountOrderByAggregateInput;
    _max?: Prisma.LevelMaxOrderByAggregateInput;
    _min?: Prisma.LevelMinOrderByAggregateInput;
};
export type LevelScalarWhereWithAggregatesInput = {
    AND?: Prisma.LevelScalarWhereWithAggregatesInput | Prisma.LevelScalarWhereWithAggregatesInput[];
    OR?: Prisma.LevelScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LevelScalarWhereWithAggregatesInput | Prisma.LevelScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Level"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Level"> | string;
    category?: Prisma.EnumLevelCategoryWithAggregatesFilter<"Level"> | $Enums.LevelCategory;
};
export type LevelCreateInput = {
    id?: string;
    name: string;
    category: $Enums.LevelCategory;
    classes?: Prisma.ClasseCreateNestedManyWithoutLevelInput;
};
export type LevelUncheckedCreateInput = {
    id?: string;
    name: string;
    category: $Enums.LevelCategory;
    classes?: Prisma.ClasseUncheckedCreateNestedManyWithoutLevelInput;
};
export type LevelUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumLevelCategoryFieldUpdateOperationsInput | $Enums.LevelCategory;
    classes?: Prisma.ClasseUpdateManyWithoutLevelNestedInput;
};
export type LevelUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumLevelCategoryFieldUpdateOperationsInput | $Enums.LevelCategory;
    classes?: Prisma.ClasseUncheckedUpdateManyWithoutLevelNestedInput;
};
export type LevelCreateManyInput = {
    id?: string;
    name: string;
    category: $Enums.LevelCategory;
};
export type LevelUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumLevelCategoryFieldUpdateOperationsInput | $Enums.LevelCategory;
};
export type LevelUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumLevelCategoryFieldUpdateOperationsInput | $Enums.LevelCategory;
};
export type LevelCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
};
export type LevelMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
};
export type LevelMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
};
export type LevelScalarRelationFilter = {
    is?: Prisma.LevelWhereInput;
    isNot?: Prisma.LevelWhereInput;
};
export type EnumLevelCategoryFieldUpdateOperationsInput = {
    set?: $Enums.LevelCategory;
};
export type LevelCreateNestedOneWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.LevelCreateWithoutClassesInput, Prisma.LevelUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.LevelCreateOrConnectWithoutClassesInput;
    connect?: Prisma.LevelWhereUniqueInput;
};
export type LevelUpdateOneRequiredWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.LevelCreateWithoutClassesInput, Prisma.LevelUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.LevelCreateOrConnectWithoutClassesInput;
    upsert?: Prisma.LevelUpsertWithoutClassesInput;
    connect?: Prisma.LevelWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LevelUpdateToOneWithWhereWithoutClassesInput, Prisma.LevelUpdateWithoutClassesInput>, Prisma.LevelUncheckedUpdateWithoutClassesInput>;
};
export type LevelCreateWithoutClassesInput = {
    id?: string;
    name: string;
    category: $Enums.LevelCategory;
};
export type LevelUncheckedCreateWithoutClassesInput = {
    id?: string;
    name: string;
    category: $Enums.LevelCategory;
};
export type LevelCreateOrConnectWithoutClassesInput = {
    where: Prisma.LevelWhereUniqueInput;
    create: Prisma.XOR<Prisma.LevelCreateWithoutClassesInput, Prisma.LevelUncheckedCreateWithoutClassesInput>;
};
export type LevelUpsertWithoutClassesInput = {
    update: Prisma.XOR<Prisma.LevelUpdateWithoutClassesInput, Prisma.LevelUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.LevelCreateWithoutClassesInput, Prisma.LevelUncheckedCreateWithoutClassesInput>;
    where?: Prisma.LevelWhereInput;
};
export type LevelUpdateToOneWithWhereWithoutClassesInput = {
    where?: Prisma.LevelWhereInput;
    data: Prisma.XOR<Prisma.LevelUpdateWithoutClassesInput, Prisma.LevelUncheckedUpdateWithoutClassesInput>;
};
export type LevelUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumLevelCategoryFieldUpdateOperationsInput | $Enums.LevelCategory;
};
export type LevelUncheckedUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumLevelCategoryFieldUpdateOperationsInput | $Enums.LevelCategory;
};
export type LevelCountOutputType = {
    classes: number;
};
export type LevelCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | LevelCountOutputTypeCountClassesArgs;
};
export type LevelCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelCountOutputTypeSelect<ExtArgs> | null;
};
export type LevelCountOutputTypeCountClassesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
};
export type LevelSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    category?: boolean;
    classes?: boolean | Prisma.Level$classesArgs<ExtArgs>;
    _count?: boolean | Prisma.LevelCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["level"]>;
export type LevelSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    category?: boolean;
}, ExtArgs["result"]["level"]>;
export type LevelSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    category?: boolean;
}, ExtArgs["result"]["level"]>;
export type LevelSelectScalar = {
    id?: boolean;
    name?: boolean;
    category?: boolean;
};
export type LevelOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["level"]>;
export type LevelInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.Level$classesArgs<ExtArgs>;
    _count?: boolean | Prisma.LevelCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LevelIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LevelIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LevelPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Level";
    objects: {
        classes: Prisma.$ClassePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        category: $Enums.LevelCategory;
    }, ExtArgs["result"]["level"]>;
    composites: {};
};
export type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LevelPayload, S>;
export type LevelCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LevelCountAggregateInputType | true;
};
export interface LevelDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Level'];
        meta: {
            name: 'Level';
        };
    };
    findUnique<T extends LevelFindUniqueArgs>(args: Prisma.SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LevelFindFirstArgs>(args?: Prisma.SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LevelFindManyArgs>(args?: Prisma.SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LevelCreateArgs>(args: Prisma.SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LevelCreateManyArgs>(args?: Prisma.SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LevelDeleteArgs>(args: Prisma.SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LevelUpdateArgs>(args: Prisma.SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LevelDeleteManyArgs>(args?: Prisma.SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LevelUpdateManyArgs>(args: Prisma.SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LevelUpsertArgs>(args: Prisma.SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LevelCountArgs>(args?: Prisma.Subset<T, LevelCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LevelCountAggregateOutputType> : number>;
    aggregate<T extends LevelAggregateArgs>(args: Prisma.Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>;
    groupBy<T extends LevelGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LevelGroupByArgs['orderBy'];
    } : {
        orderBy?: LevelGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LevelFieldRefs;
}
export interface Prisma__LevelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classes<T extends Prisma.Level$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Level$classesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LevelFieldRefs {
    readonly id: Prisma.FieldRef<"Level", 'String'>;
    readonly name: Prisma.FieldRef<"Level", 'String'>;
    readonly category: Prisma.FieldRef<"Level", 'LevelCategory'>;
}
export type LevelFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LevelScalarFieldEnum | Prisma.LevelScalarFieldEnum[];
};
export type LevelFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LevelScalarFieldEnum | Prisma.LevelScalarFieldEnum[];
};
export type LevelFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LevelScalarFieldEnum | Prisma.LevelScalarFieldEnum[];
};
export type LevelCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LevelCreateInput, Prisma.LevelUncheckedCreateInput>;
};
export type LevelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LevelCreateManyInput | Prisma.LevelCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LevelCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    data: Prisma.LevelCreateManyInput | Prisma.LevelCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LevelUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LevelUpdateInput, Prisma.LevelUncheckedUpdateInput>;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LevelUpdateManyMutationInput, Prisma.LevelUncheckedUpdateManyInput>;
    where?: Prisma.LevelWhereInput;
    limit?: number;
};
export type LevelUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LevelUpdateManyMutationInput, Prisma.LevelUncheckedUpdateManyInput>;
    where?: Prisma.LevelWhereInput;
    limit?: number;
};
export type LevelUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
    create: Prisma.XOR<Prisma.LevelCreateInput, Prisma.LevelUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LevelUpdateInput, Prisma.LevelUncheckedUpdateInput>;
};
export type LevelDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LevelWhereInput;
    limit?: number;
};
export type Level$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LevelDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
};
export {};
