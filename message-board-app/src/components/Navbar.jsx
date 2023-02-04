import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faFilePen,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <FontAwesomeIcon icon={faHouseChimney} />
        Home
      </Link>
      <Link to='/post'>
        <FontAwesomeIcon icon={faFilePen} />
        Post
      </Link>
      <Link to='/login'>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
