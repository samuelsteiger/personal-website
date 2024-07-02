import "./contact_me.css"
import { useState } from 'react';
import axios from 'axios'
import ErrorMsg from "./error_msg";

export default function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [error_msgs, setErrMsg] = useState([]);

    function sayHello() {
        
        console.log(name);
        console.log(email);
        console.log(text);
        

    
          
    }

    function submitNote() {
        const noteFormData = new FormData();
        noteFormData.append("name", name)
        noteFormData.append("email", email)
        noteFormData.append("text", text)

        axios({
            method: "post",
            url: "note/",
            data: noteFormData,
            headers: { "Content-Type": "application/json" },
        })
        .catch((error) => {
            var errors = []
            for (let err of error.response.data.errors) {
                errors.push(err.msg + " in "+err.path+".");
            }
            setErrMsg(errors)
        });
    }

    var onChangeHandler = (setter) => {
        return (event) => {setter(event.target.value)}
    } 

    return( 
    <>
         <form>
            <p class = "contact-me-title">Leave Me A Note!</p>
            <input onChange={onChangeHandler(setName)} class = "small-text-input" type="text" id="name" name="name" placeholder="Name"/><br/>
            <input onChange={onChangeHandler(setEmail)} class = "small-text-input" type="text" id="email" name="email" placeholder="Email"/><br/>
            <textarea onChange={onChangeHandler(setText)} class = "large-text-input" type="text" id="text" name="text" placeholder="Your Message"/><br/>
            <ErrorMsg error_msgs = {error_msgs}/>
            <button onClick={submitNote} class = "button-input" type="button" id="share" name="share">Share</button>
        </form> 
    </>
    )
       
}