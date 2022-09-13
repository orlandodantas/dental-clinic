/*
  Warnings:

  - You are about to drop the column `portion` on the `accounts_receivable` table. All the data in the column will be lost.
  - Added the required column `expiration_date` to the `accounts_receivable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts_receivable" DROP COLUMN "portion",
ADD COLUMN     "expiration_date" TIMESTAMP(3) NOT NULL;
