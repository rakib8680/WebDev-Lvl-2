-- Active: 1708873839448@@127.0.0.1@5432@ph



-- delete employee 
create or replace Function delete_emp(p_emp_id int)
RETURNS void
LANGUAGE SQL
AS
$$
    delete from employees where employee_id = p_emp_id;
$$;


select delete_emp(17)

select * from employees;
