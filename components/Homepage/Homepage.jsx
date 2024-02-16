import React from 'react';
import backgroundImage from '../image/login.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    //window.location.reload();
    navigate('/login');
  };

  const styles = {
    mainContainer: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    navbar: {
      width: '100%',
      height: '70px',
      backgroundColor: '#31013b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    h1: {
      color: 'white',
      fontSize: '25px',
      marginLeft: '20px',
    },
    whiteBtn: {
      border: 'none',
      outline: 'none',
      padding: '12px 0',
      backgroundColor: 'white',
      borderRadius: '20px',
      width: '120px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      marginRight: '20px',
    },
  };
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <div style={styles.mainContainer}>
      <nav style={styles.navbar}>
        <h1 style={styles.h1}>MY DOC</h1>
        <div>
          <Link to="/signup">
            <button style={styles.whiteBtn}>
              User Login
            </button>
          </Link>
          <Link to="/admin-signup">
            <button style={styles.whiteBtn}>
              Admin Login
            </button>
          </Link>
          <Link to="/about">
          <button style={styles.whiteBtn} >
           About
          </button>
           </Link>
          <button style={styles.whiteBtn} onClick={handleLogout}>
          Logout
          </button>
           </div>
      </nav>
     
    </div>
  );
};

export default Homepage;
