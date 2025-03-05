CREATE DATABASE prueba;

CREATE TABLE Client(
    email VARCHAR(50) NOT NULL,
    name VARCHAR(30) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    phone_number BIGINT NOT NULL,
    PRIMARY KEY (email)
)ENGINE=INNODB;

CREATE TABLE Activity(
    id INT AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    client_email VARCHAR(50),
    date DATE NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_activity_client FOREIGN KEY (client_email) REFERENCES Client (email) ON DELETE SET NULL ON UPDATE CASCADE
)ENGINE=INNODB;