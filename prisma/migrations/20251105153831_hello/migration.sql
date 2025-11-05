-- DropForeignKey
ALTER TABLE `shopitem` DROP FOREIGN KEY `Shopitem_cardId_fkey`;

-- AddForeignKey
ALTER TABLE `shopitem` ADD CONSTRAINT `shopitem_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `card`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shopitem` ADD CONSTRAINT `shopitem_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
