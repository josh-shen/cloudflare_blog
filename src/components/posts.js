import React from 'react';
import Post from './post';

const Posts = ({posts})=> {
  return <section>
    <div>
      {posts.map((post) => {
        return <Post key = {post.timestamp}{...post}></Post>
      })}
    </div>
  </section>
};

export default Posts;