import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TeachModel = runtime.Types.Result.DefaultSelection<Prisma.$TeachPayload>;
export type AggregateTeach = {
    _count: TeachCountAggregateOutputType | null;
    _avg: TeachAvgAggregateOutputType | null;
    _sum: TeachSumAggregateOutputType | null;
    _min: TeachMinAggregateOutputType | null;
    _max: TeachMaxAggregateOutputType | null;
};
export type TeachAvgAggregateOutputType = {
    coefficient: number | null;
    duration_total: number | null;
};
export type TeachSumAggregateOutputType = {
    coefficient: number | null;
    duration_total: number | null;
};
export type TeachMinAggregateOutputType = {
    id: string | null;
    subjectId: string | null;
    classeId: string | null;
    coefficient: number | null;
    duration_total: number | null;
};
export type TeachMaxAggregateOutputType = {
    id: string | null;
    subjectId: string | null;
    classeId: string | null;
    coefficient: number | null;
    duration_total: number | null;
};
export type TeachCountAggregateOutputType = {
    id: number;
    subjectId: number;
    classeId: number;
    coefficient: number;
    duration_total: number;
    _all: number;
};
export type TeachAvgAggregateInputType = {
    coefficient?: true;
    duration_total?: true;
};
export type TeachSumAggregateInputType = {
    coefficient?: true;
    duration_total?: true;
};
export type TeachMinAggregateInputType = {
    id?: true;
    subjectId?: true;
    classeId?: true;
    coefficient?: true;
    duration_total?: true;
};
export type TeachMaxAggregateInputType = {
    id?: true;
    subjectId?: true;
    classeId?: true;
    coefficient?: true;
    duration_total?: true;
};
export type TeachCountAggregateInputType = {
    id?: true;
    subjectId?: true;
    classeId?: true;
    coefficient?: true;
    duration_total?: true;
    _all?: true;
};
export type TeachAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachWhereInput;
    orderBy?: Prisma.TeachOrderByWithRelationInput | Prisma.TeachOrderByWithRelationInput[];
    cursor?: Prisma.TeachWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TeachCountAggregateInputType;
    _avg?: TeachAvgAggregateInputType;
    _sum?: TeachSumAggregateInputType;
    _min?: TeachMinAggregateInputType;
    _max?: TeachMaxAggregateInputType;
};
export type GetTeachAggregateType<T extends TeachAggregateArgs> = {
    [P in keyof T & keyof AggregateTeach]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeach[P]> : Prisma.GetScalarType<T[P], AggregateTeach[P]>;
};
export type TeachGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachWhereInput;
    orderBy?: Prisma.TeachOrderByWithAggregationInput | Prisma.TeachOrderByWithAggregationInput[];
    by: Prisma.TeachScalarFieldEnum[] | Prisma.TeachScalarFieldEnum;
    having?: Prisma.TeachScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeachCountAggregateInputType | true;
    _avg?: TeachAvgAggregateInputType;
    _sum?: TeachSumAggregateInputType;
    _min?: TeachMinAggregateInputType;
    _max?: TeachMaxAggregateInputType;
};
export type TeachGroupByOutputType = {
    id: string;
    subjectId: string;
    classeId: string;
    coefficient: number;
    duration_total: number;
    _count: TeachCountAggregateOutputType | null;
    _avg: TeachAvgAggregateOutputType | null;
    _sum: TeachSumAggregateOutputType | null;
    _min: TeachMinAggregateOutputType | null;
    _max: TeachMaxAggregateOutputType | null;
};
type GetTeachGroupByPayload<T extends TeachGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeachGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeachGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeachGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeachGroupByOutputType[P]>;
}>>;
export type TeachWhereInput = {
    AND?: Prisma.TeachWhereInput | Prisma.TeachWhereInput[];
    OR?: Prisma.TeachWhereInput[];
    NOT?: Prisma.TeachWhereInput | Prisma.TeachWhereInput[];
    id?: Prisma.StringFilter<"Teach"> | string;
    subjectId?: Prisma.StringFilter<"Teach"> | string;
    classeId?: Prisma.StringFilter<"Teach"> | string;
    coefficient?: Prisma.FloatFilter<"Teach"> | number;
    duration_total?: Prisma.IntFilter<"Teach"> | number;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
};
export type TeachOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    duration_total?: Prisma.SortOrder;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    classe?: Prisma.ClasseOrderByWithRelationInput;
};
export type TeachWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TeachWhereInput | Prisma.TeachWhereInput[];
    OR?: Prisma.TeachWhereInput[];
    NOT?: Prisma.TeachWhereInput | Prisma.TeachWhereInput[];
    subjectId?: Prisma.StringFilter<"Teach"> | string;
    classeId?: Prisma.StringFilter<"Teach"> | string;
    coefficient?: Prisma.FloatFilter<"Teach"> | number;
    duration_total?: Prisma.IntFilter<"Teach"> | number;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
}, "id">;
export type TeachOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    duration_total?: Prisma.SortOrder;
    _count?: Prisma.TeachCountOrderByAggregateInput;
    _avg?: Prisma.TeachAvgOrderByAggregateInput;
    _max?: Prisma.TeachMaxOrderByAggregateInput;
    _min?: Prisma.TeachMinOrderByAggregateInput;
    _sum?: Prisma.TeachSumOrderByAggregateInput;
};
export type TeachScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeachScalarWhereWithAggregatesInput | Prisma.TeachScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeachScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeachScalarWhereWithAggregatesInput | Prisma.TeachScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Teach"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"Teach"> | string;
    classeId?: Prisma.StringWithAggregatesFilter<"Teach"> | string;
    coefficient?: Prisma.FloatWithAggregatesFilter<"Teach"> | number;
    duration_total?: Prisma.IntWithAggregatesFilter<"Teach"> | number;
};
export type TeachCreateInput = {
    id?: string;
    coefficient?: number;
    duration_total: number;
    subject: Prisma.SubjectCreateNestedOneWithoutTeachingsInput;
    classe: Prisma.ClasseCreateNestedOneWithoutTeachingsInput;
};
export type TeachUncheckedCreateInput = {
    id?: string;
    subjectId: string;
    classeId: string;
    coefficient?: number;
    duration_total: number;
};
export type TeachUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTeachingsNestedInput;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutTeachingsNestedInput;
};
export type TeachUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TeachCreateManyInput = {
    id?: string;
    subjectId: string;
    classeId: string;
    coefficient?: number;
    duration_total: number;
};
export type TeachUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TeachUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TeachListRelationFilter = {
    every?: Prisma.TeachWhereInput;
    some?: Prisma.TeachWhereInput;
    none?: Prisma.TeachWhereInput;
};
export type TeachOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TeachCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    duration_total?: Prisma.SortOrder;
};
export type TeachAvgOrderByAggregateInput = {
    coefficient?: Prisma.SortOrder;
    duration_total?: Prisma.SortOrder;
};
export type TeachMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    duration_total?: Prisma.SortOrder;
};
export type TeachMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    coefficient?: Prisma.SortOrder;
    duration_total?: Prisma.SortOrder;
};
export type TeachSumOrderByAggregateInput = {
    coefficient?: Prisma.SortOrder;
    duration_total?: Prisma.SortOrder;
};
export type TeachCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutClasseInput, Prisma.TeachUncheckedCreateWithoutClasseInput> | Prisma.TeachCreateWithoutClasseInput[] | Prisma.TeachUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutClasseInput | Prisma.TeachCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.TeachCreateManyClasseInputEnvelope;
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
};
export type TeachUncheckedCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutClasseInput, Prisma.TeachUncheckedCreateWithoutClasseInput> | Prisma.TeachCreateWithoutClasseInput[] | Prisma.TeachUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutClasseInput | Prisma.TeachCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.TeachCreateManyClasseInputEnvelope;
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
};
export type TeachUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutClasseInput, Prisma.TeachUncheckedCreateWithoutClasseInput> | Prisma.TeachCreateWithoutClasseInput[] | Prisma.TeachUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutClasseInput | Prisma.TeachCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.TeachUpsertWithWhereUniqueWithoutClasseInput | Prisma.TeachUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.TeachCreateManyClasseInputEnvelope;
    set?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    disconnect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    delete?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    update?: Prisma.TeachUpdateWithWhereUniqueWithoutClasseInput | Prisma.TeachUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.TeachUpdateManyWithWhereWithoutClasseInput | Prisma.TeachUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.TeachScalarWhereInput | Prisma.TeachScalarWhereInput[];
};
export type TeachUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutClasseInput, Prisma.TeachUncheckedCreateWithoutClasseInput> | Prisma.TeachCreateWithoutClasseInput[] | Prisma.TeachUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutClasseInput | Prisma.TeachCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.TeachUpsertWithWhereUniqueWithoutClasseInput | Prisma.TeachUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.TeachCreateManyClasseInputEnvelope;
    set?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    disconnect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    delete?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    update?: Prisma.TeachUpdateWithWhereUniqueWithoutClasseInput | Prisma.TeachUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.TeachUpdateManyWithWhereWithoutClasseInput | Prisma.TeachUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.TeachScalarWhereInput | Prisma.TeachScalarWhereInput[];
};
export type TeachCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutSubjectInput, Prisma.TeachUncheckedCreateWithoutSubjectInput> | Prisma.TeachCreateWithoutSubjectInput[] | Prisma.TeachUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutSubjectInput | Prisma.TeachCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TeachCreateManySubjectInputEnvelope;
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
};
export type TeachUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutSubjectInput, Prisma.TeachUncheckedCreateWithoutSubjectInput> | Prisma.TeachCreateWithoutSubjectInput[] | Prisma.TeachUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutSubjectInput | Prisma.TeachCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TeachCreateManySubjectInputEnvelope;
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
};
export type TeachUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutSubjectInput, Prisma.TeachUncheckedCreateWithoutSubjectInput> | Prisma.TeachCreateWithoutSubjectInput[] | Prisma.TeachUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutSubjectInput | Prisma.TeachCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TeachUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TeachUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TeachCreateManySubjectInputEnvelope;
    set?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    disconnect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    delete?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    update?: Prisma.TeachUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TeachUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TeachUpdateManyWithWhereWithoutSubjectInput | Prisma.TeachUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TeachScalarWhereInput | Prisma.TeachScalarWhereInput[];
};
export type TeachUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TeachCreateWithoutSubjectInput, Prisma.TeachUncheckedCreateWithoutSubjectInput> | Prisma.TeachCreateWithoutSubjectInput[] | Prisma.TeachUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TeachCreateOrConnectWithoutSubjectInput | Prisma.TeachCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TeachUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TeachUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TeachCreateManySubjectInputEnvelope;
    set?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    disconnect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    delete?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    connect?: Prisma.TeachWhereUniqueInput | Prisma.TeachWhereUniqueInput[];
    update?: Prisma.TeachUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TeachUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TeachUpdateManyWithWhereWithoutSubjectInput | Prisma.TeachUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TeachScalarWhereInput | Prisma.TeachScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TeachCreateWithoutClasseInput = {
    id?: string;
    coefficient?: number;
    duration_total: number;
    subject: Prisma.SubjectCreateNestedOneWithoutTeachingsInput;
};
export type TeachUncheckedCreateWithoutClasseInput = {
    id?: string;
    subjectId: string;
    coefficient?: number;
    duration_total: number;
};
export type TeachCreateOrConnectWithoutClasseInput = {
    where: Prisma.TeachWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeachCreateWithoutClasseInput, Prisma.TeachUncheckedCreateWithoutClasseInput>;
};
export type TeachCreateManyClasseInputEnvelope = {
    data: Prisma.TeachCreateManyClasseInput | Prisma.TeachCreateManyClasseInput[];
    skipDuplicates?: boolean;
};
export type TeachUpsertWithWhereUniqueWithoutClasseInput = {
    where: Prisma.TeachWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeachUpdateWithoutClasseInput, Prisma.TeachUncheckedUpdateWithoutClasseInput>;
    create: Prisma.XOR<Prisma.TeachCreateWithoutClasseInput, Prisma.TeachUncheckedCreateWithoutClasseInput>;
};
export type TeachUpdateWithWhereUniqueWithoutClasseInput = {
    where: Prisma.TeachWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeachUpdateWithoutClasseInput, Prisma.TeachUncheckedUpdateWithoutClasseInput>;
};
export type TeachUpdateManyWithWhereWithoutClasseInput = {
    where: Prisma.TeachScalarWhereInput;
    data: Prisma.XOR<Prisma.TeachUpdateManyMutationInput, Prisma.TeachUncheckedUpdateManyWithoutClasseInput>;
};
export type TeachScalarWhereInput = {
    AND?: Prisma.TeachScalarWhereInput | Prisma.TeachScalarWhereInput[];
    OR?: Prisma.TeachScalarWhereInput[];
    NOT?: Prisma.TeachScalarWhereInput | Prisma.TeachScalarWhereInput[];
    id?: Prisma.StringFilter<"Teach"> | string;
    subjectId?: Prisma.StringFilter<"Teach"> | string;
    classeId?: Prisma.StringFilter<"Teach"> | string;
    coefficient?: Prisma.FloatFilter<"Teach"> | number;
    duration_total?: Prisma.IntFilter<"Teach"> | number;
};
export type TeachCreateWithoutSubjectInput = {
    id?: string;
    coefficient?: number;
    duration_total: number;
    classe: Prisma.ClasseCreateNestedOneWithoutTeachingsInput;
};
export type TeachUncheckedCreateWithoutSubjectInput = {
    id?: string;
    classeId: string;
    coefficient?: number;
    duration_total: number;
};
export type TeachCreateOrConnectWithoutSubjectInput = {
    where: Prisma.TeachWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeachCreateWithoutSubjectInput, Prisma.TeachUncheckedCreateWithoutSubjectInput>;
};
export type TeachCreateManySubjectInputEnvelope = {
    data: Prisma.TeachCreateManySubjectInput | Prisma.TeachCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type TeachUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TeachWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeachUpdateWithoutSubjectInput, Prisma.TeachUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.TeachCreateWithoutSubjectInput, Prisma.TeachUncheckedCreateWithoutSubjectInput>;
};
export type TeachUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TeachWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeachUpdateWithoutSubjectInput, Prisma.TeachUncheckedUpdateWithoutSubjectInput>;
};
export type TeachUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.TeachScalarWhereInput;
    data: Prisma.XOR<Prisma.TeachUpdateManyMutationInput, Prisma.TeachUncheckedUpdateManyWithoutSubjectInput>;
};
export type TeachCreateManyClasseInput = {
    id?: string;
    subjectId: string;
    coefficient?: number;
    duration_total: number;
};
export type TeachUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTeachingsNestedInput;
};
export type TeachUncheckedUpdateWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TeachUncheckedUpdateManyWithoutClasseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TeachCreateManySubjectInput = {
    id?: string;
    classeId: string;
    coefficient?: number;
    duration_total: number;
};
export type TeachUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutTeachingsNestedInput;
};
export type TeachUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TeachUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
    coefficient?: Prisma.FloatFieldUpdateOperationsInput | number;
    duration_total?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TeachSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectId?: boolean;
    classeId?: boolean;
    coefficient?: boolean;
    duration_total?: boolean;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teach"]>;
export type TeachSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectId?: boolean;
    classeId?: boolean;
    coefficient?: boolean;
    duration_total?: boolean;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teach"]>;
export type TeachSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectId?: boolean;
    classeId?: boolean;
    coefficient?: boolean;
    duration_total?: boolean;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teach"]>;
export type TeachSelectScalar = {
    id?: boolean;
    subjectId?: boolean;
    classeId?: boolean;
    coefficient?: boolean;
    duration_total?: boolean;
};
export type TeachOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "subjectId" | "classeId" | "coefficient" | "duration_total", ExtArgs["result"]["teach"]>;
export type TeachInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type TeachIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type TeachIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type $TeachPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Teach";
    objects: {
        subject: Prisma.$SubjectPayload<ExtArgs>;
        classe: Prisma.$ClassePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        subjectId: string;
        classeId: string;
        coefficient: number;
        duration_total: number;
    }, ExtArgs["result"]["teach"]>;
    composites: {};
};
export type TeachGetPayload<S extends boolean | null | undefined | TeachDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeachPayload, S>;
export type TeachCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeachFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeachCountAggregateInputType | true;
};
export interface TeachDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Teach'];
        meta: {
            name: 'Teach';
        };
    };
    findUnique<T extends TeachFindUniqueArgs>(args: Prisma.SelectSubset<T, TeachFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TeachFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeachFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TeachFindFirstArgs>(args?: Prisma.SelectSubset<T, TeachFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TeachFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeachFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TeachFindManyArgs>(args?: Prisma.SelectSubset<T, TeachFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TeachCreateArgs>(args: Prisma.SelectSubset<T, TeachCreateArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TeachCreateManyArgs>(args?: Prisma.SelectSubset<T, TeachCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TeachCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeachCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TeachDeleteArgs>(args: Prisma.SelectSubset<T, TeachDeleteArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TeachUpdateArgs>(args: Prisma.SelectSubset<T, TeachUpdateArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TeachDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeachDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TeachUpdateManyArgs>(args: Prisma.SelectSubset<T, TeachUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TeachUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeachUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TeachUpsertArgs>(args: Prisma.SelectSubset<T, TeachUpsertArgs<ExtArgs>>): Prisma.Prisma__TeachClient<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TeachCountArgs>(args?: Prisma.Subset<T, TeachCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeachCountAggregateOutputType> : number>;
    aggregate<T extends TeachAggregateArgs>(args: Prisma.Subset<T, TeachAggregateArgs>): Prisma.PrismaPromise<GetTeachAggregateType<T>>;
    groupBy<T extends TeachGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeachGroupByArgs['orderBy'];
    } : {
        orderBy?: TeachGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeachGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TeachFieldRefs;
}
export interface Prisma__TeachClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classe<T extends Prisma.ClasseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClasseDefaultArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TeachFieldRefs {
    readonly id: Prisma.FieldRef<"Teach", 'String'>;
    readonly subjectId: Prisma.FieldRef<"Teach", 'String'>;
    readonly classeId: Prisma.FieldRef<"Teach", 'String'>;
    readonly coefficient: Prisma.FieldRef<"Teach", 'Float'>;
    readonly duration_total: Prisma.FieldRef<"Teach", 'Int'>;
}
export type TeachFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
    where: Prisma.TeachWhereUniqueInput;
};
export type TeachFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
    where: Prisma.TeachWhereUniqueInput;
};
export type TeachFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeachFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeachFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeachCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeachCreateInput, Prisma.TeachUncheckedCreateInput>;
};
export type TeachCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TeachCreateManyInput | Prisma.TeachCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeachCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    data: Prisma.TeachCreateManyInput | Prisma.TeachCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TeachIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TeachUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeachUpdateInput, Prisma.TeachUncheckedUpdateInput>;
    where: Prisma.TeachWhereUniqueInput;
};
export type TeachUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TeachUpdateManyMutationInput, Prisma.TeachUncheckedUpdateManyInput>;
    where?: Prisma.TeachWhereInput;
    limit?: number;
};
export type TeachUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeachUpdateManyMutationInput, Prisma.TeachUncheckedUpdateManyInput>;
    where?: Prisma.TeachWhereInput;
    limit?: number;
    include?: Prisma.TeachIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TeachUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
    where: Prisma.TeachWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeachCreateInput, Prisma.TeachUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TeachUpdateInput, Prisma.TeachUncheckedUpdateInput>;
};
export type TeachDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
    where: Prisma.TeachWhereUniqueInput;
};
export type TeachDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachWhereInput;
    limit?: number;
};
export type TeachDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeachSelect<ExtArgs> | null;
    omit?: Prisma.TeachOmit<ExtArgs> | null;
    include?: Prisma.TeachInclude<ExtArgs> | null;
};
export {};
