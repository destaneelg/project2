drop database if exists projects_db;
create database projects_db;
use database projects_db;

create table projects(
    id int not null auto_increment primary key,
    CreatedDate date default 0000-00-00,
    ProjectName varchar(50),
    Scope varchar(250),
    ProjectOwner varchar(30),
    Urgency varchar(15),
    ExpectedCompletionDate date 0000-00-00,
    CompletedDate date 0000-00-00,
    ProjectDurationDays int (4) not null
)

