import React, { useState } from "react";
import './popup.css'

function Popup(props){
    const [username, setUsername] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const url = 'https://my-worker.joshshen.workers.dev/'
      
    const submitPost = async (data) => {
        await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        console.log('test submit')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, title, body)
        let post = {
            title: title,
            username: username,
            content: body,
            timestamp: Date()
        }
        submitPost(post)
        document.getElementById('create_post_form').reset()
        props.setTrigger(false)
    }

    return (props.trigger) ? (
        <div className = 'popup'>
            <form onSubmit = {handleSubmit} id = 'create_post_form'>
                <div>
                    <label>
                        <input
                            type = 'text'
                            placeholder = 'username'
                            value = {username}
                            onChange = {e => setUsername(e.target.value)}
                            className = 'username_form'
                        />
                        <br></br>
                        <input
                            type = 'text'
                            placeholder = 'title'
                            value = {title}
                            onChange = {e => setTitle(e.target.value)}
                            className = 'title_form'
                        />
                        <br></br>
                        <input 
                            type = 'text'
                            placeholder = 'post'
                            vallue = {body}
                            onChange = {e => setBody(e.target.value)}
                            className = 'post_form'
                        />
                    </label>
                </div>
                <input type = 'submit' value = 'Post'/>
                <button className = 'close_btn' onClick = {() => props.setTrigger(false)}>Cancel</button>
                    {props.children}
            </form>
        </div>
    ) : ""
}

export default Popup