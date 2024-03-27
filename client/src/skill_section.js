import Skill from './skill.js';

export default function SkillSection({section}) {
    return( 
        <>
            <h1 class="section-title">{section["section_title"]}</h1>
            {section["skills"].map((entry, index) => {
                return (
                    <Skill
                        name={entry["name"]}
                        proficiency={entry["proficiency"]}
                    />
                );
            })}
        </>
        
    )
       
}