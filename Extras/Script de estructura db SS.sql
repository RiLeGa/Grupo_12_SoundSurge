-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema soundsurge_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema soundsurge_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `soundsurge_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `soundsurge_db` ;

-- -----------------------------------------------------
-- Table `soundsurge_db`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`marcas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`marcas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`historiales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`historiales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `stock` INT NULL DEFAULT NULL,
  `precio` INT NULL DEFAULT NULL,
  `descuento` INT NULL DEFAULT NULL,
  `descripcion` VARCHAR(1000) NULL DEFAULT NULL,
  `categoriasId` INT NOT NULL,
  `marcasId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoriasId` (`categoriasId` ASC) VISIBLE,
  INDEX `marcasId` (`marcasId` ASC) VISIBLE,
  CONSTRAINT `historiales_ibfk_1`
    FOREIGN KEY (`categoriasId`)
    REFERENCES `soundsurge_db`.`categorias` (`id`),
  CONSTRAINT `historiales_ibfk_2`
    FOREIGN KEY (`marcasId`)
    REFERENCES `soundsurge_db`.`marcas` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`historialimagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`historialimagenes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `historialId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `historialId` (`historialId` ASC) VISIBLE,
  CONSTRAINT `historialimagenes_ibfk_1`
    FOREIGN KEY (`historialId`)
    REFERENCES `soundsurge_db`.`historiales` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `stock` INT NULL DEFAULT NULL,
  `precio` INT NULL DEFAULT NULL,
  `descuento` INT NULL DEFAULT NULL,
  `descripcion` VARCHAR(1000) NULL DEFAULT NULL,
  `categoriasId` INT NOT NULL,
  `marcasId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoriasId` (`categoriasId` ASC) VISIBLE,
  INDEX `marcasId` (`marcasId` ASC) VISIBLE,
  CONSTRAINT `productos_ibfk_1`
    FOREIGN KEY (`categoriasId`)
    REFERENCES `soundsurge_db`.`categorias` (`id`),
  CONSTRAINT `productos_ibfk_2`
    FOREIGN KEY (`marcasId`)
    REFERENCES `soundsurge_db`.`marcas` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`imagenes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `productosId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `productosId` (`productosId` ASC) VISIBLE,
  CONSTRAINT `imagenes_ibfk_1`
    FOREIGN KEY (`productosId`)
    REFERENCES `soundsurge_db`.`productos` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 49
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`sequelizemeta` (
  `name` VARCHAR(255) COLLATE 'utf8mb3_unicode_ci' NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `soundsurge_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `soundsurge_db`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `direccion` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `contrasenia` VARCHAR(255) NULL DEFAULT NULL,
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  `rolId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `rolId` (`rolId` ASC) VISIBLE,
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`rolId`)
    REFERENCES `soundsurge_db`.`roles` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
