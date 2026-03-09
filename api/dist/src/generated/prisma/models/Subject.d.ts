import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SubjectModel = runtime.Types.Result.DefaultSelection<Prisma.$SubjectPayload>;
export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type SubjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type SubjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type SubjectCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type SubjectMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type SubjectMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type SubjectCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type SubjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubjectCountAggregateInputType;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubject[P]> : Prisma.GetScalarType<T[P], AggregateSubject[P]>;
};
export type SubjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithAggregationInput | Prisma.SubjectOrderByWithAggregationInput[];
    by: Prisma.SubjectScalarFieldEnum[] | Prisma.SubjectScalarFieldEnum;
    having?: Prisma.SubjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type SubjectGroupByOutputType = {
    id: string;
    name: string;
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]>;
}>>;
export type SubjectWhereInput = {
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    id?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    teachings?: Prisma.TeachListRelationFilter;
};
export type SubjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    teachings?: Prisma.TeachOrderByRelationAggregateInput;
};
export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    name?: Prisma.StringFilter<"Subject"> | string;
    teachings?: Prisma.TeachListRelationFilter;
}, "id">;
export type SubjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.SubjectCountOrderByAggregateInput;
    _max?: Prisma.SubjectMaxOrderByAggregateInput;
    _min?: Prisma.SubjectMinOrderByAggregateInput;
};
export type SubjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
};
export type SubjectCreateInput = {
    id?: string;
    name: string;
    teachings?: Prisma.TeachCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateInput = {
    id?: string;
    name: string;
    teachings?: Prisma.TeachUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teachings?: Prisma.TeachUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teachings?: Prisma.TeachUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateManyInput = {
    id?: string;
    name: string;
};
export type SubjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SubjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SubjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SubjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SubjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SubjectScalarRelationFilter = {
    is?: Prisma.SubjectWhereInput;
    isNot?: Prisma.SubjectWhereInput;
};
export type SubjectCreateNestedOneWithoutTeachingsInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingsInput, Prisma.SubjectUncheckedCreateWithoutTeachingsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTeachingsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutTeachingsNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingsInput, Prisma.SubjectUncheckedCreateWithoutTeachingsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTeachingsInput;
    upsert?: Prisma.SubjectUpsertWithoutTeachingsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutTeachingsInput, Prisma.SubjectUpdateWithoutTeachingsInput>, Prisma.SubjectUncheckedUpdateWithoutTeachingsInput>;
};
export type SubjectCreateWithoutTeachingsInput = {
    id?: string;
    name: string;
};
export type SubjectUncheckedCreateWithoutTeachingsInput = {
    id?: string;
    name: string;
};
export type SubjectCreateOrConnectWithoutTeachingsInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingsInput, Prisma.SubjectUncheckedCreateWithoutTeachingsInput>;
};
export type SubjectUpsertWithoutTeachingsInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutTeachingsInput, Prisma.SubjectUncheckedUpdateWithoutTeachingsInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTeachingsInput, Prisma.SubjectUncheckedCreateWithoutTeachingsInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutTeachingsInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutTeachingsInput, Prisma.SubjectUncheckedUpdateWithoutTeachingsInput>;
};
export type SubjectUpdateWithoutTeachingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SubjectUncheckedUpdateWithoutTeachingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SubjectCountOutputType = {
    teachings: number;
};
export type SubjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teachings?: boolean | SubjectCountOutputTypeCountTeachingsArgs;
};
export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectCountOutputTypeSelect<ExtArgs> | null;
};
export type SubjectCountOutputTypeCountTeachingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachWhereInput;
};
export type SubjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    teachings?: boolean | Prisma.Subject$teachingsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type SubjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["subject"]>;
export type SubjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teachings?: boolean | Prisma.Subject$teachingsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SubjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SubjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subject";
    objects: {
        teachings: Prisma.$TeachPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
    }, ExtArgs["result"]["subject"]>;
    composites: {};
};
export type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubjectPayload, S>;
export type SubjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectCountAggregateInputType | true;
};
export interface SubjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subject'];
        meta: {
            name: 'Subject';
        };
    };
    findUnique<T extends SubjectFindUniqueArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubjectFindFirstArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubjectFindManyArgs>(args?: Prisma.SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubjectCreateArgs>(args: Prisma.SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubjectCreateManyArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubjectDeleteArgs>(args: Prisma.SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubjectUpdateArgs>(args: Prisma.SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubjectUpdateManyArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubjectUpsertArgs>(args: Prisma.SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubjectCountArgs>(args?: Prisma.Subset<T, SubjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubjectCountAggregateOutputType> : number>;
    aggregate<T extends SubjectAggregateArgs>(args: Prisma.Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;
    groupBy<T extends SubjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubjectGroupByArgs['orderBy'];
    } : {
        orderBy?: SubjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubjectFieldRefs;
}
export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teachings<T extends Prisma.Subject$teachingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$teachingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubjectFieldRefs {
    readonly id: Prisma.FieldRef<"Subject", 'String'>;
    readonly name: Prisma.FieldRef<"Subject", 'String'>;
}
export type SubjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
};
export type SubjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type SubjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type SubjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
};
export type SubjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type Subject$teachingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
    where?: Prisma.TeachWhereInput;
    orderBy?: Prisma.TeachOrderByWithRelationInput | Prisma.TeachOrderByWithRelationInput[];
    cursor?: Prisma.TeachWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeachScalarFieldEnum | Prisma.TeachScalarFieldEnum[];
};
export type SubjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
};
export {};
