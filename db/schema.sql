/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database wishes_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table wishes.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devoured boolean false,
-- devoured tinyint(0) NOT NULL DEFAULT "0",
PRIMARY KEY (id)
);





