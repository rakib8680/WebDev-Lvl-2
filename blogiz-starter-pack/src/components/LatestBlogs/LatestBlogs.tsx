import { TBlog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="space-y-10 mt-20">
      <h1 className="text-4xl text-center my-5">
        This is LatestBlogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400  w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className=" container mx-auto grid grid-cols-2 gap-8  place-items-center">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard blog={blog} key={blog.id} />
        ))}
      </div>
      <div className=" container mx-auto grid grid-cols-3 gap-8  place-items-center">
        {blogs.slice(2, 6).map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
