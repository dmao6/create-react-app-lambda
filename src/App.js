import './App.css';

import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

import Navbar from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Install from './pages/Install'
import ReportIssue from './pages/ReportIssue';
import Articles from './pages/Articles';
import RequestService from './pages/requestService';
import Contact from './pages/CTList';
import ContactAdd from './pages/CTAdd';
import ContactEdit from './pages/CTEdit';
import Faq from './pages/faq';
import FaqAdd from './pages/FAQAdd';
import FaqEdit from './pages/FAQEditing';
import ManagementConsole from './pages/ManagementConsole';
import LogIn from './pages/LogIn';
import DeviceInventory from './pages/DeviceInventory';
import ArticleList from './pages/ArticleList';
import TicketManagement from './pages/TicketManagement';
import NewTicket from './pages/createNewTicket';
import AllTicketList from './pages/ticketList';
import TicketLogHistory from './pages/TicketLogHistory';
import CloseTicket from './pages/closeTicket';
import TransferTicket from './pages/ticketTransferring';
import MoreInfo from './pages/requestMoreInfo';
import TicketDashboard from './pages/Dashboard';
import TicketNavbar from './components/TicketNavigation';
import EditTicket from './pages/modExistTicket';
import PasswordReset from './pages/PasswordReset';
import Registration from './pages/Registration';
import AllRentedDevices from './pages/RentedDevice';
import DeviceInventoryAdd from './pages/DeviceInventoryAdd';
import DeviceInventoryEdit from './pages/DeviceInventoryEdit';
import ClosingTicket from './pages/closingTicket';


function App() {

  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  console.log("user's isAdmin is: " + user.isAdmin)

  return (

    <div className="container">

      <Router>
        <Navbar />

        <Route exact path='/'><Home /></Route>
        <Route exact path='/login'>{!isAuthenticated ? <LogIn /> : <Home />}</Route>
        <Route path='/register'>{!isAuthenticated ? <Registration /> : <Home />}</Route>
        <Route path='/install' component={Install} id="S" />
        <Route path='/reportIssue' component={ReportIssue} id="S" />
        <Route path='/articles' component={Articles} id="S" />
        <Route path='/requestService' component={RequestService} id="S" />
        
        <Route path='/faq' component={Faq} id="S" />
        <Route path='/faqadd' component={FaqAdd} id="S" />
        <Route path='/faqedit/:id' component={FaqEdit} id="S" />
        <Route path='/rentedDevice' component={AllRentedDevices} id="S" />
        


        <Route path="/Dashboard" >{user.isAdmin ? <TicketDashboard /> : <Home />}</Route>
        <Route path="/NewTicket" >{user.isAdmin ? <NewTicket /> : <Home />}</Route>
        <Route path="/AllTicket" >{user.isAdmin ? <AllTicketList /> : <Home />}</Route>
        <Route path="/TicketLogHistory/:_id" >{user.isAdmin ? <TicketLogHistory /> : <Home />}</Route>
        <Route path="/ClosingTicket/:_id" >{user.isAdmin ? <ClosingTicket /> : <Home />}</Route>
        <Route path="/moreInfoReq/:_id" >{user.isAdmin ? <MoreInfo /> : <Home />}</Route>
        <Route path="/xfrTo/:_id" >{user.isAdmin ? <TransferTicket /> : <Home />}</Route>
        <Route path="/edit" >{user.isAdmin ? <EditTicket /> : <Home />}</Route>
        <Route path="/CloseTicket" >{user.isAdmin ? <CloseTicket /> : <Home />}</Route>
        <Route path="/TransferTicket" >{user.isAdmin ? <TransferTicket /> : <Home />}</Route>
        <Route path="/MoreInfoRequest" >{user.isAdmin ? <MoreInfo /> : <Home />}</Route>
        <Route path="/contacts" >{user.isAdmin ? <Contact /> : <Home />}</Route>
        <Route path="/contacts/add" >{user.isAdmin ? <ContactAdd /> : <Home />}</Route>
        <Route path="/contacts/edit/:id" >{user.isAdmin ? <ContactEdit /> : <Home />}</Route>
        <Route exact path="/managementconsole">{user.isAdmin ? <ManagementConsole /> : <Home />}</Route>
        <Route exact path="/deviceInventory">{user.isAdmin ? <DeviceInventory /> : <Home />}</Route>
        <Route path='/deviceInventory/AddNew' component={DeviceInventoryAdd} id="S" />
        <Route path='/deviceInventory/edit/:id' component={DeviceInventoryEdit} id="S" />
        <Route exact path="/articleList">{user.isAdmin ? <ArticleList /> : <Home />}</Route>
        <Route exact path="/ticketManagement">{user.isAdmin ? <TicketManagement /> : <Home />}</Route>
        <Route exact path="/PasswordReset">{isAuthenticated ? <PasswordReset /> : <LogIn />}</Route>

      </Router>
    </div>

  );
}

export default App;
