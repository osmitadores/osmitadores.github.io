-- MySQL Script generated by MySQL Workbench
-- 07/09/15 01:40:45
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema scout_camp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema scout_camp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `scout_camp` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `scout_camp` ;

-- -----------------------------------------------------
-- Table `scout_camp`.`Badge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scout_camp`.`Badge` (
  `badge_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nome` VARCHAR(250) NOT NULL DEFAULT 'Sem nome' COMMENT '',
  `img` VARCHAR(45) NOT NULL DEFAULT 'badge' COMMENT '',
  `description` VARCHAR(250) NULL DEFAULT 'Sem descrição' COMMENT '',
  `obtain` TINYINT(1) NULL DEFAULT 1 COMMENT '',
  `titulo` VARCHAR(250) NOT NULL DEFAULT 'Sem título' COMMENT '',
  `score` INT NULL DEFAULT 0 COMMENT '',
  `type` SMALLINT(6) NOT NULL COMMENT '',
  PRIMARY KEY (`badge_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scout_camp`.`Crest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scout_camp`.`Crest` (
  `crest_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nome` VARCHAR(250) NOT NULL DEFAULT 'Sem nome' COMMENT '',
  `img` VARCHAR(45) NOT NULL DEFAULT 'badge' COMMENT '',
  `description` VARCHAR(250) NULL DEFAULT 'Sem descrição' COMMENT '',
  `titulo` VARCHAR(250) NOT NULL DEFAULT 'Sem título' COMMENT '',
  PRIMARY KEY (`crest_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scout_camp`.`Member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scout_camp`.`Member` (
  `face_id` VARCHAR(25) NOT NULL DEFAULT '457676144377257' COMMENT '',
  `usual_name` VARCHAR(45) NOT NULL COMMENT '',
  `full_name` VARCHAR(250) NOT NULL COMMENT '',
  `alias` VARCHAR(250) NOT NULL COMMENT '',
  `skill` VARCHAR(45) NULL DEFAULT 'Sem skill' COMMENT '',
  `race` VARCHAR(45) NULL DEFAULT 'Humana' COMMENT '',
  `blood` VARCHAR(45) NULL DEFAULT 'Azul' COMMENT '',
  `birth` DATE NOT NULL COMMENT '',
  `join_date` DATE NOT NULL COMMENT '',
  `Crest_crest_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`face_id`, `Crest_crest_id`)  COMMENT '',
  INDEX `fk_Member_Crest_idx` (`Crest_crest_id` ASC)  COMMENT '',
  CONSTRAINT `fk_Member_Crest`
    FOREIGN KEY (`Crest_crest_id`)
    REFERENCES `scout_camp`.`Crest` (`crest_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scout_camp`.`Tier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scout_camp`.`Tier` (
  `tier_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nome` VARCHAR(250) NOT NULL DEFAULT 'Sem nome' COMMENT '',
  `img` VARCHAR(45) NOT NULL DEFAULT 'badge' COMMENT '',
  `description` VARCHAR(250) NULL DEFAULT 'Sem descrição' COMMENT '',
  `titulo` VARCHAR(250) NOT NULL DEFAULT 'Sem título' COMMENT '',
  `level` INT NULL DEFAULT 0 COMMENT '',
  PRIMARY KEY (`tier_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scout_camp`.`Member_has_Tier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scout_camp`.`Member_has_Tier` (
  `Member_face_id` VARCHAR(25) NOT NULL COMMENT '',
  `Member_Crest_crest_id` INT NOT NULL COMMENT '',
  `Tier_tier_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`Member_face_id`, `Member_Crest_crest_id`, `Tier_tier_id`)  COMMENT '',
  INDEX `fk_Member_has_Tier_Tier1_idx` (`Tier_tier_id` ASC)  COMMENT '',
  INDEX `fk_Member_has_Tier_Member1_idx` (`Member_face_id` ASC, `Member_Crest_crest_id` ASC)  COMMENT '',
  CONSTRAINT `fk_Member_has_Tier_Member1`
    FOREIGN KEY (`Member_face_id` , `Member_Crest_crest_id`)
    REFERENCES `scout_camp`.`Member` (`face_id` , `Crest_crest_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Member_has_Tier_Tier1`
    FOREIGN KEY (`Tier_tier_id`)
    REFERENCES `scout_camp`.`Tier` (`tier_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scout_camp`.`Member_has_Badge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scout_camp`.`Member_has_Badge` (
  `Member_face_id` VARCHAR(25) NOT NULL COMMENT '',
  `Member_Crest_crest_id` INT NOT NULL COMMENT '',
  `Badge_badge_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`Member_face_id`, `Member_Crest_crest_id`, `Badge_badge_id`)  COMMENT '',
  INDEX `fk_Member_has_Badge_Badge1_idx` (`Badge_badge_id` ASC)  COMMENT '',
  INDEX `fk_Member_has_Badge_Member1_idx` (`Member_face_id` ASC, `Member_Crest_crest_id` ASC)  COMMENT '',
  CONSTRAINT `fk_Member_has_Badge_Member1`
    FOREIGN KEY (`Member_face_id` , `Member_Crest_crest_id`)
    REFERENCES `scout_camp`.`Member` (`face_id` , `Crest_crest_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Member_has_Badge_Badge1`
    FOREIGN KEY (`Badge_badge_id`)
    REFERENCES `scout_camp`.`Badge` (`badge_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
