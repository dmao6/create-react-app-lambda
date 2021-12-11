import React, { useContext } from 'react';

import { Link } from 'react-router-dom';


import './ManagementConsole.css';



function ManagementConsole() {


    return (
        <div className="managementConsole" >
            <div class="col">
                <div class="py-5 text-left">
                    <h2>Admin Dashboard</h2><br /><br />
                    <Link to='/PasswordReset'><button type="button" class="btn btn-primary me-md-2" href="#">Reset Password</button></Link>

                </div>
                <div class="col-md-7 col-lg-8">

                    <div class="container px-4 py-5" id="featured-3">
                        <h2 class="pb-2 border-bottom">Features</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                            <div class="feature col">
                                <div class="feature-icon bg-primary bg-gradient">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="bi" width="1em" height="1em"><use xlinkhref="#collection" /><path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" /></svg>
                                </div>
                                <h2>Device Inventory</h2>
                                <p>Click below to check the current status of device inventory details. </p>
                                <Link to="/deviceInventory" class="icon-link">
                                    Go to Inventory
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="bi" width="1em" height="1em"><use xlinkHref="#chevron-right" /><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </Link>

                            </div>
                            <div class="feature col">
                                <div class="feature-icon bg-primary bg-gradient">
                                    <svg class="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><use xlinkHref="#people-circle" />
                                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
                                    </svg>
                                </div>
                                <h2>FAQ Article Management</h2>
                                <p> This entry is for maintain the FAQ article.      </p>
                                <Link to="/faq" class="icon-link">
                                    Go to FAQ Management
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="bi" width="1em" height="1em"><use xlinkHref="#chevron-right" /><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </Link>
                            </div>

                            <div class="feature col">
                                <div class="feature-icon bg-primary bg-gradient">
                                    <svg class="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                                        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                                        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                                        <use xlinkHref="#toggles2" /></svg>
                                </div>
                                <h2>Contact Management</h2>
                                <p>Click below to maintain the contact list (for Ticket Transfer) </p>
                                <Link to="/contacts" class="icon-link">
                                    Go to tickets
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="bi" width="1em" height="1em"><use xlinkHref="#chevron-right" /><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>


    )

}

export default ManagementConsole;