/*
  Warnings:

  - Added the required column `title` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."News" ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
