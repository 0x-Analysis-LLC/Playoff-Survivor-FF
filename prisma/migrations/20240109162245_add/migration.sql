-- CreateTable
CREATE TABLE "NFLTeam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "nameCode" TEXT NOT NULL,
    "eliminated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "NFLTeam_pkey" PRIMARY KEY ("id")
);
