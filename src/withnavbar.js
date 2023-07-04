import React from 'react';
import Appnavbar from './navbar';
import { Outlet } from 'react-router';
import Appfooter from './footer';

const WithNav = () => {
  return (
    <>
      <Appnavbar />
      <Outlet />
      <Appfooter />
      
    </>
  );
};
export default WithNav;