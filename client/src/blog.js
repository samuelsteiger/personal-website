import "./blog.css"
import BlogPost from "./blog_post"
import { useEffect } from "react"

export default function Blog() {
    useEffect(() => {
        document.title = 'Blog';
      }, []);
    return( 
    <div class = "blog">
        <BlogPost/>
        <BlogPost/>
        <BlogPost/>
    </div>
    )
       
}