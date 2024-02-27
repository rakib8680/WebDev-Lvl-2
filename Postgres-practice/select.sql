-- crate a table
create table students (
    student_id serial PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, age int check (age >= 18), grade char(2), course VARCHAR(50), email VARCHAR(100), dob date, blood_group varchar(5), country varchar(50)
);



-- insert data into the table
INSERT INTO
    students (
        first_name, last_name, age, grade, course, email, dob, blood_group, country
    )
VALUES (
        'John', 'Doe', 20, 'A', 'Computer Science', 'john.doe@example.com', '2001-01-01', 'A+', 'USA'
    ),
    (
        'Jane', 'Doe', 22, 'B', 'Mathematics', 'jane.doe@example.com', '1999-02-02', 'B-', 'Canada'
    ),
    (
        'Alice', 'Johnson', 23, 'C', 'Physics', 'alice.johnson@example.com', '1998-03-03', 'O+', 'UK'
    ),
    (
        'Bob', 'Smith', 21, 'D', 'Chemistry', 'bob.smith@example.com', '2000-04-04', 'AB+', 'Australia'
    ),
    (
        'Charlie', 'Brown', 19, 'A', 'Biology', 'charlie.brown@example.com', '2002-05-05', 'A-', 'USA'
    ),
    (
        'David', 'Williams', 24, 'B', 'English', 'david.williams@example.com', '1997-06-06', 'B+', 'Canada'
    ),
    (
        'Eve', 'Davis', 22, 'C', 'History', 'eve.davis@example.com', '1999-07-07', 'O-', 'UK'
    ),
    (
        'Frank', 'Miller', 20, 'D', 'Geography', 'frank.miller@example.com', '2001-08-08', 'AB-', 'Australia'
    ),
    (
        'Grace', 'Wilson', 23, 'A', 'Philosophy', 'grace.wilson@example.com', '1998-09-09', 'A+', 'USA'
    ),
    (
        'Harry', 'Moore', 21, 'B', 'Psychology', 'harry.moore@example.com', '2000-10-10', 'B-', 'Canada'
    );




-- filtering the data
select * from students where country != 'USA';

select * from students where not country = 'USA';

select * from students where country in ('USA', 'Australia');

select * from students where email is not null;

select * from students ORDER BY age ASC;

-- get all the unique data
select DISTINCT blood_group from students;

select *
from students
where (
        country = 'USA'
        or country = 'Australia'
    )
    and age = 20;




-- SCALAR functions
select upper(first_name), * from students;

select upper(
        concat(first_name, '-', last_name)
    ) as "full name", *
from students;

select *
from students
where
    dob BETWEEN '1998-01-01' and '2000-10-01' ORDER BY dob DESC;




-- AGGREGATE functions
-- Min, Max, Avg, Sum, Count
select count(*) from students;


-- combined functions
select max(length(first_name)) from students;



-- COALESCE function
select COALESCE(email, 'Email not provided'), * FROM students;
-- if the field (email) is null, then return  a default value, amazing right ?😍



-- select all the data from the table
select * from students;


-- delete data 
delete from students where grade = 'D';

-- update data 
update students
    set email = 'default@gmail.com'
    WHERE email is null;

select * from students
where last_name like 'M%'; --case SENSITIVE 
select * from students
where last_name ilike 'm%'; --case INSENSITIVE 
select * from students
where last_name like '_a%';



-- pagination 
select * from students LIMIT 5 OFFSET 5*1;
