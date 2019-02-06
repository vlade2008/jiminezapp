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

 Date: 02/06/2019 17:49:14 PM
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
  `brandname` varchar(255) DEFAULT NULL,
  `form_unit` varchar(255) DEFAULT NULL,
  `dispense` varchar(255) DEFAULT NULL,
  `take` varchar(255) DEFAULT NULL,
  `sig` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `Medicines`
-- ----------------------------
BEGIN;
INSERT INTO `Medicines` VALUES ('66', 'Amoxicillin 100mg /1 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 3x a day x 7 days (6am-1pm-8pm)'), ('67', 'Amoxicillin 250mg/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 3x a day x 7 days (6am-1pm-8pm)'), ('68', 'Co-Amoxiclav 457mg/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 7 days (7am-7pm)'), ('69', 'Cefixime 20mg/1 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 7 days  (7am-7pm)'), ('70', 'Cefixime 100mg/5ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 7 days  (7am-7pm)'), ('71', 'Cefuroxime 250mg/5ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 7 days  (7am-7pm)'), ('72', 'Cefuroxime 500mg', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Caps', '1', '1', 'cap 2x a day x 7 days  (7am-7pm)'), ('73', 'Sultamicillin tosylate 750mg/tab', '2019-02-03 04:24:42', '2019-02-03 04:24:42', 'Silgram', 'Tablet', '14', '1', '1 tab 2x a day x 7 days   (7am-7pm'), ('74', 'Clarithromycin 250mg/5ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 7 days  (7am-7pm)'), ('75', 'Azithromycin 200mg/5ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 1x a day  x 7 days  (8 pm)'), ('76', 'Salbutamol 2mg/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 3x a day x 5 days (6am-1pm-8pm)'), ('77', 'Salbutamol 2mg/tab', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Tablet', '15', '1', 'tab 3x a day x 5 days  (6am-1pm-8pm)'), ('78', 'Procaterol 25 ug/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 7 days   (7am-7pm)'), ('79', 'Procaterol 25 ug/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 7 days   (7am-7pm)'), ('80', 'Procaterol 25ug/tab', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Tablet', '14', '1', 'tab 2x a day x 7 days   (7am-7pm)'), ('81', 'Procaterol 50ug/tab', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Tablet', '14', '1', 'tab 2x a day x 7 days   (7am-7pm)'), ('82', 'N-Acetylcisteine 100mg/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 5 days   (7am-7pm)'), ('83', 'N-Acetylcysteine 200mg/sachet', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Satchets', '14', '1', 'sachet plus 10 ml water x 5 days   (7am-7pm)'), ('84', 'N-Acetylcysteine 600mg/tab', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Tablet', '5', '1', 'tab plus 1 oz water 1x a day x 5 days  (8pm)'), ('85', 'Multivitamins plus buclizine syrup', '2019-02-03 04:24:42', '2019-02-03 04:24:42', 'Biotermin', 'Bottle', '1', null, 'ml once a day x 2 mos   (8pm)'), ('86', 'Multivitamins Drops', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml once a day   (8pm)'), ('87', 'Multivitamins Syrup', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 1x a day  (8pm)'), ('88', 'Montelukast 4 mg', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Tablet', null, '1', 'tab 1x a day   (8pm)'), ('89', 'Montelukast 5 mg', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Tablet', null, '1', 'tab 1x a day   (8pm)'), ('90', 'Montelukast 10 mg', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Tablet', null, '1', 'tab 1x a day   (8pm)'), ('91', 'Vit. C syrup', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', null, null, 'ml once a day   (8pm)'), ('92', 'Vit, C Drops', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml once a day (8pm)'), ('93', 'FeSO4 Drops', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml once a day   (8 pm)'), ('94', 'Cetirizine 2.75mg/ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml ____ (1x or 2x  a day) x 1 week (8pm or 7am -7pm)'), ('95', 'Cetirizine 5mg/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml ____ (1x or 2x  a day) x 1 week (8pm or 7am -7pm)'), ('96', 'Doxofylline  100mg/5 ml', '2019-02-03 04:24:42', '2019-02-03 04:24:42', null, 'Bottle', '1', null, 'ml 2x a day x 1 week  (7am -7pm)');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
