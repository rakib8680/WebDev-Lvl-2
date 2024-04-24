import LoadingCard from "@/components/ui/LoadingCard";
import { TBlog } from "@/types";




const BlogLoadingPage = async() => {

    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json();

  return (
     <div>
        <div className="grid grid-cols-3 gap-5">
            {
                blogs.map((blog:TBlog)=>(
                    <LoadingCard key={blog.id}/>
                ))
            }
        </div>
     </div>
  )
};

export default BlogLoadingPage;