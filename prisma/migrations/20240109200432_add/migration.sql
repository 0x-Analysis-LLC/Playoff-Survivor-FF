/*
  Warnings:

  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `playerID` on the `Player` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_playerID_fkey";

-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
DROP COLUMN "playerID",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "pastScores" SET DEFAULT '{"wildcard": 0, "divisional": 0, "conference": 0, "superbowl": 0}',
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_playerID_fkey" FOREIGN KEY ("playerID") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
