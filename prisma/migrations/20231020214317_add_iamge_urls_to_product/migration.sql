/*
  Warnings:

  - You are about to drop the column `baseprice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `discountPercent` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "baseprice",
DROP COLUMN "discountPercent",
DROP COLUMN "imageUrl",
ADD COLUMN     "basePrice" DECIMAL(8,2) NOT NULL,
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "imageUrls" TEXT[];
