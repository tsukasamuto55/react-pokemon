import React, { useEffect, useState } from 'react';
import './Post.css';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Post = ({ isAuth }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const postBlog = async () => {
    await addDoc(collection(db, 'blog-posts'), {
      title: title,
      text: body,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);
  return (
    <div className='post-page'>
      <div className='blog-container'>
        <h3>Post a blog</h3>

        <label htmlFor='title'>
          Title
          <input
            type='text'
            className='title'
            id='title'
            placeholder='Input a title'
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor='body'>
          Text
          <textarea
            type='text'
            className='body'
            id='body'
            placeholder='Write details'
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </label>
        <button className='post-btn' onClick={postBlog}>
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;
