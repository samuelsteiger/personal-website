import "./project_banner.css"
import React from 'react';
import Tag from './tag.js';
import banner from "./static/personal-website-banner.png"

class ProjectBanner extends React.Component {
    render() {
        return <>
            <div class="banner">
                <img src={banner} alt="Snippit of Code for this website"/>
                <div class="project-title">
                    <h1>Sample Project</h1>
                </div>
                <div class="tags">
                    <Tag/>
                </div>
            </div> 
        </>;
    }
       
}

export default ProjectBanner;