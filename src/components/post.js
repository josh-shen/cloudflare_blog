const Post = ({title, username, content, timestamp}) => {
  return <article className='_post'>
    <div className='post_info'>
      <p>{username}, {timestamp}</p>
    </div>
    <div className='post_body'>
      <p className='title'>{title}</p>
      <p>{content}</p>
    </div>
  </article>
};

export default Post;