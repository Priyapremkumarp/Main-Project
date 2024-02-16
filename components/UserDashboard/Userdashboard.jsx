import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDoctorContext } from '../Doctor/DoctorContext';

const Userdashboard = () => {
  const{doctorDetails}=useDoctorContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    //window.location.reload();
    navigate('/user-login')
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
      textDecoration: 'none',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    linkContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 15px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer', // Add cursor style
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
        <Link to="/" style={styles.brand}>
          MY DOC
        </Link>
        <div style={styles.linkContainer}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/userProfile" style={styles.link}>
            UserProfile
          </Link>
          <Link to="/doctorDetails" style={styles.link}>
            Doctor Details
          </Link>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* Your Userdashboard content goes here */}
    </div>
  );
};

export default Userdashboard;
