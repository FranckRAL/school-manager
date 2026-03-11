-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('ACTIVE', 'DROPPED', 'SUSPENDED');

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "max_student" INTEGER NOT NULL DEFAULT 30,
ADD COLUMN     "status" "EnrollmentStatus" NOT NULL DEFAULT 'ACTIVE';
