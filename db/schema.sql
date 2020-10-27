drop database if exists projects_db;
create database projects_db;
use database projects_db;

create table projects(
    id int not null auto_increment primary key,
    CreatedDate date default 0000-00-00,
    ProjectName varchar(50),
    Scope varchar(250), --project description
    ProjectOwner varchar(30),
    Urgency varchar(15),
    ExpectedCompletionDate date 0000-00-00,--use api
    CompletedDate date 0000-00-00, --use api 
    ProjectDurationDays int (4) not null
)

