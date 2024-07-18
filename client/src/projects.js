import "./projects.css"
import ProjectSection from "./project_section";
import { useEffect } from "react"

export default function Projects(props) {

    useEffect(() => {
        document.title = 'Projects';
      }, []);

    

    return( 
    <div class = "project">
      <ProjectSection>
        <p class="project-title">Personal Website</p>
        <img src="favicon.ico" width={400} height={400}></img>
        <p class="project-section">Objective</p>
        <p class="project-body">To go beyond a simple resume and showcase who I am, what I can offer and what I have done. The theme of the client is my favorite, light-green water bottle. On this page right here, I will put my protfolio items with descriptions.</p>
        <p class="project-section">Features</p>
        <p class="project-body">{"1) About Me section"}</p>
        <p class="project-body">{"2) Contact Me portal"}</p>
        <p class="project-body">{"3) Project Portfolio"}</p>
        <p class="project-body">{"4) Personal Blog"}</p>
        <p class="project-section">Major Technologies</p>
        <p class="project-body">{"1) React"}</p>
        <p class="project-body">{"2) Node.js"}</p>
        <p class="project-body">{"3) PostgreSQL"}</p>
        <p class="project-section">Libraries/Modules</p>
        <p class="project-subsection">Axios</p>
        <p class="project-body">Make requests from the client and handle responses from the server. React componenets that require resources from the server, call Axios function at componet load to get resources only when necessary.</p>
        <p class="project-subsection">React Router</p>
        <p class="project-body">Perform client-side routering and navigation between pages of the applcation. Each of the major pages have a route assigned to them. Each page is loaded as a child component of a web app component, where the web app component is responsible for site-wide elements and styling.</p>
        <p class="project-subsection">Express</p>
        <p class="project-body">Esatblish server-side routing of webpage and API requests.</p>
        <p class="project-subsection">Sanitize</p>
        <p class="project-body">Handle the santization of user input for escaping characters.</p>
        <p class="project-subsection">PG</p>
        <p class="project-body">Provide a quering interfase to the PostgreSQL database. Queries that incorporate user input, use parameterized queries.</p>
      </ProjectSection>
      
    </div>
    )
   
}