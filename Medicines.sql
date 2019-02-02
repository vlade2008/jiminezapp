/*
 Navicat Premium Data Transfer

 Source Server         : Mysql
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost
 Source Database       : jimenez_db

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : utf-8

 Date: 02/02/2019 11:12:33 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `Medicines`
-- ----------------------------
DROP TABLE IF EXISTS `Medicines`;
CREATE TABLE `Medicines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `Medicines`
-- ----------------------------
BEGIN;
INSERT INTO `Medicines` VALUES ('31', 'Amoxicillin 100mg /1 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('32', 'Cefuroxime 250mg/5ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('33', 'Amoxicillin 250mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('34', 'Co-Amoxiclav 457mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('35', 'Cefixime 20mg/1 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('36', 'Cefixime 100mg/5ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('37', 'Cefuroxime 500mg', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('38', 'Sultamicillin tosylate 750mg/tab', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('39', 'Clarithromycin 250mg/5ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('40', 'Azithromycin 200mg/5ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('41', 'Salbutamol 2mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('42', 'Salbutamol 2mg/tab', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('43', 'Procaterol 25 ug/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('44', 'Procaterol 25 ug/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('45', 'Procaterol 25ug/tab', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('46', 'Procaterol 50ug/tab', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('47', 'N-Acetylcisteine 100mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('48', 'N-Acetylcysteine 200mg/sachet', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('49', 'N-Acetylcysteine 600mg/tab', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('50', 'Multivitamins plus buclizine syrup', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('51', 'Multivitamins Drops', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('52', 'Multivitamins Syrup', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('53', 'Montelukast 4 mg', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('54', 'Montelukast 5 mg', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('55', 'Montelukast 10 mg', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('56', 'Vit. C syrup', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('57', 'Vit, C Drops', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('58', 'FeSO4 Drops', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('59', 'Cetirizine 2.75mg/ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('60', 'Cetirizine 5mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('61', 'Paracetamol 100 mg/ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('62', 'Paracetamol 120 mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('63', 'Paracetamol 250 mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('64', 'Paracetamol 500 mg', '2019-02-02 03:11:01', '2019-02-02 03:11:01'), ('65', 'Doxofylline  100mg/5 ml', '2019-02-02 03:11:01', '2019-02-02 03:11:01');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
