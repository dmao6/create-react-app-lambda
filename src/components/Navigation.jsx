import React, { useContext, useState } from 'react'
import { Button } from 'reactstrap'

import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Navigation.css';
import { IconContext } from 'react-icons'
import { TicketSidebarData } from './ticketSidebarData'
import { withRouter } from 'react-router-dom';
/* function Navbar() {
  const [sidebar, sectSidebar] = useState(false)
  const showSidebar = () => sectSidebar(!sidebar)
  let location = window.location.pathname;
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
            {

              SidebarData.map((item, index) => {
                return (

                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
} */

//////////////trying new version with authentication 

function Navbar(props) {

  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
  const [sidebar, sectSidebar] = useState(false)
  const showSidebar = () => sectSidebar(!sidebar)
  //let location = window.location.pathname;

  const onClickLogoutHandler = () => {
    AuthService.logout().then(data => {
      if (data.success) {
        console.log("data logout: " + data.success)
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated)
        props.history.push('/')
        window.location.reload(false);

      }
    });
  }

  const unauthenticatedNavBar = () => {
    return (
      <>
        <li className="nav-text">
          <Link to='/'><AiIcons.AiFillHome /><span>Home</span></Link>
        </li>
        <li className="nav-text">
          <Link to='/reportIssue'><AiIcons.AiFillPlusCircle /><span>Report Issue</span></Link>
        </li>
        <li className="nav-text">
          <Link to='/requestService'><FaIcons.FaLaptop /><span>Request Service</span></Link>
        </li>
        {/* <li className="nav-text">
          <Link to='/articles'><FaIcons.FaBookOpen /><span>Troubleshooting Articles</span></Link>
        </li> */}
        <li className="nav-text">
          <Link to='/install'><FaIcons.FaDownload /><span>Install Software</span></Link>
        </li>
        {/* <li className="nav-text">
          <Link to='/contact'><AiIcons.AiFillContacts /><span>Contact Information</span></Link>
        </li> */}
        <li className="nav-text">
          <Link to='/faq'><AiIcons.AiFillQuestionCircle /><span>FAQ</span></Link>
        </li>
        {user.isAdmin? <li className="nav-text">
          <Link to='/dashboard'><AiIcons.AiFillFile /><span>To Ticket System</span></Link>
        </li> : null}
        <li className="nav-text">
          <Link to='/Login'><AiIcons.AiOutlineLogin /><span>Login</span></Link>
        </li>

      </>
    )
  }

  const authenticatedNavBar = () => {
    return (
      <>
        <li className="nav-text">
          <Link to='/'><AiIcons.AiFillHome /><span>Home</span></Link>
        </li>
        <li className="nav-text">
          <Link to='/reportIssue'><AiIcons.AiFillPlusCircle /><span>Report Issue</span></Link>
        </li>
        <li className="nav-text">
          <Link to='/requestService'><FaIcons.FaLaptop /><span>Request Service</span></Link>
        </li>
        {/* <li className="nav-text">
          <Link to='/articles'><FaIcons.FaBookOpen /><span>Troubleshooting Articles</span></Link>
        </li> */}
        <li className="nav-text">
          <Link to='/install'><FaIcons.FaDownload /><span>Install Software</span></Link>
        </li>
        {/* <li className="nav-text">
          <Link to='/contact'><AiIcons.AiFillContacts /><span>Contact Information</span></Link>
        </li> */}
        <li className="nav-text">
          <Link to='/faq'><AiIcons.AiFillQuestionCircle /><span>FAQ</span></Link>
        </li>


        {

          TicketSidebarData.map((item, index) => {
            return (
              user.isAdmin ?
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                : null

            )
          })}
        <li className="nav-text">
          <Button type="button" onClick={onClickLogoutHandler}><AiIcons.AiOutlineLogout /><span>Logout</span></Button>
        </li>

      </>
    )
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
            {/*               {

                SidebarData.map((item, index) => {
                  return (

                    <li key={index} className={item.className}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                })} */}
            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}



          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};


export default withRouter(Navbar)