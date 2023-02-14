import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to='/'>
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      {isAuth ? (
        <>
          <Link to='/post'>
            <FontAwesomeIcon icon={faFilePen} />
            Post a message
          </Link>
          <Link to='/logout'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to='/login'>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
