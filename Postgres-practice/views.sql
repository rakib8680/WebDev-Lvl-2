-- Active: 1708873839448@@127.0.0.1@5432@ph


create view dept_avg_salary 
AS
select department_name, sum(salary)as average_salary from employees group by department_name;


select * from dept_avg_salary
