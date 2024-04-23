import BlogDetails from "@/components/ui/BlogDetails";
import { TBlog } from "@/types";

type TBlogDetailsParams = {
  params: {
    blogId: string;
  };
};


export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: TBlog) => ({
    blogId: blog.id,
  }));
};


const BlogDetailsPage = async ({ params }: TBlogDetailsParams) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
//   console.log(blog);

  return (
    <div className="my-20">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
