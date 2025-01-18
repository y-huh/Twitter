import React from 'react';
import Navbar from '../modules/Navbar';
import SiteBar from '../modules/SiteBar';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <SiteBar />
    </>
  );
};

export default DashboardLayout;
