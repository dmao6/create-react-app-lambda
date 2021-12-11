import React, { useContext } from 'react';
import Navbar from '../components/Navigation'
import { Link } from 'react-router-dom';

import { AuthContext } from '../Context/AuthContext';


function Home() {

  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div className='home'>
        <div className="container-fluid-dash">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Home</h1>
            <br />
          </div>
          <div class="py-5">
            { isAuthenticated? 
              <Link to='/PasswordReset'><button type="button" class="btn btn-primary me-md-2" href="#">Reset Password</button></Link>
            : null }
          </div>
          {/*           <a
            href="/dashboard"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50" /> Go to Ticketing System
          </a> */}

        </div>
      </div>
    </>
  );
}

export default Home;