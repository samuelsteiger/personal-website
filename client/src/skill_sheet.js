import "./skill_sheet.css"
import SkillSection from "./skill_section";
import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import getAddress from "./development_routing";

export default function SkillSheet() {
    const navigate = useNavigate()
    const [skills, setSkills] = useState([]);


    useEffect(() => {
        

        axios
        .get(getAddress()+"skills/")
        .then(function (response) {
            setSkills(response.data)
        }).catch((error) => {
            navigate("/error")
        });
      }, []);

    const sections = {'Soft Skills': [], 'Technical Skills': []}
    for(var skill of skills) {
        switch (skill['type']) {
            case 'soft':
                sections["Soft Skills"].push(skill)
                break;

            case 'technical':
                sections["Technical Skills"].push(skill)
                break;
        }
    }
    return( 
    <div class="skill-sheet">
        <div class="inner-border">
            {
                <SkillSection
                    section={sections["Soft Skills"]} title={"Soft Skills"}
                />
            }
            {
                <SkillSection
                    section={sections["Technical Skills"]} title={"Technical Skills"}
                />
            }
        </div>
    </div>
    )
       
}