'use client';

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/types";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs",{
  //   cache:'no-store'
  // });
  // const blogs = await res.json();



  const {data : blogs, isLoading, error} = useGetBlogsQuery(undefined);



  return (
    <div className="space-y-10 my-20">
      <h1 className="text-4xl text-center my-5">
        This is All Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400  w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className=" container mx-auto grid grid-cols-3 gap-8  place-items-center">
        {blogs?.map((blog: TBlog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
