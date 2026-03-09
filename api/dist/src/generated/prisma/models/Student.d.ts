import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentMinAggregateOutputType = {
    matricule: string | null;
    first_name: string | null;
    last_name1: string | null;
    gender: string | null;
    date_of_birth: Date | null;
    father_name: string | null;
    mother_name: string | null;
    tutor_phone_number: string | null;
    address: string | null;
    classeId: string | null;
};
export type StudentMaxAggregateOutputType = {
    matricule: string | null;
    first_name: string | null;
    last_name1: string | null;
    gender: string | null;
    date_of_birth: Date | null;
    father_name: string | null;
    mother_name: string | null;
    tutor_phone_number: string | null;
    address: string | null;
    classeId: string | null;
};
export type StudentCountAggregateOutputType = {
    matricule: number;
    first_name: number;
    last_name1: number;
    gender: number;
    date_of_birth: number;
    father_name: number;
    mother_name: number;
    tutor_phone_number: number;
    address: number;
    classeId: number;
    _all: number;
};
export type StudentMinAggregateInputType = {
    matricule?: true;
    first_name?: true;
    last_name1?: true;
    gender?: true;
    date_of_birth?: true;
    father_name?: true;
    mother_name?: true;
    tutor_phone_number?: true;
    address?: true;
    classeId?: true;
};
export type StudentMaxAggregateInputType = {
    matricule?: true;
    first_name?: true;
    last_name1?: true;
    gender?: true;
    date_of_birth?: true;
    father_name?: true;
    mother_name?: true;
    tutor_phone_number?: true;
    address?: true;
    classeId?: true;
};
export type StudentCountAggregateInputType = {
    matricule?: true;
    first_name?: true;
    last_name1?: true;
    gender?: true;
    date_of_birth?: true;
    father_name?: true;
    mother_name?: true;
    tutor_phone_number?: true;
    address?: true;
    classeId?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentCountAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    matricule: string;
    first_name: string;
    last_name1: string;
    gender: string;
    date_of_birth: Date;
    father_name: string | null;
    mother_name: string | null;
    tutor_phone_number: string | null;
    address: string | null;
    classeId: string;
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    matricule?: Prisma.StringFilter<"Student"> | string;
    first_name?: Prisma.StringFilter<"Student"> | string;
    last_name1?: Prisma.StringFilter<"Student"> | string;
    gender?: Prisma.StringFilter<"Student"> | string;
    date_of_birth?: Prisma.DateTimeFilter<"Student"> | Date | string;
    father_name?: Prisma.StringNullableFilter<"Student"> | string | null;
    mother_name?: Prisma.StringNullableFilter<"Student"> | string | null;
    tutor_phone_number?: Prisma.StringNullableFilter<"Student"> | string | null;
    address?: Prisma.StringNullableFilter<"Student"> | string | null;
    classeId?: Prisma.StringFilter<"Student"> | string;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
};
export type StudentOrderByWithRelationInput = {
    matricule?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name1?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
    father_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mother_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    tutor_phone_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    classe?: Prisma.ClasseOrderByWithRelationInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    matricule?: string;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    first_name?: Prisma.StringFilter<"Student"> | string;
    last_name1?: Prisma.StringFilter<"Student"> | string;
    gender?: Prisma.StringFilter<"Student"> | string;
    date_of_birth?: Prisma.DateTimeFilter<"Student"> | Date | string;
    father_name?: Prisma.StringNullableFilter<"Student"> | string | null;
    mother_name?: Prisma.StringNullableFilter<"Student"> | string | null;
    tutor_phone_number?: Prisma.StringNullableFilter<"Student"> | string | null;
    address?: Prisma.StringNullableFilter<"Student"> | string | null;
    classeId?: Prisma.StringFilter<"Student"> | string;
    classe?: Prisma.XOR<Prisma.ClasseScalarRelationFilter, Prisma.ClasseWhereInput>;
}, "matricule">;
export type StudentOrderByWithAggregationInput = {
    matricule?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name1?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
    father_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    mother_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    tutor_phone_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    matricule?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    first_name?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    last_name1?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    gender?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    date_of_birth?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
    father_name?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    mother_name?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    tutor_phone_number?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    classeId?: Prisma.StringWithAggregatesFilter<"Student"> | string;
};
export type StudentCreateInput = {
    matricule?: string;
    first_name: string;
    last_name1: string;
    gender: string;
    date_of_birth: Date | string;
    father_name?: string | null;
    mother_name?: string | null;
    tutor_phone_number?: string | null;
    address?: string | null;
    classe: Prisma.ClasseCreateNestedOneWithoutStudentsInput;
};
export type StudentUncheckedCreateInput = {
    matricule?: string;
    first_name: string;
    last_name1: string;
    gender: string;
    date_of_birth: Date | string;
    father_name?: string | null;
    mother_name?: string | null;
    tutor_phone_number?: string | null;
    address?: string | null;
    classeId: string;
};
export type StudentUpdateInput = {
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name1?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    date_of_birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    father_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mother_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor_phone_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    classe?: Prisma.ClasseUpdateOneRequiredWithoutStudentsNestedInput;
};
export type StudentUncheckedUpdateInput = {
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name1?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    date_of_birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    father_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mother_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor_phone_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentCreateManyInput = {
    matricule?: string;
    first_name: string;
    last_name1: string;
    gender: string;
    date_of_birth: Date | string;
    father_name?: string | null;
    mother_name?: string | null;
    tutor_phone_number?: string | null;
    address?: string | null;
    classeId: string;
};
export type StudentUpdateManyMutationInput = {
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name1?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    date_of_birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    father_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mother_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor_phone_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StudentUncheckedUpdateManyInput = {
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name1?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    date_of_birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    father_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mother_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor_phone_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    classeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentListRelationFilter = {
    every?: Prisma.StudentWhereInput;
    some?: Prisma.StudentWhereInput;
    none?: Prisma.StudentWhereInput;
};
export type StudentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentCountOrderByAggregateInput = {
    matricule?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name1?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
    father_name?: Prisma.SortOrder;
    mother_name?: Prisma.SortOrder;
    tutor_phone_number?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    matricule?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name1?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
    father_name?: Prisma.SortOrder;
    mother_name?: Prisma.SortOrder;
    tutor_phone_number?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    matricule?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name1?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
    father_name?: Prisma.SortOrder;
    mother_name?: Prisma.SortOrder;
    tutor_phone_number?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    classeId?: Prisma.SortOrder;
};
export type StudentCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutClasseInput, Prisma.StudentUncheckedCreateWithoutClasseInput> | Prisma.StudentCreateWithoutClasseInput[] | Prisma.StudentUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutClasseInput | Prisma.StudentCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.StudentCreateManyClasseInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUncheckedCreateNestedManyWithoutClasseInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutClasseInput, Prisma.StudentUncheckedCreateWithoutClasseInput> | Prisma.StudentCreateWithoutClasseInput[] | Prisma.StudentUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutClasseInput | Prisma.StudentCreateOrConnectWithoutClasseInput[];
    createMany?: Prisma.StudentCreateManyClasseInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutClasseInput, Prisma.StudentUncheckedCreateWithoutClasseInput> | Prisma.StudentCreateWithoutClasseInput[] | Prisma.StudentUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutClasseInput | Prisma.StudentCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutClasseInput | Prisma.StudentUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.StudentCreateManyClasseInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutClasseInput | Prisma.StudentUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutClasseInput | Prisma.StudentUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type StudentUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutClasseInput, Prisma.StudentUncheckedCreateWithoutClasseInput> | Prisma.StudentCreateWithoutClasseInput[] | Prisma.StudentUncheckedCreateWithoutClasseInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutClasseInput | Prisma.StudentCreateOrConnectWithoutClasseInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutClasseInput | Prisma.StudentUpsertWithWhereUniqueWithoutClasseInput[];
    createMany?: Prisma.StudentCreateManyClasseInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutClasseInput | Prisma.StudentUpdateWithWhereUniqueWithoutClasseInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutClasseInput | Prisma.StudentUpdateManyWithWhereWithoutClasseInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type StudentCreateWithoutClasseInput = {
    matricule?: string;
    first_name: string;
    last_name1: string;
    gender: string;
    date_of_birth: Date | string;
    father_name?: string | null;
    mother_name?: string | null;
    tutor_phone_number?: string | null;
    address?: string | null;
};
export type StudentUncheckedCreateWithoutClasseInput = {
    matricule?: string;
    first_name: string;
    last_name1: string;
    gender: string;
    date_of_birth: Date | string;
    father_name?: string | null;
    mother_name?: string | null;
    tutor_phone_number?: string | null;
    address?: string | null;
};
export type StudentCreateOrConnectWithoutClasseInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutClasseInput, Prisma.StudentUncheckedCreateWithoutClasseInput>;
};
export type StudentCreateManyClasseInputEnvelope = {
    data: Prisma.StudentCreateManyClasseInput | Prisma.StudentCreateManyClasseInput[];
    skipDuplicates?: boolean;
};
export type StudentUpsertWithWhereUniqueWithoutClasseInput = {
    where: Prisma.StudentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentUpdateWithoutClasseInput, Prisma.StudentUncheckedUpdateWithoutClasseInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutClasseInput, Prisma.StudentUncheckedCreateWithoutClasseInput>;
};
export type StudentUpdateWithWhereUniqueWithoutClasseInput = {
    where: Prisma.StudentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutClasseInput, Prisma.StudentUncheckedUpdateWithoutClasseInput>;
};
export type StudentUpdateManyWithWhereWithoutClasseInput = {
    where: Prisma.StudentScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyWithoutClasseInput>;
};
export type StudentScalarWhereInput = {
    AND?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    OR?: Prisma.StudentScalarWhereInput[];
    NOT?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    matricule?: Prisma.StringFilter<"Student"> | string;
    first_name?: Prisma.StringFilter<"Student"> | string;
    last_name1?: Prisma.StringFilter<"Student"> | string;
    gender?: Prisma.StringFilter<"Student"> | string;
    date_of_birth?: Prisma.DateTimeFilter<"Student"> | Date | string;
    father_name?: Prisma.StringNullableFilter<"Student"> | string | null;
    mother_name?: Prisma.StringNullableFilter<"Student"> | string | null;
    tutor_phone_number?: Prisma.StringNullableFilter<"Student"> | string | null;
    address?: Prisma.StringNullableFilter<"Student"> | string | null;
    classeId?: Prisma.StringFilter<"Student"> | string;
};
export type StudentCreateManyClasseInput = {
    matricule?: string;
    first_name: string;
    last_name1: string;
    gender: string;
    date_of_birth: Date | string;
    father_name?: string | null;
    mother_name?: string | null;
    tutor_phone_number?: string | null;
    address?: string | null;
};
export type StudentUpdateWithoutClasseInput = {
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name1?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    date_of_birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    father_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mother_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor_phone_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StudentUncheckedUpdateWithoutClasseInput = {
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name1?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    date_of_birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    father_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mother_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor_phone_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StudentUncheckedUpdateManyWithoutClasseInput = {
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name1?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    date_of_birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    father_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mother_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tutor_phone_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricule?: boolean;
    first_name?: boolean;
    last_name1?: boolean;
    gender?: boolean;
    date_of_birth?: boolean;
    father_name?: boolean;
    mother_name?: boolean;
    tutor_phone_number?: boolean;
    address?: boolean;
    classeId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricule?: boolean;
    first_name?: boolean;
    last_name1?: boolean;
    gender?: boolean;
    date_of_birth?: boolean;
    father_name?: boolean;
    mother_name?: boolean;
    tutor_phone_number?: boolean;
    address?: boolean;
    classeId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    matricule?: boolean;
    first_name?: boolean;
    last_name1?: boolean;
    gender?: boolean;
    date_of_birth?: boolean;
    father_name?: boolean;
    mother_name?: boolean;
    tutor_phone_number?: boolean;
    address?: boolean;
    classeId?: boolean;
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    matricule?: boolean;
    first_name?: boolean;
    last_name1?: boolean;
    gender?: boolean;
    date_of_birth?: boolean;
    father_name?: boolean;
    mother_name?: boolean;
    tutor_phone_number?: boolean;
    address?: boolean;
    classeId?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"matricule" | "first_name" | "last_name1" | "gender" | "date_of_birth" | "father_name" | "mother_name" | "tutor_phone_number" | "address" | "classeId", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type StudentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type StudentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classe?: boolean | Prisma.ClasseDefaultArgs<ExtArgs>;
};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        classe: Prisma.$ClassePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        matricule: string;
        first_name: string;
        last_name1: string;
        gender: string;
        date_of_birth: Date;
        father_name: string | null;
        mother_name: string | null;
        tutor_phone_number: string | null;
        address: string | null;
        classeId: string;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentFieldRefs;
}
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classe<T extends Prisma.ClasseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClasseDefaultArgs<ExtArgs>>): Prisma.Prisma__ClasseClient<runtime.Types.Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentFieldRefs {
    readonly matricule: Prisma.FieldRef<"Student", 'String'>;
    readonly first_name: Prisma.FieldRef<"Student", 'String'>;
    readonly last_name1: Prisma.FieldRef<"Student", 'String'>;
    readonly gender: Prisma.FieldRef<"Student", 'String'>;
    readonly date_of_birth: Prisma.FieldRef<"Student", 'DateTime'>;
    readonly father_name: Prisma.FieldRef<"Student", 'String'>;
    readonly mother_name: Prisma.FieldRef<"Student", 'String'>;
    readonly tutor_phone_number: Prisma.FieldRef<"Student", 'String'>;
    readonly address: Prisma.FieldRef<"Student", 'String'>;
    readonly classeId: Prisma.FieldRef<"Student", 'String'>;
}
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
    include?: Prisma.StudentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
export {};
