import { useState } from 'react';
import './Navbar.css'; // Make sure to create the corresponding CSS file
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ( ) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    navigate('/edit-profile');
  };

  return (
    
    <nav className="navbar">
      
      <div className="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <div  className='navbar-item'>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Plans & Pricing</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/login">Login</Link>
        <a href="#login">LogOut</a>
        <div className="navbar-profile" onClick={handleProfileClick}>
        <img src="./spider.jpg" alt="/spider.jpg" className="profile-pic" />
      </div>
      </div>
      

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
    </nav>
  );
};

export default Navbar;
