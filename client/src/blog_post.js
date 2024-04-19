import "./blog_post.css"
import posts from "./static/blog_posts.json"
import axios from 'axios';
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

    componentDidMount() {
        console.log(this.state)
        var self = this;
        axios
        .get("http://localhost:8080/blog/")
        .then(function (response) {
            console.log(response)
            self.setState(response.data);
            
        });
    }

    render() {
        console.log(this.state)
        return (
            <div class = "blog-post">
                <p class = "post-title">{this.state["title"]}</p>
                <div class = "post-datetime">
                    <p>{this.state["date"]}</p>
                    <p>{this.state["time"]}</p>
                </div>
                <p class = "post-author">{this.state["author"]}</p>
                <p class = "post-text">{this.state["text"]}</p>
            </div>
        );
    }
}