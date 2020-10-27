drop database if exists projects_db;
create database projects_db;
use database projects_db;

create table projects(
    id int not null auto_increment primary key,
    ProjectName varchar(50),
    Scope varchar(250),
);

table projectOwner(
    id int not null auto_increment primary key,
    ProjectOwner varchar(30),
    Urgency varchar(15)
);

table projectPriority(
    id int not null auto_increment primary key,
    ExpectedCompletionDate date 0000-00-00,
    Status varchar(15)
    -- ProjectDurationDays int (4) not null
);
