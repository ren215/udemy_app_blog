/*
  Warnings:

  - You are about to drop the column `name` on the `userInfo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAd" DATETIME NOT NULL
);
INSERT INTO "new_userInfo" ("createAd", "email", "id", "password", "updatedAd") SELECT "createAd", "email", "id", "password", "updatedAd" FROM "userInfo";
DROP TABLE "userInfo";
ALTER TABLE "new_userInfo" RENAME TO "userInfo";
CREATE UNIQUE INDEX "userInfo_email_key" ON "userInfo"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
