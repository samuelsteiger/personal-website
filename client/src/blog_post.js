import "./blog_post.css"
import posts from "./static/blog_posts.json"

export default function BlogPost() {
    return( 
        <div class = "blog-post">
           <p class = "post-title">{posts[0]["title"]}</p>
           <div class = "post-datetime">
                <p>{posts[0]["date"]}</p>
                <p>{posts[0]["time"]}</p>
           </div>
           <p class = "post-author">{posts[0]["author"]}</p>
           <p class = "post-text">{posts[0]["text"]}</p>
        </div>
    )
       
}