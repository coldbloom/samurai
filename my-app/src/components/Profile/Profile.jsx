import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
        <div className={s.imgbeach}>
          <img src="http://www.expatsholidays.com/wp-content/uploads/2021/11/beach-tour.jpeg"></img>
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile