/*
  Warnings:

  - You are about to drop the column `gameInfo` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `gameTime` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `team` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `teamSeed` on the `Player` table. All the data in the column will be lost.
  - Added the required column `gameInfo` to the `NFLTeam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameTime` to the `NFLTeam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seed` to the `NFLTeam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NFLTeam" ADD COLUMN     "gameInfo" TEXT NOT NULL,
ADD COLUMN     "gameTime" TEXT NOT NULL,
ADD COLUMN     "seed" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "gameInfo",
DROP COLUMN "gameTime",
DROP COLUMN "team",
DROP COLUMN "teamSeed",
ADD COLUMN     "teamId" INTEGER NOT NULL,
ALTER COLUMN "pointsScored" SET DEFAULT 0.0;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "NFLTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
