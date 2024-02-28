-- Active: 1708873839448@@127.0.0.1@5432@ph



SELECT * FROM "user";

SELECT * FROM post;


-- get post table joint with user names with join
--inner join, left join, right join, full join, cross join, natural join
select * from post 
full join "user" on post.user_id = "user".id;