import "./about_me.css"
import Headshot from "./headshot"
import Bio from "./bio"
import SkillSheet from "./skill_sheet"
import WorkHistory from "./work_history"
import ContactMe from "./contact_me"
import { useEffect } from "react"

export default function AboutMe() {
    useEffect(() => {
        document.title = 'About Me';
      }, []);
    return( 
    <div class = "about-me">
            <div class="Bio">
                <Headshot/>
                <Bio/>
            </div>
            <div class="Employment">
                <WorkHistory/>
            </div>
            <div class="Skills">
                <SkillSheet/>
            </div>
            <div class="Projects">
                
            </div>
            <div class="Contact-Me">
                <ContactMe/>
            </div>
    </div>
    )
       
}