USE TechMan;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/TechMan/docs/comentarios.csv'
INTO TABLE Comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/TechMan/docs/equipamentos.csv'
INTO TABLE Equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/TechMan/docs/usuarios.csv'
INTO TABLE Usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/TechMan/docs/perfis.csv'
INTO TABLE Perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;