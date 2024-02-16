// AdminProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [adminDetails, setAdminDetails] = useState({
    firstName: 'Roy',
    lastName: 'Mathew',
    phoneNumber: '9563478245',
    address: 'Rose Villa',
    specialization: 'Physician',
    experience: '5 years',
    feePerConsultation: '300',
    adminId: '123' // Replace '123' with the actual admin ID
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch existing details if in edit mode
    if (isEditMode) {
      // You need to implement an API endpoint to fetch existing details
      // For demonstration purposes, I'm setting the existing details here
      const existingDetails = {
        firstName: 'ExistingRoy',
        lastName: 'ExistingMathew',
        phoneNumber: '9876543210',
        address: 'ExistingVilla',
        specialization: 'ExistingPhysician',
        experience: '10 years',
        feePerConsultation: '500'
      };

      setAdminDetails(existingDetails);
    }
  }, [isEditMode]);

  const handleInputChange = (e) => {
    setAdminDetails({
      ...adminDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an adminId in your adminDetails
      const { adminId, ...updatedDetails } = adminDetails;

      // Update existing details
      // You need to implement an API endpoint to update existing details
      await axios.put(`http://localhost:3000/uupdate/${adminId}`, updatedDetails);

      alert('Details updated successfully!');
      setIsEditMode(false); // Exit edit mode after update
    } catch (error) {
      console.error('Error updating data:', error.message);
      alert('Failed to update details. Please try again.');
    }
  };

  const handleEditClick = () => {
    // Enter edit mode
    setIsEditMode(true);
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formSection: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
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
      <h1>{isEditMode ? 'Edit' : 'Admin'} Profile</h1>
      <form onSubmit={isEditMode ? handleUpdate : undefined}>
        {/* Personal Information */}
        <div style={styles.formSection}>
          <h2>Personal Information</h2>
          <label style={styles.label}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={adminDetails.firstName}
              onChange={handleInputChange}
              style={styles.input}
              required
              disabled={!isEditMode}
            />
          </label>
          <label style={styles.label}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={adminDetails.lastName}
              onChange={handleInputChange}
              style={styles.input}
              required
              disabled={!isEditMode}
            />
          </label>
          <label style={styles.label}>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={adminDetails.phoneNumber}
              onChange={handleInputChange}
              style={styles.input}
              required
              disabled={!isEditMode}
            />
          </label>
          <label style={styles.label}>
            Address:
            <textarea
              name="address"
              value={adminDetails.address}
              onChange={handleInputChange}
              style={styles.input}
              required
              disabled={!isEditMode}
            />
          </label>
        </div>

        {/* Professional Information */}
        <div style={styles.formSection}>
          <h2>Professional Information</h2>
          <label style={styles.label}>
            Specialization:
            <input
              type="text"
              name="specialization"
              value={adminDetails.specialization}
              onChange={handleInputChange}
              style={styles.input}
              required
              disabled={!isEditMode}
            />
          </label>
          <label style={styles.label}>
            Experience:
            <input
              type="text"
              name="experience"
              value={adminDetails.experience}
              onChange={handleInputChange}
              style={styles.input}
              required
              disabled={!isEditMode}
            />
          </label>
          <label style={styles.label}>
            Fee Per Consultation:
            <input
              type="text"
              name="feePerConsultation"
              value={adminDetails.feePerConsultation}
              onChange={handleInputChange}
              style={styles.input}
              required
              disabled={!isEditMode}
            />
          </label>
        </div>

        {isEditMode && (
          <button type="submit" style={styles.button}>
            Update
          </button>
        )}

        {!isEditMode && (
          <button type="button" onClick={handleEditClick} style={styles.button}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default AdminProfile;
