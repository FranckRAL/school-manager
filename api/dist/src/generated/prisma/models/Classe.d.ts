import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ClasseModel = runtime.Types.Result.DefaultSelection<Prisma.$ClassePayload>;
export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null;
    _min: ClasseMinAggregateOutputType | null;
    _max: ClasseMaxAggregateOutputType | null;
};
export type ClasseMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    levelId: string | null;
    scolaryYearId: string | null;
};
export type ClasseMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    levelId: string | null;
    scolaryYearId: string | null;
};
export type ClasseCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    levelId: number;
    scolaryYearId: number;
    _all: number;
};
export type ClasseMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    levelId?: true;
    scolaryYearId?: true;
};
export type ClasseMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    levelId?: true;
    scolaryYearId?: true;
};
export type ClasseCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    levelId?: true;
    scolaryYearId?: true;
    _all?: true;
};
export type ClasseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithRelationInput | Prisma.ClasseOrderByWithRelationInput[];
    cursor?: Prisma.ClasseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClasseCountAggregateInputType;
    _min?: ClasseMinAggregateInputType;
    _max?: ClasseMaxAggregateInputType;
};
export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
    [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClasse[P]> : Prisma.GetScalarType<T[P], AggregateClasse[P]>;
};
export type ClasseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
    orderBy?: Prisma.ClasseOrderByWithAggregationInput | Prisma.ClasseOrderByWithAggregationInput[];
    by: Prisma.ClasseScalarFieldEnum[] | Prisma.ClasseScalarFieldEnum;
    having?: Prisma.ClasseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClasseCountAggregateInputType | true;
    _min?: ClasseMinAggregateInputType;
    _max?: ClasseMaxAggregateInputType;
};
export type ClasseGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    levelId: string;
    scolaryYearId: string;
    _count: ClasseCountAggregateOutputType | null;
    _min: ClasseMinAggregateOutputType | null;
    _max: ClasseMaxAggregateOutputType | null;
};
type GetClasseGroupByPayload<T extends ClasseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClasseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClasseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClasseGroupByOutputType[P]>;
}>>;
export type ClasseWhereInput = {
    AND?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    OR?: Prisma.ClasseWhereInput[];
    NOT?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    id?: Prisma.StringFilter<"Classe"> | string;
    name?: Prisma.StringFilter<"Classe"> | string;
    description?: Prisma.StringNullableFilter<"Classe"> | string | null;
    levelId?: Prisma.StringFilter<"Classe"> | string;
    scolaryYearId?: Prisma.StringFilter<"Classe"> | string;
    level?: Prisma.XOR<Prisma.LevelScalarRelationFilter, Prisma.LevelWhereInput>;
    scolaryYear?: Prisma.XOR<Prisma.ScolaryYearScalarRelationFilter, Prisma.ScolaryYearWhereInput>;
    students?: Prisma.StudentListRelationFilter;
    teachings?: Prisma.TeachListRelationFilter;
};
export type ClasseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    scolaryYearId?: Prisma.SortOrder;
    level?: Prisma.LevelOrderByWithRelationInput;
    scolaryYear?: Prisma.ScolaryYearOrderByWithRelationInput;
    students?: Prisma.StudentOrderByRelationAggregateInput;
    teachings?: Prisma.TeachOrderByRelationAggregateInput;
};
export type ClasseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    OR?: Prisma.ClasseWhereInput[];
    NOT?: Prisma.ClasseWhereInput | Prisma.ClasseWhereInput[];
    name?: Prisma.StringFilter<"Classe"> | string;
    description?: Prisma.StringNullableFilter<"Classe"> | string | null;
    levelId?: Prisma.StringFilter<"Classe"> | string;
    scolaryYearId?: Prisma.StringFilter<"Classe"> | string;
    level?: Prisma.XOR<Prisma.LevelScalarRelationFilter, Prisma.LevelWhereInput>;
    scolaryYear?: Prisma.XOR<Prisma.ScolaryYearScalarRelationFilter, Prisma.ScolaryYearWhereInput>;
    students?: Prisma.StudentListRelationFilter;
    teachings?: Prisma.TeachListRelationFilter;
}, "id">;
export type ClasseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    scolaryYearId?: Prisma.SortOrder;
    _count?: Prisma.ClasseCountOrderByAggregateInput;
    _max?: Prisma.ClasseMaxOrderByAggregateInput;
    _min?: Prisma.ClasseMinOrderByAggregateInput;
};
export type ClasseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClasseScalarWhereWithAggregatesInput | Prisma.ClasseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClasseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClasseScalarWhereWithAggregatesInput | Prisma.ClasseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Classe"> | string | null;
    levelId?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
    scolaryYearId?: Prisma.StringWithAggregatesFilter<"Classe"> | string;
};
export type ClasseCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    level: Prisma.LevelCreateNestedOneWithoutClassesInput;
    scolaryYear: Prisma.ScolaryYearCreateNestedOneWithoutClassesInput;
    students?: Prisma.StudentCreateNestedManyWithoutClasseInput;
    teachings?: Prisma.TeachCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    levelId: string;
    scolaryYearId: string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutClasseInput;
    teachings?: Prisma.TeachUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.LevelUpdateOneRequiredWithoutClassesNestedInput;
    scolaryYear?: Prisma.ScolaryYearUpdateOneRequiredWithoutClassesNestedInput;
    students?: Prisma.StudentUpdateManyWithoutClasseNestedInput;
    teachings?: Prisma.TeachUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    scolaryYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutClasseNestedInput;
    teachings?: Prisma.TeachUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    levelId: string;
    scolaryYearId: string;
};
export type ClasseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ClasseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    scolaryYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClasseListRelationFilter = {
    every?: Prisma.ClasseWhereInput;
    some?: Prisma.ClasseWhereInput;
    none?: Prisma.ClasseWhereInput;
};
export type ClasseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClasseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    scolaryYearId?: Prisma.SortOrder;
};
export type ClasseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    scolaryYearId?: Prisma.SortOrder;
};
export type ClasseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    scolaryYearId?: Prisma.SortOrder;
};
export type ClasseScalarRelationFilter = {
    is?: Prisma.ClasseWhereInput;
    isNot?: Prisma.ClasseWhereInput;
};
export type ClasseCreateNestedManyWithoutScolaryYearInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutScolaryYearInput, Prisma.ClasseUncheckedCreateWithoutScolaryYearInput> | Prisma.ClasseCreateWithoutScolaryYearInput[] | Prisma.ClasseUncheckedCreateWithoutScolaryYearInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutScolaryYearInput | Prisma.ClasseCreateOrConnectWithoutScolaryYearInput[];
    createMany?: Prisma.ClasseCreateManyScolaryYearInputEnvelope;
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
};
export type ClasseUncheckedCreateNestedManyWithoutScolaryYearInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutScolaryYearInput, Prisma.ClasseUncheckedCreateWithoutScolaryYearInput> | Prisma.ClasseCreateWithoutScolaryYearInput[] | Prisma.ClasseUncheckedCreateWithoutScolaryYearInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutScolaryYearInput | Prisma.ClasseCreateOrConnectWithoutScolaryYearInput[];
    createMany?: Prisma.ClasseCreateManyScolaryYearInputEnvelope;
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
};
export type ClasseUpdateManyWithoutScolaryYearNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutScolaryYearInput, Prisma.ClasseUncheckedCreateWithoutScolaryYearInput> | Prisma.ClasseCreateWithoutScolaryYearInput[] | Prisma.ClasseUncheckedCreateWithoutScolaryYearInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutScolaryYearInput | Prisma.ClasseCreateOrConnectWithoutScolaryYearInput[];
    upsert?: Prisma.ClasseUpsertWithWhereUniqueWithoutScolaryYearInput | Prisma.ClasseUpsertWithWhereUniqueWithoutScolaryYearInput[];
    createMany?: Prisma.ClasseCreateManyScolaryYearInputEnvelope;
    set?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    disconnect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    delete?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    update?: Prisma.ClasseUpdateWithWhereUniqueWithoutScolaryYearInput | Prisma.ClasseUpdateWithWhereUniqueWithoutScolaryYearInput[];
    updateMany?: Prisma.ClasseUpdateManyWithWhereWithoutScolaryYearInput | Prisma.ClasseUpdateManyWithWhereWithoutScolaryYearInput[];
    deleteMany?: Prisma.ClasseScalarWhereInput | Prisma.ClasseScalarWhereInput[];
};
export type ClasseUncheckedUpdateManyWithoutScolaryYearNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutScolaryYearInput, Prisma.ClasseUncheckedCreateWithoutScolaryYearInput> | Prisma.ClasseCreateWithoutScolaryYearInput[] | Prisma.ClasseUncheckedCreateWithoutScolaryYearInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutScolaryYearInput | Prisma.ClasseCreateOrConnectWithoutScolaryYearInput[];
    upsert?: Prisma.ClasseUpsertWithWhereUniqueWithoutScolaryYearInput | Prisma.ClasseUpsertWithWhereUniqueWithoutScolaryYearInput[];
    createMany?: Prisma.ClasseCreateManyScolaryYearInputEnvelope;
    set?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    disconnect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    delete?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    update?: Prisma.ClasseUpdateWithWhereUniqueWithoutScolaryYearInput | Prisma.ClasseUpdateWithWhereUniqueWithoutScolaryYearInput[];
    updateMany?: Prisma.ClasseUpdateManyWithWhereWithoutScolaryYearInput | Prisma.ClasseUpdateManyWithWhereWithoutScolaryYearInput[];
    deleteMany?: Prisma.ClasseScalarWhereInput | Prisma.ClasseScalarWhereInput[];
};
export type ClasseCreateNestedManyWithoutLevelInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutLevelInput, Prisma.ClasseUncheckedCreateWithoutLevelInput> | Prisma.ClasseCreateWithoutLevelInput[] | Prisma.ClasseUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutLevelInput | Prisma.ClasseCreateOrConnectWithoutLevelInput[];
    createMany?: Prisma.ClasseCreateManyLevelInputEnvelope;
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
};
export type ClasseUncheckedCreateNestedManyWithoutLevelInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutLevelInput, Prisma.ClasseUncheckedCreateWithoutLevelInput> | Prisma.ClasseCreateWithoutLevelInput[] | Prisma.ClasseUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutLevelInput | Prisma.ClasseCreateOrConnectWithoutLevelInput[];
    createMany?: Prisma.ClasseCreateManyLevelInputEnvelope;
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
};
export type ClasseUpdateManyWithoutLevelNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutLevelInput, Prisma.ClasseUncheckedCreateWithoutLevelInput> | Prisma.ClasseCreateWithoutLevelInput[] | Prisma.ClasseUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutLevelInput | Prisma.ClasseCreateOrConnectWithoutLevelInput[];
    upsert?: Prisma.ClasseUpsertWithWhereUniqueWithoutLevelInput | Prisma.ClasseUpsertWithWhereUniqueWithoutLevelInput[];
    createMany?: Prisma.ClasseCreateManyLevelInputEnvelope;
    set?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    disconnect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    delete?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    update?: Prisma.ClasseUpdateWithWhereUniqueWithoutLevelInput | Prisma.ClasseUpdateWithWhereUniqueWithoutLevelInput[];
    updateMany?: Prisma.ClasseUpdateManyWithWhereWithoutLevelInput | Prisma.ClasseUpdateManyWithWhereWithoutLevelInput[];
    deleteMany?: Prisma.ClasseScalarWhereInput | Prisma.ClasseScalarWhereInput[];
};
export type ClasseUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutLevelInput, Prisma.ClasseUncheckedCreateWithoutLevelInput> | Prisma.ClasseCreateWithoutLevelInput[] | Prisma.ClasseUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutLevelInput | Prisma.ClasseCreateOrConnectWithoutLevelInput[];
    upsert?: Prisma.ClasseUpsertWithWhereUniqueWithoutLevelInput | Prisma.ClasseUpsertWithWhereUniqueWithoutLevelInput[];
    createMany?: Prisma.ClasseCreateManyLevelInputEnvelope;
    set?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    disconnect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    delete?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    connect?: Prisma.ClasseWhereUniqueInput | Prisma.ClasseWhereUniqueInput[];
    update?: Prisma.ClasseUpdateWithWhereUniqueWithoutLevelInput | Prisma.ClasseUpdateWithWhereUniqueWithoutLevelInput[];
    updateMany?: Prisma.ClasseUpdateManyWithWhereWithoutLevelInput | Prisma.ClasseUpdateManyWithWhereWithoutLevelInput[];
    deleteMany?: Prisma.ClasseScalarWhereInput | Prisma.ClasseScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ClasseCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutStudentsInput, Prisma.ClasseUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.ClasseWhereUniqueInput;
};
export type ClasseUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutStudentsInput, Prisma.ClasseUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.ClasseUpsertWithoutStudentsInput;
    connect?: Prisma.ClasseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClasseUpdateToOneWithWhereWithoutStudentsInput, Prisma.ClasseUpdateWithoutStudentsInput>, Prisma.ClasseUncheckedUpdateWithoutStudentsInput>;
};
export type ClasseCreateNestedOneWithoutTeachingsInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutTeachingsInput, Prisma.ClasseUncheckedCreateWithoutTeachingsInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutTeachingsInput;
    connect?: Prisma.ClasseWhereUniqueInput;
};
export type ClasseUpdateOneRequiredWithoutTeachingsNestedInput = {
    create?: Prisma.XOR<Prisma.ClasseCreateWithoutTeachingsInput, Prisma.ClasseUncheckedCreateWithoutTeachingsInput>;
    connectOrCreate?: Prisma.ClasseCreateOrConnectWithoutTeachingsInput;
    upsert?: Prisma.ClasseUpsertWithoutTeachingsInput;
    connect?: Prisma.ClasseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClasseUpdateToOneWithWhereWithoutTeachingsInput, Prisma.ClasseUpdateWithoutTeachingsInput>, Prisma.ClasseUncheckedUpdateWithoutTeachingsInput>;
};
export type ClasseCreateWithoutScolaryYearInput = {
    id?: string;
    name: string;
    description?: string | null;
    level: Prisma.LevelCreateNestedOneWithoutClassesInput;
    students?: Prisma.StudentCreateNestedManyWithoutClasseInput;
    teachings?: Prisma.TeachCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateWithoutScolaryYearInput = {
    id?: string;
    name: string;
    description?: string | null;
    levelId: string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutClasseInput;
    teachings?: Prisma.TeachUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseCreateOrConnectWithoutScolaryYearInput = {
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutScolaryYearInput, Prisma.ClasseUncheckedCreateWithoutScolaryYearInput>;
};
export type ClasseCreateManyScolaryYearInputEnvelope = {
    data: Prisma.ClasseCreateManyScolaryYearInput | Prisma.ClasseCreateManyScolaryYearInput[];
    skipDuplicates?: boolean;
};
export type ClasseUpsertWithWhereUniqueWithoutScolaryYearInput = {
    where: Prisma.ClasseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClasseUpdateWithoutScolaryYearInput, Prisma.ClasseUncheckedUpdateWithoutScolaryYearInput>;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutScolaryYearInput, Prisma.ClasseUncheckedCreateWithoutScolaryYearInput>;
};
export type ClasseUpdateWithWhereUniqueWithoutScolaryYearInput = {
    where: Prisma.ClasseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClasseUpdateWithoutScolaryYearInput, Prisma.ClasseUncheckedUpdateWithoutScolaryYearInput>;
};
export type ClasseUpdateManyWithWhereWithoutScolaryYearInput = {
    where: Prisma.ClasseScalarWhereInput;
    data: Prisma.XOR<Prisma.ClasseUpdateManyMutationInput, Prisma.ClasseUncheckedUpdateManyWithoutScolaryYearInput>;
};
export type ClasseScalarWhereInput = {
    AND?: Prisma.ClasseScalarWhereInput | Prisma.ClasseScalarWhereInput[];
    OR?: Prisma.ClasseScalarWhereInput[];
    NOT?: Prisma.ClasseScalarWhereInput | Prisma.ClasseScalarWhereInput[];
    id?: Prisma.StringFilter<"Classe"> | string;
    name?: Prisma.StringFilter<"Classe"> | string;
    description?: Prisma.StringNullableFilter<"Classe"> | string | null;
    levelId?: Prisma.StringFilter<"Classe"> | string;
    scolaryYearId?: Prisma.StringFilter<"Classe"> | string;
};
export type ClasseCreateWithoutLevelInput = {
    id?: string;
    name: string;
    description?: string | null;
    scolaryYear: Prisma.ScolaryYearCreateNestedOneWithoutClassesInput;
    students?: Prisma.StudentCreateNestedManyWithoutClasseInput;
    teachings?: Prisma.TeachCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateWithoutLevelInput = {
    id?: string;
    name: string;
    description?: string | null;
    scolaryYearId: string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutClasseInput;
    teachings?: Prisma.TeachUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseCreateOrConnectWithoutLevelInput = {
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutLevelInput, Prisma.ClasseUncheckedCreateWithoutLevelInput>;
};
export type ClasseCreateManyLevelInputEnvelope = {
    data: Prisma.ClasseCreateManyLevelInput | Prisma.ClasseCreateManyLevelInput[];
    skipDuplicates?: boolean;
};
export type ClasseUpsertWithWhereUniqueWithoutLevelInput = {
    where: Prisma.ClasseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClasseUpdateWithoutLevelInput, Prisma.ClasseUncheckedUpdateWithoutLevelInput>;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutLevelInput, Prisma.ClasseUncheckedCreateWithoutLevelInput>;
};
export type ClasseUpdateWithWhereUniqueWithoutLevelInput = {
    where: Prisma.ClasseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClasseUpdateWithoutLevelInput, Prisma.ClasseUncheckedUpdateWithoutLevelInput>;
};
export type ClasseUpdateManyWithWhereWithoutLevelInput = {
    where: Prisma.ClasseScalarWhereInput;
    data: Prisma.XOR<Prisma.ClasseUpdateManyMutationInput, Prisma.ClasseUncheckedUpdateManyWithoutLevelInput>;
};
export type ClasseCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    description?: string | null;
    level: Prisma.LevelCreateNestedOneWithoutClassesInput;
    scolaryYear: Prisma.ScolaryYearCreateNestedOneWithoutClassesInput;
    teachings?: Prisma.TeachCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    description?: string | null;
    levelId: string;
    scolaryYearId: string;
    teachings?: Prisma.TeachUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseCreateOrConnectWithoutStudentsInput = {
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutStudentsInput, Prisma.ClasseUncheckedCreateWithoutStudentsInput>;
};
export type ClasseUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.ClasseUpdateWithoutStudentsInput, Prisma.ClasseUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutStudentsInput, Prisma.ClasseUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.ClasseWhereInput;
};
export type ClasseUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.ClasseWhereInput;
    data: Prisma.XOR<Prisma.ClasseUpdateWithoutStudentsInput, Prisma.ClasseUncheckedUpdateWithoutStudentsInput>;
};
export type ClasseUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.LevelUpdateOneRequiredWithoutClassesNestedInput;
    scolaryYear?: Prisma.ScolaryYearUpdateOneRequiredWithoutClassesNestedInput;
    teachings?: Prisma.TeachUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    scolaryYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teachings?: Prisma.TeachUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseCreateWithoutTeachingsInput = {
    id?: string;
    name: string;
    description?: string | null;
    level: Prisma.LevelCreateNestedOneWithoutClassesInput;
    scolaryYear: Prisma.ScolaryYearCreateNestedOneWithoutClassesInput;
    students?: Prisma.StudentCreateNestedManyWithoutClasseInput;
};
export type ClasseUncheckedCreateWithoutTeachingsInput = {
    id?: string;
    name: string;
    description?: string | null;
    levelId: string;
    scolaryYearId: string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutClasseInput;
};
export type ClasseCreateOrConnectWithoutTeachingsInput = {
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutTeachingsInput, Prisma.ClasseUncheckedCreateWithoutTeachingsInput>;
};
export type ClasseUpsertWithoutTeachingsInput = {
    update: Prisma.XOR<Prisma.ClasseUpdateWithoutTeachingsInput, Prisma.ClasseUncheckedUpdateWithoutTeachingsInput>;
    create: Prisma.XOR<Prisma.ClasseCreateWithoutTeachingsInput, Prisma.ClasseUncheckedCreateWithoutTeachingsInput>;
    where?: Prisma.ClasseWhereInput;
};
export type ClasseUpdateToOneWithWhereWithoutTeachingsInput = {
    where?: Prisma.ClasseWhereInput;
    data: Prisma.XOR<Prisma.ClasseUpdateWithoutTeachingsInput, Prisma.ClasseUncheckedUpdateWithoutTeachingsInput>;
};
export type ClasseUpdateWithoutTeachingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.LevelUpdateOneRequiredWithoutClassesNestedInput;
    scolaryYear?: Prisma.ScolaryYearUpdateOneRequiredWithoutClassesNestedInput;
    students?: Prisma.StudentUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateWithoutTeachingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    scolaryYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseCreateManyScolaryYearInput = {
    id?: string;
    name: string;
    description?: string | null;
    levelId: string;
};
export type ClasseUpdateWithoutScolaryYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.LevelUpdateOneRequiredWithoutClassesNestedInput;
    students?: Prisma.StudentUpdateManyWithoutClasseNestedInput;
    teachings?: Prisma.TeachUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateWithoutScolaryYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutClasseNestedInput;
    teachings?: Prisma.TeachUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateManyWithoutScolaryYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClasseCreateManyLevelInput = {
    id?: string;
    name: string;
    description?: string | null;
    scolaryYearId: string;
};
export type ClasseUpdateWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scolaryYear?: Prisma.ScolaryYearUpdateOneRequiredWithoutClassesNestedInput;
    students?: Prisma.StudentUpdateManyWithoutClasseNestedInput;
    teachings?: Prisma.TeachUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scolaryYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutClasseNestedInput;
    teachings?: Prisma.TeachUncheckedUpdateManyWithoutClasseNestedInput;
};
export type ClasseUncheckedUpdateManyWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scolaryYearId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClasseCountOutputType = {
    students: number;
    teachings: number;
};
export type ClasseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | ClasseCountOutputTypeCountStudentsArgs;
    teachings?: boolean | ClasseCountOutputTypeCountTeachingsArgs;
};
export type ClasseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseCountOutputTypeSelect<ExtArgs> | null;
};
export type ClasseCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
};
export type ClasseCountOutputTypeCountTeachingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeachWhereInput;
};
export type ClasseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    levelId?: boolean;
    scolaryYearId?: boolean;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    scolaryYear?: boolean | Prisma.ScolaryYearDefaultArgs<ExtArgs>;
    students?: boolean | Prisma.Classe$studentsArgs<ExtArgs>;
    teachings?: boolean | Prisma.Classe$teachingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClasseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classe"]>;
export type ClasseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    levelId?: boolean;
    scolaryYearId?: boolean;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    scolaryYear?: boolean | Prisma.ScolaryYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classe"]>;
export type ClasseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    levelId?: boolean;
    scolaryYearId?: boolean;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    scolaryYear?: boolean | Prisma.ScolaryYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classe"]>;
export type ClasseSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    levelId?: boolean;
    scolaryYearId?: boolean;
};
export type ClasseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "levelId" | "scolaryYearId", ExtArgs["result"]["classe"]>;
export type ClasseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    scolaryYear?: boolean | Prisma.ScolaryYearDefaultArgs<ExtArgs>;
    students?: boolean | Prisma.Classe$studentsArgs<ExtArgs>;
    teachings?: boolean | Prisma.Classe$teachingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClasseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClasseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    scolaryYear?: boolean | Prisma.ScolaryYearDefaultArgs<ExtArgs>;
};
export type ClasseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    scolaryYear?: boolean | Prisma.ScolaryYearDefaultArgs<ExtArgs>;
};
export type $ClassePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Classe";
    objects: {
        level: Prisma.$LevelPayload<ExtArgs>;
        scolaryYear: Prisma.$ScolaryYearPayload<ExtArgs>;
        students: Prisma.$StudentPayload<ExtArgs>[];
        teachings: Prisma.$TeachPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        levelId: string;
        scolaryYearId: string;
    }, ExtArgs["result"]["classe"]>;
    composites: {};
};
export type ClasseGetPayload<S extends boolean | null | undefined | ClasseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClassePayload, S>;
export type ClasseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClasseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClasseCountAggregateInputType | true;
};
export interface ClasseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Classe'];
        meta: {
            name: 'Classe';
        };
    };
    findUnique<T extends ClasseFindUniqueArgs>(args: Prisma.SelectSubset<T, ClasseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClasseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClasseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClasseFindFirstArgs>(args?: Prisma.SelectSubset<T, ClasseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClasseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClasseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClasseFindManyArgs>(args?: Prisma.SelectSubset<T, ClasseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClasseCreateArgs>(args: Prisma.SelectSubset<T, ClasseCreateArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClasseCreateManyArgs>(args?: Prisma.SelectSubset<T, ClasseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClasseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClasseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClasseDeleteArgs>(args: Prisma.SelectSubset<T, ClasseDeleteArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClasseUpdateArgs>(args: Prisma.SelectSubset<T, ClasseUpdateArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClasseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClasseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClasseUpdateManyArgs>(args: Prisma.SelectSubset<T, ClasseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClasseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClasseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClasseUpsertArgs>(args: Prisma.SelectSubset<T, ClasseUpsertArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClasseCountArgs>(args?: Prisma.Subset<T, ClasseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClasseCountAggregateOutputType> : number>;
    aggregate<T extends ClasseAggregateArgs>(args: Prisma.Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>;
    groupBy<T extends ClasseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClasseGroupByArgs['orderBy'];
    } : {
        orderBy?: ClasseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClasseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClasseFieldRefs;
}
export interface Prisma__ClasseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    level<T extends Prisma.LevelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LevelDefaultArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    scolaryYear<T extends Prisma.ScolaryYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScolaryYearDefaultArgs<ExtArgs>>): Prisma.Prisma__ScolaryYearClient<runtime.Types.Result.GetResult<Prisma.$ScolaryYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    students<T extends Prisma.Classe$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Classe$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teachings<T extends Prisma.Classe$teachingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Classe$teachingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClasseFieldRefs {
    readonly id: Prisma.FieldRef<"Classe", 'String'>;
    readonly name: Prisma.FieldRef<"Classe", 'String'>;
    readonly description: Prisma.FieldRef<"Classe", 'String'>;
    readonly levelId: Prisma.FieldRef<"Classe", 'String'>;
    readonly scolaryYearId: Prisma.FieldRef<"Classe", 'String'>;
}
export type ClasseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClasseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClasseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClasseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClasseCreateInput, Prisma.ClasseUncheckedCreateInput>;
};
export type ClasseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClasseCreateManyInput | Prisma.ClasseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClasseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    data: Prisma.ClasseCreateManyInput | Prisma.ClasseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClasseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClasseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClasseUpdateInput, Prisma.ClasseUncheckedUpdateInput>;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClasseUpdateManyMutationInput, Prisma.ClasseUncheckedUpdateManyInput>;
    where?: Prisma.ClasseWhereInput;
    limit?: number;
};
export type ClasseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClasseUpdateManyMutationInput, Prisma.ClasseUncheckedUpdateManyInput>;
    where?: Prisma.ClasseWhereInput;
    limit?: number;
    include?: Prisma.ClasseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClasseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClasseCreateInput, Prisma.ClasseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClasseUpdateInput, Prisma.ClasseUncheckedUpdateInput>;
};
export type ClasseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
    where: Prisma.ClasseWhereUniqueInput;
};
export type ClasseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClasseWhereInput;
    limit?: number;
};
export type Classe$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type Classe$teachingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClasseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClasseSelect<ExtArgs> | null;
    omit?: Prisma.ClasseOmit<ExtArgs> | null;
    include?: Prisma.ClasseInclude<ExtArgs> | null;
};
export {};
