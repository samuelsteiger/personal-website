import "./blog_post.css"
import React from 'react';

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "bid": 1,
            "title": "",
            "author": "",
            "date": "",
            "time": "",
            "text": ""
        };
    }
    
    render() {
        console.log(this.props.post)
        return (
            <div class = "blog-post">
                <p class = "post-title">{this.props.post.title}</p>
                <p class = "post-date">{this.props.post.date.split("T")[0]}</p>
                <p class = "post-time">{this.props.post.date.split("T")[1].split(".")[0]}</p>
                <p class = "post-author">{this.props.post.author}</p>
                <p class = "post-text">{this.props.post.body}</p>
            </div>
        );
    }
}