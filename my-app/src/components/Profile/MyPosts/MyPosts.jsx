import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>
        My post
        <div>
          New Post
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you' like='15' />
        <Post message='It is my first post' like='20' />
        
      </div>
    </div>
  )
}

export default MyPosts