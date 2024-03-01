-- Active: 1708873839448@@127.0.0.1@5432@ph

create table departments (
    department_id SERIAL PRIMARY KEY, department_name VARCHAR(100)
)

create table employees (
    employee_id SERIAL PRIMARY KEY, employee_name VARCHAR(100), department_id int REFERENCES departments (department_id), salary DECIMAL(10, 2), hire_date DATE
)

INSERT INTO
    departments (department_name)
VALUES ('Human Resources'),
    ('Finance'),
    ('Marketing'),
    ('Sales'),
    ('Research and Development'),
    ('Customer Service'),
    ('Information Technology'),
    ('Product Management'),
    ('Quality Assurance'),
    ('Operations');

INSERT INTO
    employees (
        employee_name, department_id, salary, hire_date
    )
VALUES (
        'John Doe', 1, 5000.00, '2022-01-01'
    ),
    (
        'Jane Smith', 2, 6000.00, '2021-03-15'
    ),
    (
        'Robert Johnson', 3, 7000.00, '2020-06-20'
    ),
    (
        'Michael Williams', 4, 8000.00, '2019-09-30'
    ),
    (
        'Sarah Brown', 1, 5500.00, '2022-02-01'
    ),
    (
        'James Jones', 2, 6500.00, '2021-04-15'
    ),
    (
        'Patricia Miller', 3, 7500.00, '2020-07-20'
    ),
    (
        'Jennifer Davis', 4, 8500.00, '2019-10-30'
    ),
    (
        'Linda Wilson', 1, 5600.00, '2022-03-01'
    ),
    (
        'William Moore', 2, 6600.00, '2021-05-15'
    ),
    (
        'Elizabeth Taylor', 3, 7600.00, '2020-08-20'
    ),
    (
        'David Anderson', 4, 8600.00, '2019-11-30'
    ),
    (
        'Barbara Thomas', 1, 5700.00, '2022-04-01'
    ),
    (
        'Richard Jackson', 2, 6700.00, '2021-06-15'
    ),
    (
        'Susan White', 3, 7700.00, '2020-09-20'
    ),
    (
        'Joseph Harris', 4, 8700.00, '2019-12-30'
    ),
    (
        'Jessica Martin', 1, 5800.00, '2022-05-01'
    ),
    (
        'Thomas Thompson', 2, 6800.00, '2021-07-15'
    ),
    (
        'Sarah Robinson', 3, 7800.00, '2020-10-20'
    ),
    (
        'Michael Clark', 4, 8800.00, '2020-01-30'
    );

-- drop table employees


-- inner join to retrieve employee and department information
select *
from employees
    join departments on employees.department_id = departments.department_id

select * from employees join departments using (department_id)



-- show department name with average salary
select department_name, round(avg(salary))
from employees
    join departments using (department_id)
group by
    department_name;



--find the department name with the highest average salary
select department_name, round(avg(salary))
from employees
    join departments using (department_id)
group by
    department_name
order by avg(salary) DESC
limit (1)



-- count employees hired each year
select extract(
        year
        from hire_date
    ) as "year", count(*) as hired_employees
from employees
group by
    "year"



-- practice task
create table orders (
    order_id serial PRIMARY KEY, customer_id int, order_date date, total_amount DECIMAL(10, 2)
)

INSERT INTO
    orders (
        customer_id, order_date, total_amount
    )
VALUES (1, '2022-01-01', 100.00),
    (2, '2022-01-02', 200.00),
    (1, '2021-01-03', 300.00),
    (3, '2021-01-04', 400.00),
    (2, '2022-02-05', 500.00),
    (4, '2020-01-06', 600.00),
    (1, '2020-01-07', 700.00),
    (2, '2022-02-08', 800.00),
    (3, '2021-01-09', 900.00),
    (1, '2022-04-10', 1000.00)
    

-- find customers who have placed more than 2 orders and calculate the total amount spent by each of these customers
select customer_id, count(order_id) as total_orders,sum(total_amount)as total_spent from orders
group by customer_id
having count(order_id) >2



-- find the total amount of orders placed each month in the year 2022 
select to_char(order_date, 'Month') as "months", count(order_id)as total_orders from orders 
where extract(year from order_date) = 2022 
group by "months";




select * from orders;

-- drop table orders