drop database if exists funcionario;
create database funcionario;
use funcionario;

create table funcionario_desligados(
    matricula integer primary key not null auto_increment,
    nome varchar(256) not null,
    data_desligamento data not null,
    ultimo_salario float(50) not null,
);

LOAD DATA INFILE 'C:/Users/Aluno.DSN5131112167/Desktop/2 des (felipe h) nao apagar por favor/Funcionarios/funcionario_back/funcionarios.csv'
INTO TABLE funcionario_desligados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from  funcionario_desligados;