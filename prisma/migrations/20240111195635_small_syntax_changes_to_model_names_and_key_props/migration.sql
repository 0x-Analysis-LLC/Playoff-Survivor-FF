/*
  Warnings:

  - You are about to drop the column `defensiveFumbles` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `defensiveInterceptions` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `fieldGoals_0_39` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `fieldGoals_40_49` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `fieldGoals_50_plus` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `missedFieldGoals` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `twoPtConversions` on the `Stats` table. All the data in the column will be lost.
  - You are about to alter the column `passTDs` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `interceptions` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `rushTDs` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `fumbles` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `receptions` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `recTDs` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `returnTDs` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `pointsAllowed` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `missedXPs` on the `Stats` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the `NFLTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_teamId_fkey";

-- AlterTable
ALTER TABLE "Stats" DROP COLUMN "defensiveFumbles",
DROP COLUMN "defensiveInterceptions",
DROP COLUMN "fieldGoals_0_39",
DROP COLUMN "fieldGoals_40_49",
DROP COLUMN "fieldGoals_50_plus",
DROP COLUMN "missedFieldGoals",
DROP COLUMN "twoPtConversions",
ADD COLUMN     "FGs_0_39" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "FGs_40_49" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "FGs_50_plus" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "defFumbles" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "defInt" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "missedFGs" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "twoPtConv" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "passTDs" SET DEFAULT 0,
ALTER COLUMN "passTDs" SET DATA TYPE INTEGER,
ALTER COLUMN "interceptions" SET DEFAULT 0,
ALTER COLUMN "interceptions" SET DATA TYPE INTEGER,
ALTER COLUMN "rushTDs" SET DEFAULT 0,
ALTER COLUMN "rushTDs" SET DATA TYPE INTEGER,
ALTER COLUMN "fumbles" SET DEFAULT 0,
ALTER COLUMN "fumbles" SET DATA TYPE INTEGER,
ALTER COLUMN "receptions" SET DEFAULT 0,
ALTER COLUMN "receptions" SET DATA TYPE INTEGER,
ALTER COLUMN "recTDs" SET DEFAULT 0,
ALTER COLUMN "recTDs" SET DATA TYPE INTEGER,
ALTER COLUMN "returnTDs" SET DEFAULT 0,
ALTER COLUMN "returnTDs" SET DATA TYPE INTEGER,
ALTER COLUMN "pointsAllowed" SET DEFAULT 0,
ALTER COLUMN "pointsAllowed" SET DATA TYPE INTEGER,
ALTER COLUMN "missedXPs" SET DEFAULT 0,
ALTER COLUMN "missedXPs" SET DATA TYPE INTEGER;

-- DropTable
DROP TABLE "NFLTeam";

-- CreateTable
CREATE TABLE "NflTeam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "nameCode" TEXT NOT NULL,
    "US_FB_ID" INTEGER NOT NULL,
    "gameInfo" TEXT NOT NULL DEFAULT 'TBD',
    "gameTime" TEXT NOT NULL DEFAULT 'TBD',
    "seed" INTEGER NOT NULL,
    "eliminated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "NflTeam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NflTeam_US_FB_ID_key" ON "NflTeam"("US_FB_ID");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "NflTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
