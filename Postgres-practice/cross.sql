-- Active: 1708873839448@@127.0.0.1@5432@ph


create table employees (
    emp_id int,
    emp_name VARCHAR(50),
    dept_id int
)

create table departments (
    dept_id int,
    dept_name VARCHAR(50)
)

--inserting sample data 
insert into employees values (1,'John Doe', 101);
insert into employees values (2,'John Smith', 102);
insert into departments values (101,'Human Resources');
insert into departments values (102,'Marketing');


select * from employees;
select * from departments;


--cross join 
select * from employees
cross join departments;


--natural join 
select * from employees
natural join departments;