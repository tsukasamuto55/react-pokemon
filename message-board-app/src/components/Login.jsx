import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
      setIsAuth(true);
      localStorage.setItem('isAuth', true);
      navigate('/');
    });
  };
  return (
    <div>
      <p>Login to start</p>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
