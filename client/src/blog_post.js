import "./blog_post.css"
import posts from "./static/blog_posts.json"
import axios from 'axios';
import React from 'react';

export default class BlogPost extends React.Component {
    constructor(props) {
        console.log(props)
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
        console.log(this.props)
        return (
            <div class = "blog-post">
                <p class = "post-title">{this.props.post.title}</p>
                <div class = "post-datetime">
                    <p>{this.props.post.date}</p>
                </div>
                <p class = "post-author">{this.props.post.author}</p>
                <p class = "post-text">{this.props.post.body}</p>
            </div>
        );
    }
}