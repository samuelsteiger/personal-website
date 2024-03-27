import "./skill_sheet.css"
import SkillSection from "./skill_section";
import sheet from './static/skill_sheet.json'

export default function SkillSheet() {
    return( 
    <div class="skill-sheet">
        <div class="inner-border">
            {sheet.map((section, index) => {
                return (
                    <SkillSection
                        section={section}
                    />
                );
            })}
        </div>
    </div>
    )
       
}