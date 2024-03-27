import "./skill.css"

export default function Skill({name = "skill", proficiency = 20}) {
    const fill_style = {width: proficiency+"%"};
    return( 
    <div class = "skill">
        <p class="skill-title">{name}</p>
        <div class="bar">
            <div class="bar-bg"/>
            <div class="bar-fill" style = {fill_style}/>
        </div>
    </div>
    )
       
}