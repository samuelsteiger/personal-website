import "./headshot.css"
import React from 'react';
import headshot_pic from "./static/headshot.jpg"

class Headshot extends React.Component {
    render() {
        const headshot_desc = "Sam Steiger's Headshot"
        return <>
            <div class="headshot">
                <img src={headshot_pic} alt={headshot_desc}/>
            </div>
        </>;
    }
       
}

export default Headshot;