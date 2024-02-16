// DoctorContext.js
import { createContext, useContext, useState } from 'react';

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <DoctorContext.Provider value={{ doctorDetails, setDoctorDetails, bookingDetails, setBookingDetails }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  return useContext(DoctorContext);
};
