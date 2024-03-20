import "./about_me.css"
import Headshot from "./headshot"
import Bio from "./bio"
import SkillSheet from "./skill_sheet"
import ProjectBanner from "./project_banner"

export default function AboutMe() {
    return( 
    <>
        <div class="bottle">
            <div class="Nav lid">
                <div><p>About Me</p></div>
                <div><p>Projects</p></div>
                <div><p>Blog</p> </div>
            </div>
            <div class="Bio">
                <Headshot/>
                <Bio/>
            </div>
            <div class="Employment"></div>
            <div class="Skills">
                <SkillSheet/>
            </div>
            <div class="Projects">
                <ProjectBanner/>
                <ProjectBanner/>

            </div>
        </div>
    </>
    )
       
}