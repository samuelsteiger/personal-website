import "./blog.css"
import BlogPost from "./blog_post"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import getServerURL  from "./routing"


export default function Blog() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Blog';

        axios
        .get(getServerURL()+"blog-posts/")
        .then(function (response) {
            setPosts(response.data)
        }).catch((error) => {
            navigate("/error")
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