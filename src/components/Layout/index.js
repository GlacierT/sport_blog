import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div id="footer">
     <p>&copy;Спортивні досягнення області</p>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout