import Skill from './skill.js';

export default function SkillSection({section, title}) {
    return( 
        <>
            <h1 class="section-title">{title}</h1>
            {section.map((entry, index) => {
                return (
                    <Skill
                        name={entry["name"]}
                        proficiency={entry["level"]}
                    />
                );
            })}
        </>
        
    )
       
}