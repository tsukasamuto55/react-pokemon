import React, { useEffect, useState } from 'react';
import './CreatePost.css';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();
  const navigate = useNavigate();
  const commentId = new Date().getTime().toString();

  const docData = {
    title: title,
    comment: comment,
    author: {
      username: auth.currentUser.displayName,
      id: auth.currentUser.uid,
    },
  };

  const postComment = async () => {
    await setDoc(doc(db, 'comment', commentId), docData);

    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) navigate('/login');
  }, []);
  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h2>Post a new comment</h2>
        <div className='inputPost'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            placeholder='Input a title'
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='inputPost'>
          <label htmlFor='new-comment'>Comment</label>
          <textarea
            type='text'
            id='new-comment'
            placeholder='type your comment'
            onChange={e => setComment(e.target.value)}
          />
        </div>
        <button className='postButton' onClick={postComment}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
