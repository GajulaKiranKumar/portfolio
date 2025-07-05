import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../style/Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='port'>Portfolio</div>

    
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <Link to='/home'><div className='nav-item'>Home</div></Link>
        <Link to='/skills'><div className='nav-item'>Skills</div></Link>
        <Link to='/about'><div className='nav-item'>About</div></Link>
        <Link to='/contact'><div className='nav-item'>Contact</div></Link>
      </div>
    </div>
  );
}

export default Nav;
