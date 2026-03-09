/*
  Warnings:

  - Added the required column `category` to the `Level` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LevelCategory" AS ENUM ('PRIMAIRE', 'SECONDAIRE', 'LYCEE');

-- AlterTable
ALTER TABLE "Level" ADD COLUMN     "category" "LevelCategory" NOT NULL;
