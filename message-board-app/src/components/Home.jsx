import React, { useEffect, useState } from 'react';
import './Home.css';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
  const [postComment, setPostComment] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'comment'));
      setPostComment(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

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
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
