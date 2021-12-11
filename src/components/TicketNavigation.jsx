import React, { useContext, useState } from 'react'

import { Link, withRouter } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Navigation.css';
import { IconContext } from 'react-icons'
import { TicketSidebarData } from './ticketSidebarData'

import AuthService from '../Services/AuthService';
import AuthContext from '../Context/AuthContext';
import { propTypes } from 'react-bootstrap/esm/Image';

function TicketNavbar(props) {
  // const {user, setUser, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  const [sidebar, sectSidebar] = useState(false);

  const showSidebar = () => sectSidebar(!sidebar)

  const onClickLogoutHandler = () => {
     AuthService.logout().then(data=>{
      if(data.success){
        // setUser(data.user);
        // setIsAuthenticated(false);

        props.history.push('/')
        window.location.reload(false);
      }
    }); 


  }

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className="navbar">
          <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            {/* <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose/>
            </Link>
          </li> */}
            {TicketSidebarData.map((item, index) => {
              return (

                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
            <button type="button"
              className="btn btn-link nav-item nav-link" onClick={onClickLogoutHandler}><AiIcons.AiOutlineLogout />Logout
            </button>

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default withRouter(TicketNavbar)