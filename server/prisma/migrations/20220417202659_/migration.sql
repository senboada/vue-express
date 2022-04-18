-- AlterTable
ALTER TABLE `Task` MODIFY `status` ENUM('active', 'deleted') NOT NULL DEFAULT 'active';
