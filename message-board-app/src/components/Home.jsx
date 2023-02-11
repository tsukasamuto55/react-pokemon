import React, { useEffect, useState } from 'react';
import './Home.css';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [postComment, setPostComment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'comment'));
      setPostComment(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async id => {
    await deleteDoc(doc(db, 'comment', id));
    window.location.href = '/';
  };
  return (
    <div className='homePage'>
      {postComment.map(comment => {
        return (
          <div key={comment.id} className='postContents'>
            <div className='postHeader'>
              <h2>{comment.title}</h2>
            </div>

            <div className='postCommentContainer'>{comment.comment}</div>
            <div className='nameAndDeleteButton'>
              <h3>@{comment.author.username}</h3>

              {comment.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(comment.id)}>Delete</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
