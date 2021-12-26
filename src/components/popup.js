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
        setUsername('')
        setTitle('')
        setBody('')
        props.setTrigger(false)
    }

    const handleCancel = () => {
        props.setTrigger(false)
        setUsername('')
        setTitle('')
        setBody('')
    }

    return (props.trigger) ? (
        <div className = 'popup'>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input
                        type = 'text'
                        name = 'username'
                        placeholder = 'Username'
                        value = {username}
                        onChange = {e => setUsername(e.target.value)}
                        className = 'username_form'
                    />
                    <br></br>
                    <input
                        type = 'text'
                        name = 'title'
                        placeholder = 'Title'
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                        className = 'title_form'
                    />
                    <br></br>
                    <input 
                        type = 'text'
                        name = 'post'
                        placeholder = 'Text (optional)'
                        vallue = {body}
                        onChange = {e => setBody(e.target.value)}
                        className = 'post_form'
                    />
                </div>
                <input type = 'submit' value = 'Post'/>
                <button className = 'close_btn' onClick = {handleCancel}>Cancel</button>
                    {props.children}
            </form>
        </div>
    ) : ''
}

export default Popup
