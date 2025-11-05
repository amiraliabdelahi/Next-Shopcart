-- DropForeignKey
ALTER TABLE `shopitem` DROP FOREIGN KEY `Shopitem_cardId_fkey`;

-- DropForeignKey
ALTER TABLE `shopitem` DROP FOREIGN KEY `Shopitem_userId_fkey`;

-- DropIndex
DROP INDEX `Shopitem_userId_fkey` ON `shopitem`;

-- AlterTable
ALTER TABLE `card` MODIFY `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `shopitem` MODIFY `amount` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `shopitem` ADD CONSTRAINT `Shopitem_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `card`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RedefineIndex
CREATE UNIQUE INDEX `email` ON `user`(`email`);
DROP INDEX `User_email_key` ON `user`;
