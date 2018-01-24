DROP DATABASE IF EXISTS hackmo;

CREATE DATABASE hackmo;

USE hackmo;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  balance decimal(10, 2) NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */

INSERT INTO users (id, name, balance) VALUES (1, "beth", 1915.96);
INSERT INTO users (id, name, balance) VALUES (2, "rebecca", 1488.92);
INSERT INTO users (id, name, balance) VALUES (3, "jake", 1913.7);
INSERT INTO users (id, name, balance) VALUES (4, "benji", 105.80);
INSERT INTO users (id, name, balance) VALUES (5, "erik", 1996.6);
INSERT INTO users (id, name, balance) VALUES (6, "dan", 215.38);
INSERT INTO users (id, name, balance) VALUES (7, "ben", 1072.30);
INSERT INTO users (id, name, balance) VALUES (8, "oleg", 174.53);
INSERT INTO users (id, name, balance) VALUES (9, "tom", 873.15);
INSERT INTO users (id, name, balance) VALUES (10, "mo", 1522.94);
INSERT INTO users (id, name, balance) VALUES (11, "jamil", 564.82);
INSERT INTO users (id, name, balance) VALUES (12, "sophie", 411.56);
INSERT INTO users (id, name, balance) VALUES (13, "geoff", 1030.87);
INSERT INTO users (id, name, balance) VALUES (14, "marcus", 138.47);
INSERT INTO users (id, name, balance) VALUES (15, "fred", 380.33);
INSERT INTO users (id, name, balance) VALUES (16, "mylani", 473.27);
INSERT INTO users (id, name, balance) VALUES (17, "joel", 921.30);
