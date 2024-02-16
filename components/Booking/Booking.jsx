// Booking.js
// Booking.js
import React, { useState } from 'react';
import { useDoctorContext } from '../Doctor/DoctorContext';

const Booking = () => {
  const { bookingDetails, setBookingDetails, doctorDetails } = useDoctorContext();
  const [email, setEmail] = useState('');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details submitted:', bookingDetails);
    // Rest of your code...
  
  

  

    // Check if doctorDetails is not null before accessing its properties
    if (doctorDetails && doctorDetails.email) {
      // Check if the provided email matches the registered email
      if (email !== doctorDetails.email) {
        alert('Booking failed. Please use the registered email for booking.');
        return;
      }
    } else {
      alert('Doctor details not available. Unable to process booking.');
      return;
    }

    // Add logic to submit the booking details to your API or perform other actions

    // Set bookingDetails in the context
    setBookingDetails({
      username: 'exampleUser',
      phoneNumber: '1234567890',
      date: '2024-02-14', // Replace with actual date picker value
      payment: 'Credit Card', // Replace with actual payment value
    });

    alert('Booking submitted successfully!');
    // You can also reset the form if needed
    // setBookingDetails({
    //   username: '',
    //   phoneNumber: '',
    //   date: '',
    //   payment: '',
    // });
  };

  // ... rest of the component


  // ... rest of the component


  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#31013b',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center' }}>Booking</h1>
      <form onSubmit={handleBookingSubmit}>
        {/* Booking Fields */}
        <label style={styles.label}>
          Username:
          <input type="text" name="username" style={styles.input} required />
        </label>
        <br /><label style={styles.label}>
         Email:
          <input type="text" name="email" style={styles.input} required />
        </label>
        <br />

        <label style={styles.label}>
          Phone Number:
          <input type="tel" name="phoneNumber" style={styles.input} required />
        </label>
        <br />
        <label style={styles.label}>
          Date:
          <input type="date" name="date" style={styles.input} required />
        </label>
        <br />
        <label style={styles.label}>
          Payment:
          <input type="text" name="payment" style={styles.input} required />
        </label>
        <br />

        <button type="submit" style={styles.button}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
