import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly ScolaryYear: "ScolaryYear";
    readonly Level: "Level";
    readonly Classe: "Classe";
    readonly Student: "Student";
    readonly Subject: "Subject";
    readonly Teach: "Teach";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ScolaryYearScalarFieldEnum: {
    readonly id: "id";
    readonly start_year: "start_year";
    readonly end_year: "end_year";
    readonly is_active: "is_active";
};
export type ScolaryYearScalarFieldEnum = (typeof ScolaryYearScalarFieldEnum)[keyof typeof ScolaryYearScalarFieldEnum];
export declare const LevelScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly category: "category";
};
export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum];
export declare const ClasseScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly levelId: "levelId";
    readonly scolaryYearId: "scolaryYearId";
};
export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly matricule: "matricule";
    readonly first_name: "first_name";
    readonly last_name1: "last_name1";
    readonly gender: "gender";
    readonly date_of_birth: "date_of_birth";
    readonly father_name: "father_name";
    readonly mother_name: "mother_name";
    readonly tutor_phone_number: "tutor_phone_number";
    readonly address: "address";
    readonly classeId: "classeId";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const TeachScalarFieldEnum: {
    readonly id: "id";
    readonly subjectId: "subjectId";
    readonly classeId: "classeId";
    readonly coefficient: "coefficient";
    readonly duration_total: "duration_total";
};
export type TeachScalarFieldEnum = (typeof TeachScalarFieldEnum)[keyof typeof TeachScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
