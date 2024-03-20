import "./project_banner.css"
import React from 'react';
import Tag from "./tag.js";

class ProjectBanner extends React.Component {
    render() {
        return <>
            <div class="banner">
                <img src="personal-website-banner.png" alt="Snippit of Code for this website"/>
                <div class="title">
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