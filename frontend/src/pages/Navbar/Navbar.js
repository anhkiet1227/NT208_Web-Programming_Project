import React, { useState, useEffect } from 'react';
import { Button, ButtonRegister } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Sharing Documents UIT
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
                to='/document' className='nav-links' 
                onClick={closeMobileMenu}
              >
                Documents
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                to='/upload' className='nav-links' 
                onClick={closeMobileMenu}
              >
                Upload
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to='/register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Register</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
