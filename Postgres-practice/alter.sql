-- Active: 1708873839448@@127.0.0.1@5432@ph
select * from person2;

-- add column to table
alter table person2 
add column email VARCHAR(50) DEFAULT 'ph@gmail.com' not null;

-- insert values 
insert into person2
values (9, 'akash', 23, 'akash@gmail.com');

-- delete row 
delete from person2 where  id = 9;   


-- rename column 
alter table person2
rename column age to user_age;


-- change column constraint 
alter table person2
alter column user_name type VARCHAR(100);



-- add/remove new column constraint 
alter table person2
alter column email drop not null;

alter table person2
add constraint unique_person2_user_age UNIQUE(user_age);

alter table person2
DROP constraint unique_person2_user_age;



-- remove data from database 
TRUNCATE table person2;

-- drop table 
drop table person3;