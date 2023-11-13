-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para futuroco
CREATE DATABASE IF NOT EXISTS `futuroco` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `futuroco`;

-- Volcando estructura para tabla futuroco.answer
CREATE TABLE IF NOT EXISTS `answer` (
  `answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `answer_value` text NOT NULL,
  `answer_createdAt` timestamp NULL DEFAULT NULL,
  `answer_updatedAt` timestamp NULL DEFAULT NULL,
  `answer_deletedAt` timestamp NULL DEFAULT NULL,
  `participante_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `FK_answer_question` (`question_id`),
  KEY `FK_answer_participante` (`participante_id`),
  CONSTRAINT `FK_answer_participante` FOREIGN KEY (`participante_id`) REFERENCES `participante` (`participante_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_answer_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.company
CREATE TABLE IF NOT EXISTS `company` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(150) NOT NULL,
  `company_description` text NOT NULL,
  `company_address` text NOT NULL,
  `company_code` varchar(50) DEFAULT NULL,
  `company_createdAt` timestamp NULL DEFAULT NULL,
  `company_updatedAt` timestamp NULL DEFAULT NULL,
  `company_deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.entity
CREATE TABLE IF NOT EXISTS `entity` (
  `entity_id` int(11) NOT NULL,
  `entity_name` varchar(200) DEFAULT NULL,
  `entity_city` varchar(50) DEFAULT NULL,
  `entity_address` text DEFAULT NULL,
  `entity_representative_name` varchar(150) DEFAULT NULL,
  `entity_representative_mail` varchar(150) DEFAULT NULL,
  `entity_representative_phone` varchar(150) DEFAULT NULL,
  `participante_id` int(11) NOT NULL,
  PRIMARY KEY (`entity_id`),
  KEY `FK__participante` (`participante_id`),
  CONSTRAINT `FK__participante` FOREIGN KEY (`participante_id`) REFERENCES `participante` (`participante_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.form
CREATE TABLE IF NOT EXISTS `form` (
  `form_id` int(11) NOT NULL AUTO_INCREMENT,
  `form_name` varchar(200) NOT NULL,
  `form_description` text NOT NULL,
  `form_departamento` varchar(150) NOT NULL,
  `form_type` varchar(150) NOT NULL,
  `form_createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `form_updatedAt` timestamp NULL DEFAULT NULL,
  `form_deletedAt` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`form_id`),
  KEY `FK_form_user` (`user_id`),
  CONSTRAINT `FK_form_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.institutionalization_history
CREATE TABLE IF NOT EXISTS `institutionalization_history` (
  `history_id` int(11) NOT NULL AUTO_INCREMENT,
  `history_acommodation_time` varchar(50) NOT NULL,
  `history_previous_acommodation` varchar(100) NOT NULL,
  `history_previous_ethos` varchar(100) NOT NULL,
  `history_quantity_programs` text NOT NULL,
  `history_nohome_state` varchar(50) NOT NULL,
  `history_assault_state` varchar(50) NOT NULL,
  `history_social_profile` text NOT NULL,
  `history_problematic` varchar(50) NOT NULL,
  `history_entity` varchar(100) NOT NULL,
  `history_register_date` varchar(100) NOT NULL,
  `history_updown_date` varchar(100) NOT NULL,
  `history_updown_reason` varchar(100) NOT NULL,
  `participante_id` int(11) NOT NULL,
  PRIMARY KEY (`history_id`),
  KEY `FK_institutionalization_history_participante` (`participante_id`),
  CONSTRAINT `FK_institutionalization_history_participante` FOREIGN KEY (`participante_id`) REFERENCES `participante` (`participante_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.participante
CREATE TABLE IF NOT EXISTS `participante` (
  `participante_id` int(11) NOT NULL AUTO_INCREMENT,
  `participante_name` varchar(150) NOT NULL,
  `participante_lastname` varchar(150) DEFAULT NULL,
  `participante_second_surname` varchar(150) DEFAULT NULL,
  `participante_birthday` datetime DEFAULT NULL,
  `participante_age` int(11) DEFAULT NULL,
  `participante_mail` varchar(150) DEFAULT NULL,
  `participante_phone` varchar(50) DEFAULT NULL,
  `participante_code` varchar(50) DEFAULT NULL,
  `participante_gender` varchar(50) DEFAULT NULL,
  `participante_nationality` varchar(50) DEFAULT NULL,
  `participante_language` varchar(50) DEFAULT NULL,
  `participante_scholarship` varchar(50) DEFAULT NULL,
  `participante_createdAt` timestamp NULL DEFAULT NULL,
  `participante_updatedAt` timestamp NULL DEFAULT NULL,
  `participante_deletedAt` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`participante_id`),
  KEY `FK_participante_user` (`user_id`),
  CONSTRAINT `FK_participante_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.question
CREATE TABLE IF NOT EXISTS `question` (
  `question_id` int(11) NOT NULL,
  `question_text` text NOT NULL,
  `question_type` varchar(100) DEFAULT 'text',
  `question_options` text DEFAULT NULL,
  `question_createdAt` timestamp NULL DEFAULT NULL,
  `question_updatedAt` timestamp NULL DEFAULT NULL,
  `question_deletedAt` timestamp NULL DEFAULT NULL,
  `form_id` int(11) NOT NULL,
  PRIMARY KEY (`question_id`),
  KEY `FK__form` (`form_id`),
  CONSTRAINT `FK__form` FOREIGN KEY (`form_id`) REFERENCES `form` (`form_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.role
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) NOT NULL,
  `role_description` text NOT NULL,
  `role_createdAt` timestamp NULL DEFAULT NULL,
  `role_updatedAt` timestamp NULL DEFAULT NULL,
  `role_deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla futuroco.user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(150) NOT NULL,
  `user_lastName` varchar(150) NOT NULL,
  `user_mail` varchar(150) NOT NULL,
  `user_password` varchar(150) NOT NULL,
  `user_avatar` varchar(150) DEFAULT NULL,
  `user_birthday` date DEFAULT NULL,
  `user_createdAt` timestamp NULL DEFAULT NULL,
  `user_updatedAt` timestamp NULL DEFAULT NULL,
  `user_deletedAt` timestamp NULL DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FK_user_role` (`role_id`),
  KEY `FK_user_company` (`company_id`),
  CONSTRAINT `FK_user_company` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_user_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
