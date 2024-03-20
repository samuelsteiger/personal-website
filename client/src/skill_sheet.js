import "./skill_sheet.css"
import Skill from './skill.js';

export default function SkillSheet() {
    return( 
    <div class="skill-sheet">
        <div class="inner-border">
            <h1 class="section-title">Soft Skill</h1>
            <Skill/>
            <Skill/>
            <Skill/>
            <h1 class="section-title">Technical Skill</h1>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </div>
    </div>
    )
       
}