// Layout.js
import React from 'react';
import LoadingBar from 'react-top-loading-bar';

const Layout = ({ children }) => {
  return (
    <div>
      <LoadingBar height={3} color='#f11946' />
      {children}
    </div>
  );
};

export default Layout;
