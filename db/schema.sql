### Schema
DROP DATABASE IF EXISTS senior_db;
CREATE DATABASE senior_db;

USE senior_db;

CREATE TABLE leads
(
    id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
    serv varchar(30) NOT NULL,
	phone varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	zip varchar(30) NOT NULL,
	PRIMARY KEY (id)
);