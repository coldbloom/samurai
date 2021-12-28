import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'></img>
        { props.message }
      </div>
      <div>
        <span>{ props.like }</span>
        <span>dislike</span>
      </div>
    </div>
  )
}

export default Post