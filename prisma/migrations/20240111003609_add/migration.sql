/*
  Warnings:

  - A unique constraint covering the columns `[US_FB_ID]` on the table `NFLTeam` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NFLTeam_US_FB_ID_key" ON "NFLTeam"("US_FB_ID");
