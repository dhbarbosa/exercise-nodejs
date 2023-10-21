-- setup.sql
CREATE DATABASE projeto;
CREATE USER 'dhbarbosa'@'%' IDENTIFIED BY '123456789';
GRANT ALL PRIVILEGES ON projeto.* TO 'dhbarbosa'@'%';
FLUSH PRIVILEGES;

