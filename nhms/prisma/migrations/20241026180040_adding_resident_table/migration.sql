-- CreateTable
CREATE TABLE `Resident` (
    `ResidentID` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`ResidentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
