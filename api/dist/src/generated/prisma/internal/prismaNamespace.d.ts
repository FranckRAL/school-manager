import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly ScolaryYear: "ScolaryYear";
    readonly Level: "Level";
    readonly Classe: "Classe";
    readonly Student: "Student";
    readonly Subject: "Subject";
    readonly Teach: "Teach";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "scolaryYear" | "level" | "classe" | "student" | "subject" | "teach";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        ScolaryYear: {
            payload: Prisma.$ScolaryYearPayload<ExtArgs>;
            fields: Prisma.ScolaryYearFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ScolaryYearFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ScolaryYearFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>;
                };
                findFirst: {
                    args: Prisma.ScolaryYearFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ScolaryYearFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>;
                };
                findMany: {
                    args: Prisma.ScolaryYearFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>[];
                };
                create: {
                    args: Prisma.ScolaryYearCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>;
                };
                createMany: {
                    args: Prisma.ScolaryYearCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ScolaryYearCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>[];
                };
                delete: {
                    args: Prisma.ScolaryYearDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>;
                };
                update: {
                    args: Prisma.ScolaryYearUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>;
                };
                deleteMany: {
                    args: Prisma.ScolaryYearDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ScolaryYearUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ScolaryYearUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>[];
                };
                upsert: {
                    args: Prisma.ScolaryYearUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ScolaryYearPayload>;
                };
                aggregate: {
                    args: Prisma.ScolaryYearAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateScolaryYear>;
                };
                groupBy: {
                    args: Prisma.ScolaryYearGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ScolaryYearGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ScolaryYearCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ScolaryYearCountAggregateOutputType> | number;
                };
            };
        };
        Level: {
            payload: Prisma.$LevelPayload<ExtArgs>;
            fields: Prisma.LevelFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LevelFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                findFirst: {
                    args: Prisma.LevelFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                findMany: {
                    args: Prisma.LevelFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>[];
                };
                create: {
                    args: Prisma.LevelCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                createMany: {
                    args: Prisma.LevelCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>[];
                };
                delete: {
                    args: Prisma.LevelDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                update: {
                    args: Prisma.LevelUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                deleteMany: {
                    args: Prisma.LevelDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LevelUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>[];
                };
                upsert: {
                    args: Prisma.LevelUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                aggregate: {
                    args: Prisma.LevelAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLevel>;
                };
                groupBy: {
                    args: Prisma.LevelGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LevelGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LevelCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LevelCountAggregateOutputType> | number;
                };
            };
        };
        Classe: {
            payload: Prisma.$ClassePayload<ExtArgs>;
            fields: Prisma.ClasseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClasseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClasseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>;
                };
                findFirst: {
                    args: Prisma.ClasseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClasseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>;
                };
                findMany: {
                    args: Prisma.ClasseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>[];
                };
                create: {
                    args: Prisma.ClasseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>;
                };
                createMany: {
                    args: Prisma.ClasseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClasseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>[];
                };
                delete: {
                    args: Prisma.ClasseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>;
                };
                update: {
                    args: Prisma.ClasseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>;
                };
                deleteMany: {
                    args: Prisma.ClasseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClasseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClasseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>[];
                };
                upsert: {
                    args: Prisma.ClasseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassePayload>;
                };
                aggregate: {
                    args: Prisma.ClasseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClasse>;
                };
                groupBy: {
                    args: Prisma.ClasseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClasseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClasseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClasseCountAggregateOutputType> | number;
                };
            };
        };
        Student: {
            payload: Prisma.$StudentPayload<ExtArgs>;
            fields: Prisma.StudentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findFirst: {
                    args: Prisma.StudentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findMany: {
                    args: Prisma.StudentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                create: {
                    args: Prisma.StudentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                createMany: {
                    args: Prisma.StudentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                delete: {
                    args: Prisma.StudentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                update: {
                    args: Prisma.StudentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                upsert: {
                    args: Prisma.StudentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                aggregate: {
                    args: Prisma.StudentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudent>;
                };
                groupBy: {
                    args: Prisma.StudentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentCountAggregateOutputType> | number;
                };
            };
        };
        Subject: {
            payload: Prisma.$SubjectPayload<ExtArgs>;
            fields: Prisma.SubjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findMany: {
                    args: Prisma.SubjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                create: {
                    args: Prisma.SubjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                createMany: {
                    args: Prisma.SubjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                delete: {
                    args: Prisma.SubjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                update: {
                    args: Prisma.SubjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubject>;
                };
                groupBy: {
                    args: Prisma.SubjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectCountAggregateOutputType> | number;
                };
            };
        };
        Teach: {
            payload: Prisma.$TeachPayload<ExtArgs>;
            fields: Prisma.TeachFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeachFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeachFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>;
                };
                findFirst: {
                    args: Prisma.TeachFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeachFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>;
                };
                findMany: {
                    args: Prisma.TeachFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>[];
                };
                create: {
                    args: Prisma.TeachCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>;
                };
                createMany: {
                    args: Prisma.TeachCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeachCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>[];
                };
                delete: {
                    args: Prisma.TeachDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>;
                };
                update: {
                    args: Prisma.TeachUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>;
                };
                deleteMany: {
                    args: Prisma.TeachDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeachUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeachUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>[];
                };
                upsert: {
                    args: Prisma.TeachUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeachPayload>;
                };
                aggregate: {
                    args: Prisma.TeachAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeach>;
                };
                groupBy: {
                    args: Prisma.TeachGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeachGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeachCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeachCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumLevelCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LevelCategory'>;
export type ListEnumLevelCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LevelCategory[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    scolaryYear?: Prisma.ScolaryYearOmit;
    level?: Prisma.LevelOmit;
    classe?: Prisma.ClasseOmit;
    student?: Prisma.StudentOmit;
    subject?: Prisma.SubjectOmit;
    teach?: Prisma.TeachOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
