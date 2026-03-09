-- CreateTable
CREATE TABLE "ScolaryYear" (
    "id" TEXT NOT NULL,
    "start_year" TIMESTAMP(3) NOT NULL,
    "end_year" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScolaryYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "levelId" TEXT NOT NULL,
    "scolaryYearId" TEXT NOT NULL,

    CONSTRAINT "Classe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "matricule" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name1" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "father_name" TEXT,
    "mother_name" TEXT,
    "tutor_phone_number" TEXT,
    "address" TEXT,
    "classeId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("matricule")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teach" (
    "id" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "classeId" TEXT NOT NULL,
    "coefficient" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "duration_total" INTEGER NOT NULL,

    CONSTRAINT "Teach_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Classe" ADD CONSTRAINT "Classe_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classe" ADD CONSTRAINT "Classe_scolaryYearId_fkey" FOREIGN KEY ("scolaryYearId") REFERENCES "ScolaryYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teach" ADD CONSTRAINT "Teach_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teach" ADD CONSTRAINT "Teach_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
