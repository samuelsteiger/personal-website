import "./projects.css"
import { useEffect } from "react"

export default function Projects() {

    useEffect(() => {
        document.title = 'Projects';
      }, []);

    return( 
    <div class = "project">
      <p class="project-title">Personal Website</p>
      <p class="project-section">Objective</p>
      <p class="project-body">To go beyond a simple resume and showcase who I am, what I can offer and what I have done.</p>
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
      <p class="project-body">Make requests from the client and handle responses from the server.</p>
      <p class="project-subsection">React Router</p>
      <p class="project-body">Perform client-side routering and navigation between pages of the applcation.</p>
      <p class="project-subsection">Express</p>
      <p class="project-body">Esatblish server-side routing of webpage and API requests.</p>
      <p class="project-subsection">Express Validator/Sanitizer</p>
      <p class="project-body">Handle the validation and santization of user input usch as verifiying email address formats or escaping characters.</p>
      <p class="project-subsection">PG</p>
      <p class="project-body">Provide a quering interfase to the PostgreSQL database.</p>
    </div>
    )
   
}