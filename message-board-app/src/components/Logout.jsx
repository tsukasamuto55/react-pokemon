import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.clear();
      navigate('/login');
    });
  };
  return (
    <div>
      <p>Logout</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
