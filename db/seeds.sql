LOCK TABLES `burgers` WRITE;

INSERT INTO `burgers` (`id`, `burger_name`, `devoured`, `date`)
VALUES
(1,'Double KING™DURR® Sandwich',0,'2018-09-21 20:47:10'),
(2,'BACON KING™ JR. SANDWICH',0,'2018-09-21 20:47:10');

UNLOCK TABLES;
