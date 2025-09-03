/*
  Warnings:

  - Added the required column `publishedAt` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."News" ADD COLUMN     "publishedAt" TIMESTAMP(3) NOT NULL;
