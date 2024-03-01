-- Active: 1708873839448@@127.0.0.1@5432@ph
create table employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100),
    department_name VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
)


INSERT INTO employees (employee_name, department_name, salary, hire_date) VALUES 
('John Doe', 'HR', 5000.00, '2022-01-01'),
('Jane Smith', 'Finance', 6000.00, '2021-03-15'),
('Robert Johnson', 'Marketing', 7000.00, '2020-06-20'),
('Michael Williams', 'Sales', 8000.00, '2019-09-30'),
('Sarah Brown', 'HR', 5500.00, '2022-02-01'),
('James Jones', 'Finance', 6500.00, '2021-04-15'),
('Patricia Miller', 'Marketing', 7500.00, '2020-07-20'),
('Jennifer Davis', 'Sales', 8500.00, '2019-10-30'),
('Linda Wilson', 'HR', 5600.00, '2022-03-01'),
('William Moore', 'Finance', 6600.00, '2021-05-15'),
('Elizabeth Taylor', 'Marketing', 7600.00, '2020-08-20'),
('David Anderson', 'Sales', 8600.00, '2019-11-30'),
('Barbara Thomas', 'HR', 5700.00, '2022-04-01'),
('Richard Jackson', 'Finance', 6700.00, '2021-06-15'),
('Susan White', 'Marketing', 7700.00, '2020-09-20'),
('Joseph Harris', 'Sales', 8700.00, '2019-12-30'),
('Jessica Martin', 'HR', 5800.00, '2022-05-01');




-- task -- retrieve all the employees whose salary is greater than the highest salary of the HR department
select max(salary) as HR_Max_salary from employees where department_name = 'HR';
select * from employees where salary > (select max(salary) as HR_Max_salary from employees where department_name = 'HR')



select * from employees;
-- DROP table employees
