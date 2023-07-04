import React from 'react';
import Appfooter from './footer';
import { Outlet } from 'react-router';


const Withfoot = () => {
  return (
    <>
      <Appfooter />
      <Outlet />
    </>
  );
};
export default Withfoot;