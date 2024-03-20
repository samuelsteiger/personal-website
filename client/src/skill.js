import "./skill.css"

export default function Skill() {
    const skill_name = "skill"
    const skill_proficiency = "50%"
    const fill_style = {width: skill_proficiency};
    return( 
    <>
        <p class="skill-title">{skill_name}</p>
        <div class="bar">
            <div class="bar-bg"/>
            <div class="bar-fill" style = {fill_style}/>
        </div>
    </>
    )
       
}