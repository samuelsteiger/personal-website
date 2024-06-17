import "./blog.css"
import BlogPost from "./blog_post"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = 'Blog';

        axios
        .get("http://localhost:8080/blog/")
        .then(function (response) {
            setPosts(response.data)
        });
      }, []);

      

    return( 
    <div class = "blog">
        {posts.map((post) => {
            return (<BlogPost key={post.bid} post={post}/>);
        })}
        
    </div>
    )
       
}