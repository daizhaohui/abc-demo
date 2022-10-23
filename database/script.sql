# ************************************************************
# Sequel Ace SQL dump
# Version 20036
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.26)
# Database: demo
# Generation Time: 2022-10-23 07:38:46 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table area
# ------------------------------------------------------------

DROP TABLE IF EXISTS `area`;

CREATE TABLE `area` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `code` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;

INSERT INTO `area` (`id`, `name`, `code`)
VALUES
	(1,'上海','01'),
	(2,'香港','02');

/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `code` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `parent_code` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`id`, `name`, `code`, `parent_code`)
VALUES
	(1,'分类1','01',NULL),
	(2,'分类2','02',NULL),
	(3,'分类3','03',NULL);

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table line
# ------------------------------------------------------------

DROP TABLE IF EXISTS `line`;

CREATE TABLE `line` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `code` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `area_code` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `line` WRITE;
/*!40000 ALTER TABLE `line` DISABLE KEYS */;

INSERT INTO `line` (`id`, `name`, `code`, `area_code`)
VALUES
	(1,'地铁1号','001','01'),
	(2,'地铁2号','002','01'),
	(3,'地铁3号','003','01'),
	(4,'地铁1号','001','02'),
	(5,'地铁2号','002','02'),
	(6,'地铁4号','004','01'),
	(7,'地铁5号','005','01'),
	(8,'地铁6号','006','01'),
	(9,'地铁3号','003','02'),
	(10,'地铁4号','004','02'),
	(11,'地铁5号','005','02');

/*!40000 ALTER TABLE `line` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table picture
# ------------------------------------------------------------

DROP TABLE IF EXISTS `picture`;

CREATE TABLE `picture` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime NOT NULL COMMENT 'Create Time',
  `area` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `thumbnail` varchar(1000) DEFAULT NULL,
  `labeled` tinyint(1) NOT NULL DEFAULT '0',
  `category` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `label` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `line` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `station` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `key` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;

INSERT INTO `picture` (`id`, `create_time`, `area`, `title`, `url`, `thumbnail`, `labeled`, `category`, `label`, `line`, `station`, `key`)
VALUES
	(8,'2022-10-23 10:50:55','01','图片1','https://daizhaohui-abc-demo.s3.amazonaws.com/7e39cbe0-527d-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.amazonaws.com/7e39cbe0-527d-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(9,'2022-10-23 10:53:45','01','图片2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e6e96b00-527d-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e6e96b00-527d-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(10,'2022-10-23 11:17:46','01','地铁站图片1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/41349fa0-5281-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/41349fa0-5281-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(11,'2022-10-23 11:18:50','01','上海地铁站图片1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/683adba0-5281-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/683adba0-5281-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(12,'2022-10-23 11:19:20','01','上海地铁站图片2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7a807090-5281-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7a807090-5281-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(13,'2022-10-23 11:20:30','01','上海地铁图片3','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a25b3aa0-5281-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a25b3aa0-5281-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(14,'2022-10-23 11:20:51','01','上海地铁站图片x','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b0b7d590-5281-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b0b7d590-5281-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(15,'2022-10-23 11:21:47','01','上海地铁站图片y','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d01f3b80-5281-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d01f3b80-5281-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(16,'2022-10-23 11:22:14','01','上海地铁站图片2-1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e211f580-5281-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e211f580-5281-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(17,'2022-10-23 11:23:36','01','上海地铁站图片x2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/13477670-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/13477670-5282-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(18,'2022-10-23 11:24:01','01','上海地铁站图片c1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/21921000-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/21921000-5282-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(19,'2022-10-23 11:24:35','01','上海地铁站图片c3','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/305ed1e0-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/305ed1e0-5282-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(20,'2022-10-23 11:25:36','01','上海地铁站图片d1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/5a7274f0-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/5a7274f0-5282-11ed-b0c9-271276c6669d',0,'','','001','0004',''),
	(21,'2022-10-23 11:26:04','01','上海地铁站图片d5','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/6718fb70-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/6718fb70-5282-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(22,'2022-10-23 11:26:37','01','上海地铁站图片5','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7e50bd00-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7e50bd00-5282-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(23,'2022-10-23 11:26:59','01','上海地铁站图片6','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/8c7fb840-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/8c7fb840-5282-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(24,'2022-10-23 11:27:22','01','上海地铁站图片24','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/99b2a040-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/99b2a040-5282-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(25,'2022-10-23 11:27:51','01','上海地铁站图片25','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/aa9f0dd0-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/aa9f0dd0-5282-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(26,'2022-10-23 11:28:18','01','上海地铁站图片x26','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ba6ac920-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ba6ac920-5282-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(27,'2022-10-23 11:28:35','01','上海地铁站图片28','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c5b4a5d0-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c5b4a5d0-5282-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(28,'2022-10-23 11:29:01','01','上海地铁站图片29','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d4f4c2f0-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d4f4c2f0-5282-11ed-b0c9-271276c6669d',0,'','','001','0005',''),
	(29,'2022-10-23 11:29:25','01','上海地铁站图片30','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e1e39d10-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e1e39d10-5282-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(30,'2022-10-23 11:29:47','01','上海地铁站图片2-10','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ef74aaa0-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ef74aaa0-5282-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(31,'2022-10-23 11:30:08','01','上海地铁站图片3-1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/fce29fd0-5282-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/fce29fd0-5282-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(32,'2022-10-23 11:30:33','01','上海地铁站图片34','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/08fac900-5283-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/08fac900-5283-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(33,'2022-10-23 11:31:24','01','上海地铁站图片35','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/29ba1dd0-5283-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/29ba1dd0-5283-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(34,'2022-10-23 11:32:03','01','上海地铁站图片36','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3feccb70-5283-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3feccb70-5283-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(35,'2022-10-23 11:37:06','01','上海地铁站图片3-1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f610e850-5283-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f610e850-5283-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(36,'2022-10-23 11:37:36','01','上海地铁站图片40','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/082274f0-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/082274f0-5284-11ed-b0c9-271276c6669d',0,'','','003','0002',''),
	(37,'2022-10-23 11:38:05','01','上海地铁站图片3-2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/19180a40-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/19180a40-5284-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(38,'2022-10-23 11:38:49','01','上海地铁站图片3-10','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2d1e13e0-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2d1e13e0-5284-11ed-b0c9-271276c6669d',0,'','','003','0002',''),
	(39,'2022-10-23 11:39:37','01','上海地铁站图片y111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4f785400-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4f785400-5284-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(40,'2022-10-23 11:40:05','01','上海地铁站图片a1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/610dabc0-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/610dabc0-5284-11ed-b0c9-271276c6669d',0,'','','001','0004',''),
	(41,'2022-10-23 11:40:39','01','上海地铁站图片b2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/74661040-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/74661040-5284-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(42,'2022-10-23 11:40:59','01','上海地铁站图片50','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/80a91a00-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/80a91a00-5284-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(43,'2022-10-23 11:41:35','01','上海地铁站图片51','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/95e559b0-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/95e559b0-5284-11ed-b0c9-271276c6669d',0,'','','001','0005',''),
	(44,'2022-10-23 11:42:00','01','上海地铁站图片52','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a34badc0-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a34badc0-5284-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(45,'2022-10-23 11:42:22','01','上海地铁站图片z1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b2409110-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b2409110-5284-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(46,'2022-10-23 11:42:50','01','上海地铁站图片f1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c1a52620-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c1a52620-5284-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(47,'2022-10-23 11:44:01','01','上海地铁站图片u1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ed1db060-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ed1db060-5284-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(48,'2022-10-23 11:44:24','01','上海地铁站图片59','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/facb46a0-5284-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/facb46a0-5284-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(49,'2022-10-23 11:44:52','01','上海地铁站图片60','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0bc325e0-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0bc325e0-5285-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(50,'2022-10-23 11:45:21','01','上海地铁站图片61','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/1cb20470-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/1cb20470-5285-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(51,'2022-10-23 11:45:39','01','上海地铁站图片62','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/278a3390-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/278a3390-5285-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(52,'2022-10-23 11:46:01','01','上海地铁站图片63','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/34365f60-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/34365f60-5285-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(53,'2022-10-23 11:46:19','01','上海地铁站图片63','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3f716f00-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3f716f00-5285-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(54,'2022-10-23 11:46:41','01','上海地铁站图片65','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4c7f42d0-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4c7f42d0-5285-11ed-b0c9-271276c6669d',0,'','','003','0002',''),
	(55,'2022-10-23 11:47:21','01','上海地铁站图片t1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/63eb0cb0-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/63eb0cb0-5285-11ed-b0c9-271276c6669d',0,'','','003','0002',''),
	(56,'2022-10-23 11:49:37','01','上海地铁站图片r1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b546afb0-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b546afb0-5285-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(57,'2022-10-23 11:50:07','01','上海地铁站图片p1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c79ff3b0-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c79ff3b0-5285-11ed-b0c9-271276c6669d',0,'','','003','0002',''),
	(58,'2022-10-23 11:50:42','01','上海地铁站图片70','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/dc1253b0-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/dc1253b0-5285-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(59,'2022-10-23 11:51:05','01','上海地铁站图片72','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ea2c4050-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ea2c4050-5285-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(60,'2022-10-23 11:51:30','01','上海地铁站图片74','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f89696e0-5285-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f89696e0-5285-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(61,'2022-10-23 11:52:01','01','上海地铁站图片87','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0b138f80-5286-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0b138f80-5286-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(62,'2022-10-23 11:52:21','01','上海地铁站图片i1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/17322150-5286-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/17322150-5286-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(63,'2022-10-23 11:52:45','01','上海地铁站图片80','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2530bdc0-5286-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2530bdc0-5286-11ed-b0c9-271276c6669d',0,'','','001','0005',''),
	(64,'2022-10-23 12:05:02','02','香港地铁站1-1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/dd08afb0-5287-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/dd08afb0-5287-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(65,'2022-10-23 12:05:19','02','香港地铁站x1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e6b1d4b0-5287-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e6b1d4b0-5287-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(66,'2022-10-23 12:05:45','02','香港地铁站h1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f65658f0-5287-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f65658f0-5287-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(67,'2022-10-23 12:06:14','02','香港地铁站m1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/06e25700-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/06e25700-5288-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(68,'2022-10-23 12:06:30','02','香港地铁站m2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/10ecd5e0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/10ecd5e0-5288-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(69,'2022-10-23 12:06:51','02','香港地铁站t1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/1d712e60-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/1d712e60-5288-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(70,'2022-10-23 12:07:18','02','香港地铁站y12','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2dc860d0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2dc860d0-5288-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(71,'2022-10-23 12:07:40','02','香港地铁站h222','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3a2a1620-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3a2a1620-5288-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(72,'2022-10-23 12:07:56','02','香港地铁站m7','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/44bde940-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/44bde940-5288-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(73,'2022-10-23 12:08:17','02','香港地铁站u1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4ffd8cc0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4ffd8cc0-5288-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(74,'2022-10-23 12:08:47','02','香港地铁站p1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/62deec80-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/62deec80-5288-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(75,'2022-10-23 12:09:08','02','香港地铁站31','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/6f2ccbb0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/6f2ccbb0-5288-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(76,'2022-10-23 12:09:30','02','香港地铁站k1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7bc855b0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7bc855b0-5288-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(77,'2022-10-23 12:09:56','02','香港地铁站c1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/8c196da0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/8c196da0-5288-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(78,'2022-10-23 12:10:14','02','香港地铁站n1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/96f175b0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/96f175b0-5288-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(79,'2022-10-23 12:10:31','02','香港地铁站n2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a13d9170-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a13d9170-5288-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(80,'2022-10-23 12:10:50','02','香港地铁站n2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/abf3e0b0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/abf3e0b0-5288-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(81,'2022-10-23 12:11:17','02','香港地铁站n2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/bb0d3bf0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/bb0d3bf0-5288-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(82,'2022-10-23 12:11:34','02','香港地铁站n6','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c6aa1aa0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c6aa1aa0-5288-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(83,'2022-10-23 12:11:56','02','香港地铁站n6','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d2ea3e30-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d2ea3e30-5288-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(84,'2022-10-23 12:12:21','02','香港地铁站xy1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e2b89190-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e2b89190-5288-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(85,'2022-10-23 12:12:37','02','香港地铁站xy2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ebde2eb0-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ebde2eb0-5288-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(86,'2022-10-23 12:12:58','02','香港地铁站xy3','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f80d6250-5288-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/f80d6250-5288-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(87,'2022-10-23 12:13:26','02','香港地铁站re','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/098c4be0-5289-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/098c4be0-5289-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(88,'2022-10-23 12:13:52','02','香港地铁站r111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/179f81c0-5289-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/179f81c0-5289-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(89,'2022-10-23 12:14:15','02','香港地铁站p1111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/25e2c850-5289-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/25e2c850-5289-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(90,'2022-10-23 12:14:39','02','香港地铁站mn1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/34260ee0-5289-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/34260ee0-5289-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(91,'2022-10-23 12:14:59','02','香港地铁站41','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3fcba020-5289-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3fcba020-5289-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(92,'2022-10-23 12:15:20','02','香港地铁站51','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4c9d5550-5289-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4c9d5550-5289-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(93,'2022-10-23 12:15:35','02','香港地铁站mb1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/562e5e70-5289-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/562e5e70-5289-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(94,'2022-10-23 12:57:01','01','上海地铁站图片g1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/205166c0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/205166c0-528f-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(95,'2022-10-23 12:57:32','01','上海地铁站图片v1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3258e140-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3258e140-528f-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(96,'2022-10-23 12:57:53','01','上海地铁站图片v3','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3eb120b0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3eb120b0-528f-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(97,'2022-10-23 12:58:12','01','上海地铁站图片v2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/49c8c9d0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/49c8c9d0-528f-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(98,'2022-10-23 12:58:49','01','上海地铁站图片v6','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/60053b70-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/60053b70-528f-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(99,'2022-10-23 12:59:17','01','上海地铁站图片o1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/715f5ef0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/715f5ef0-528f-11ed-b0c9-271276c6669d',0,'','','001','0004',''),
	(100,'2022-10-23 12:59:44','01','上海地铁站图片aw1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/817d0ad0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/817d0ad0-528f-11ed-b0c9-271276c6669d',0,'','','001','0005',''),
	(101,'2022-10-23 13:00:00','01','上海地铁站图片aw2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/8add18e0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/8add18e0-528f-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(102,'2022-10-23 13:00:22','01','上海地铁站图片ah1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/97bf48d0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/97bf48d0-528f-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(103,'2022-10-23 13:00:39','01','上海地铁站图片ah2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a22b96c0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a22b96c0-528f-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(104,'2022-10-23 13:00:57','01','上海地铁站图片ah2','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ac63b550-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ac63b550-528f-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(105,'2022-10-23 13:01:16','01','上海地铁站图片ah5','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b82ab140-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/b82ab140-528f-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(106,'2022-10-23 13:01:42','01','上海地铁站图片ah19','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c7af0350-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/c7af0350-528f-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(107,'2022-10-23 13:02:13','01','上海地铁站图片nl1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/da51d370-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/da51d370-528f-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(108,'2022-10-23 13:02:30','01','上海地铁站图片ah4','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e3e9e170-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/e3e9e170-528f-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(109,'2022-10-23 13:02:50','01','上海地铁站图片xy111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ef34f6a0-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/ef34f6a0-528f-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(110,'2022-10-23 13:03:12','01','上海地铁站图片kkk1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/fd149960-528f-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/fd149960-528f-11ed-b0c9-271276c6669d',0,'','','002','0002',''),
	(111,'2022-10-23 13:03:33','01','上海地铁站图片ahxx1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/09c4e3e0-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/09c4e3e0-5290-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(112,'2022-10-23 13:03:58','01','上海地铁站图片xyz111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/18a66640-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/18a66640-5290-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(113,'2022-10-23 13:04:19','01','上海地铁站图片xxss11','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/248b9890-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/248b9890-5290-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(114,'2022-10-23 13:04:38','01','上海地铁站图片11ss','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2fb7b410-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/2fb7b410-5290-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(115,'2022-10-23 13:05:02','01','上海地铁站图片xywe1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3e39d860-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/3e39d860-5290-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(116,'2022-10-23 13:05:21','01','上海地铁站图片xywww1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/497eac00-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/497eac00-5290-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(117,'2022-10-23 13:05:41','01','上海地铁站图片xywe4','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/55e59170-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/55e59170-5290-11ed-b0c9-271276c6669d',0,'','','001','0004',''),
	(118,'2022-10-23 13:09:22','01','上海地铁站图片mu11','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d93daee0-5290-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d93daee0-5290-11ed-b0c9-271276c6669d',0,'','','001','0006',''),
	(119,'2022-10-23 13:10:28','01','上海地铁站图片xysss','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0085fcf0-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0085fcf0-5291-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(120,'2022-10-23 13:10:46','01','上海地铁站图片xywe1sss','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0c5fbd90-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/0c5fbd90-5291-11ed-b0c9-271276c6669d',0,'','','001','0004',''),
	(121,'2022-10-23 13:11:30','01','上海地铁站图片897s','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/23c71aa0-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/23c71aa0-5291-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(122,'2022-10-23 13:11:53','01','上海地铁站图片1001','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/33b32f30-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/33b32f30-5291-11ed-b0c9-271276c6669d',0,'','','001','0004',''),
	(123,'2022-10-23 13:12:17','01','上海地铁站图片x1111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/42826210-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/42826210-5291-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(124,'2022-10-23 13:12:38','01','上海地铁站图片xfsdd','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4e9904a0-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/4e9904a0-5291-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(125,'2022-10-23 13:13:41','01','上海地铁站图片po11','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/64a3b7e0-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/64a3b7e0-5291-11ed-b0c9-271276c6669d',0,'','','002','0003',''),
	(126,'2022-10-23 13:14:46','01','上海地铁站图片possss','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/9a89efa0-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/9a89efa0-5291-11ed-b0c9-271276c6669d',0,'','','002','0001',''),
	(127,'2022-10-23 13:15:05','01','上海地铁站图片c111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a5a59060-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/a5a59060-5291-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(128,'2022-10-23 13:16:13','01','上海地铁站图片posss','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/cdc1f750-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/cdc1f750-5291-11ed-b0c9-271276c6669d',0,'','','003','0001',''),
	(129,'2022-10-23 13:16:33','01','上海地铁站图片sss111','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d9bb4de0-5291-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/d9bb4de0-5291-11ed-b0c9-271276c6669d',0,'','','003','0002',''),
	(130,'2022-10-23 13:27:21','01','上海地铁站图片zx1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/5c5d6c50-5293-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/5c5d6c50-5293-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(131,'2022-10-23 13:27:34','01','上海地铁站图片po22222','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/64f76b40-5293-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/64f76b40-5293-11ed-b0c9-271276c6669d',0,'','','001','0002',''),
	(132,'2022-10-23 13:28:12','01','上海地铁站图片po222','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7afc0400-5293-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/7afc0400-5293-11ed-b0c9-271276c6669d',0,'','','001','0003',''),
	(133,'2022-10-23 13:28:32','01','上海地铁站图片po2222','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/86aae410-5293-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/86aae410-5293-11ed-b0c9-271276c6669d',0,'','','001','0004',''),
	(134,'2022-10-23 13:28:49','01','上海地铁站图片p90','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/91b48370-5293-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/91b48370-5293-11ed-b0c9-271276c6669d',0,'','','001','0001',''),
	(135,'2022-10-23 09:29:08','01','上海地铁站图片xyz1','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/9cef9310-5293-11ed-b0c9-271276c6669d','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/9cef9310-5293-11ed-b0c9-271276c6669d',0,'','','001','0001','');

/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table station
# ------------------------------------------------------------

DROP TABLE IF EXISTS `station`;

CREATE TABLE `station` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `code` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `line_code` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `area_code` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `station` WRITE;
/*!40000 ALTER TABLE `station` DISABLE KEYS */;

INSERT INTO `station` (`id`, `name`, `code`, `line_code`, `area_code`)
VALUES
	(1,'地铁站1','0001','001','01'),
	(2,'地铁站2','0002','001','01'),
	(3,'地铁站3','0003','001','01'),
	(4,'地铁站4','0004','001','01'),
	(5,'地铁站5','0005','001','01'),
	(6,'地铁站6','0006','001','01'),
	(7,'地铁站1','0001','002','01'),
	(8,'地铁站2','0002','002','01'),
	(9,'地铁站3','0003','002','01'),
	(10,'地铁站1','0001','003','01'),
	(11,'地铁站2','0002','003','01'),
	(12,'地铁站1','0001','001','02'),
	(13,'地铁站2','0002','001','02'),
	(14,'地铁站3','0003','001','02'),
	(15,'地铁站1','0001','002','02'),
	(16,'地铁站2','0002','002','02'),
	(17,'地铁站1','0001','003','02');

/*!40000 ALTER TABLE `station` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table task
# ------------------------------------------------------------

DROP TABLE IF EXISTS `task`;

CREATE TABLE `task` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `area` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `line` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `station` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `total` int NOT NULL,
  `labeled` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;

INSERT INTO `task` (`id`, `area`, `line`, `station`, `total`, `labeled`)
VALUES
	(1,'01','001','0001',100,20),
	(2,'01','001','0002',2000,100),
	(3,'01','001','0003',300,40),
	(4,'01','002','0001',100,10),
	(5,'01','002','0002',300,80),
	(6,'02','001','0001',100,30),
	(7,'02','001','0002',200,60),
	(8,'02','001','0003',300,120),
	(9,'02','002','0001',300,100),
	(10,'02','002','0002',300,150),
	(11,'01','003','0001',300,200),
	(12,'01','003','0002',200,100),
	(13,'01','004','0001',400,100),
	(14,'01','005','0001',200,80),
	(15,'01','006','0001',100,60),
	(16,'01','001','0004',300,200),
	(17,'01','001','0005',400,200),
	(18,'01','001','0006',300,180);

/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table video
# ------------------------------------------------------------

DROP TABLE IF EXISTS `video`;

CREATE TABLE `video` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime NOT NULL COMMENT 'Create Time',
  `area` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `thumbnail` varchar(1000) DEFAULT NULL,
  `labeled` tinyint(1) NOT NULL DEFAULT '0',
  `category` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `label` varchar(200) DEFAULT NULL,
  `line` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `station` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;

INSERT INTO `video` (`id`, `create_time`, `area`, `title`, `url`, `thumbnail`, `labeled`, `category`, `label`, `line`, `station`)
VALUES
	(1,'2022-10-19 00:00:00','01','视频1','https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/video1.jpg',0,NULL,NULL,'001','0001'),
	(2,'2022-10-18 21:12:00','01','视频2','http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8','https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/video2.jpg',0,NULL,NULL,'001','0002');

/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
