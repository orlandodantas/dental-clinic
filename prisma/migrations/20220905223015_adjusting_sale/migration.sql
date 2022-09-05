/*
  Warnings:

  - You are about to drop the column `amount` on the `sale_items` table. All the data in the column will be lost.
  - Added the required column `total_value` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts_receivable" ALTER COLUMN "receiving_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "sale_items" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "total_value" DOUBLE PRECISION NOT NULL;
