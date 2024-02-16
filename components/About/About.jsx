import React from 'react';

const About = () => {
  const styles = {
    container: {
      
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
    },
    heading: {
      fontSize: '28px',
      color: '#333',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>MY DOC</h2>
      <p style={styles.paragraph}>
        Welcome to our Doctor Appointment Booking System. Our platform is dedicated to providing a seamless and efficient
        experience for both patients and healthcare providers. With user-friendly features, we aim to simplify the process
        of scheduling and managing doctor appointments.
      
        Patients can easily browse through the list of available doctors, check their specialties, and schedule appointments
        at their convenience. The system ensures real-time availability updates, automated appointment reminders, and a secure
        environment for storing patient information.
     
        We believe in enhancing the healthcare experience by reducing wait times, improving accessibility, and promoting a
        more patient-centric approach. Thank you for choosing our Doctor Appointment System, and we look forward to providing
        you with excellent service.
      </p>
    </div>
  );
};

export default About;
