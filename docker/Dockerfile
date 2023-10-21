FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=123456789
COPY /config/mysql/mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
EXPOSE 3306
COPY /config/mysql/setup.sql /docker-entrypoint-initdb.d/
CMD ["mysqld"]
