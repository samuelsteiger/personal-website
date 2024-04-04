import "./personal_website.css"
import { Outlet, Link, useLocation } from "react-router-dom";

export default function PersonalWebsite() {
    const about_me_path = "/";
    const projects_path = "/projects";
    const blog_path = "/blog";

    return( 
    <>
        <div class="bottle">
                
               
            <div class="Nav lid">
                <Link to={about_me_path}><p class = {useLocation().pathname === about_me_path ? "underlined" : ""}>
                    About Me</p></Link>
                <Link to={projects_path}><p class = {useLocation().pathname === projects_path ? "underlined" : ""}>
                    Projects</p></Link>
                <Link to={blog_path}><p class = {useLocation().pathname === blog_path ? "underlined" : ""}>Blog</p></Link>
            </div>
            
            <Outlet/>
        </div>
    </>
    )
       
}