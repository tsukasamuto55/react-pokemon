import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'blog-posts'));
      setPostList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async id => {
    await deleteDoc(doc(db, 'blog-posts', id));
    window.location.reload();
  };
  return (
    <>
      {postList.map(post => {
        return (
          <div key={post.id} style={{ margin: '0 auto' }}>
            <h2>{post.title}</h2>
            <div>{post.text}</div>
            <div>@{post.author.username}</div>
            {post.author.id === auth.currentUser.uid && (
              <button onClick={() => deletePost(post.id)}>Delete</button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Home;
