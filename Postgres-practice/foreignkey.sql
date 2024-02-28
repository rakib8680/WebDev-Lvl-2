-- Active: 1708873839448@@127.0.0.1@5432@ph

-- create user table
create table "user" (
    id SERIAL PRIMARY KEY, username VARCHAR(50) not null UNIQUE
);

-- create post table
create table post (
    id SERIAL PRIMARY KEY, 
    title text, 
    user_id INTEGER REFERENCES "user" (id) on delete set DEFAULT DEFAULT 2   -- on delete CASCADE/set null/restrict/no action
)


drop table "user";
drop table post;

-- alter table post
--    alter column  user_id set on delete CASCADE;



-- insert into user table
insert into
    "user" (username)
values 
    ('batash'),
    ('akash'),
    ('shagor'),
    ('nodi')



-- insert into post table
insert into
    post (title, user_id)
values (
        'Enjoying a sunny day with akash', 2
    ),
    (
        'Batash Just shared and amazing recipe!', 1
    ),
    (
        'Exploring Adventure with shagor', 4
    ),
    (
        'Nodi is the dumbest girl ever existed', 4
    )


-- delete user 
-- delete from "user" where id = 4;

SELECT * FROM "user";

SELECT * FROM post;