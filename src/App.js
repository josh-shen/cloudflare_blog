import React, { useState, useEffect } from 'react'
import Posts from './components/posts'
import Popup from './components/popup'

const url = 'https://my-worker.joshshen.workers.dev/'

function App() {
  const [posts, setPosts] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false)

  const fetchPosts = async () => {
    const response = await fetch(url)
    const posts = await response.json()
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return <main>
    <button className = 'post_btn' onClick = {() => setButtonPopup(true)}>Create a post</button>
    <Posts posts = {posts} />
    <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}/>
  </main>

}

export default App