-- CreateTable
CREATE TABLE "userInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAd" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userInfo_email_key" ON "userInfo"("email");
