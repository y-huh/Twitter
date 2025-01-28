import React from 'react';
import Navbar from '../modules/Navbar';
import Sitebar from '../modules/Sitebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex	'>
      <Navbar />
      <div className='w-[50%] h-[100vh] overflow-y-auto border-r-2 border-slate-400'>{children}</div>
      <Sitebar />
    </div>
  );
};

export default DashboardLayout;
