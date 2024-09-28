

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
