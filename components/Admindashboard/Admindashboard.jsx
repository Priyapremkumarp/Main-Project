import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Your logout logic here
    localStorage.removeItem("token");
    //window.location.reload();
    navigate('/admin-login');
  
  };

  const styles = {
    navbar: {
      width: '100%',
      height: '70px',
      backgroundColor: '#31013b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
    },
    brand: {
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    linkContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    links: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 15px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    logoutBtn: {
      border: 'none',
      outline: 'none',
      padding: '12px 20px',
      backgroundColor: 'white',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <div>
      <div style={styles.navbar}>
        <h1 style={styles.brand}>MY DOC</h1>
        <div style={styles.linkContainer}>
          <Link to="/" style={styles.links}>
            Home
          </Link>
          <Link to="/userDetails" style={styles.links}>
            User Details
          </Link>
          <Link to="/admin-profile" style={styles.links}>
           Adminprofile
          </Link>
          <Link to="/appointment"style={styles.links}>
            Appointments
            
          </Link>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* Your Navbar content goes here */}
    </div>
  );
};

export default Navbar;
