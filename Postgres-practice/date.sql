-- Active: 1708873839448@@127.0.0.1@5432@ph


show timezone;
select now()::date;
select CURRENT_DATE;


create table timeZone (ts TIMESTAMP without time zone,tsz TIMESTAMP with time zone);

insert into timeZone values ('2024-01-12 12:00:00','2024-01-12 12:00:00');

select age(CURRENT_DATE, dob) as age,  * from students;


select * from timeZone;

-- format date 
select to_char(now(), 'DD/Mon/YYYY HH12:MI:SS');

-- interval 
select CURRENT_DATE - INTERVAL '1 day 2 hours 3 minutes 4 seconds'; 

-- age 
select age(CURRENT_DATE, '2002-09-10');

-- extract 
select extract(day from '2002-09-10'::date);

-- group by 
select country, count(*), avg(age) from students
 group by country;

-- having 
select country , avg(age)from students
    group by country
    having avg(age) > 20;



 select * from students;

-- count student born in each year 
 select extract(year from dob) as birth_year,count(*) from students
    group by birth_year;



