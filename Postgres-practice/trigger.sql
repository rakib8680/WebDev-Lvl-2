-- Active: 1708873839448@@127.0.0.1@5432@ph

create table my_users (
    user_name VARCHAR(50), email VARCHAR(100)
)

insert into
    my_users
values ('rakib', 'rakib@gmail.com'),
    ('shihat', 'shihat@gmail.com');



create table deleted_users_audit(
    deleted_user_name VARCHAR(50),
    deletedAt TIMESTAMP
);
    

-- create function
create or REPLACE function save_deleted_user()
returns trigger
LANGUAGE plpgsql
AS
$$
    begin 
        insert into deleted_users_audit values(old.user_name, now());
        return old;
        raise notice 'User % deleted at %', old.user_name, now();
    end
$$


-- create trigger 
create or REPLACE trigger save_deleted_user_trigger
before delete on my_users for each row
execute function save_deleted_user();



delete from my_users where user_name = 'rakib';


select * from my_users;
select * from deleted_users_audit;
drop table deleted_users_audit