/*
  Warnings:

  - Added the required column `US_FB_ID` to the `NFLTeam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NFLTeam" ADD COLUMN     "US_FB_ID" INTEGER NOT NULL;
