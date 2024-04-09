/*
  Warnings:

  - Added the required column `message` to the `Patients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patients" ADD COLUMN     "appoinmentDate" TIMESTAMP(3),
ADD COLUMN     "message" TEXT NOT NULL;
