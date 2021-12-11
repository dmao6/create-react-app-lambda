import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/ticketList.css"
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment'
import dayjs from 'dayjs';

import FilterBar from "../components/filterBar"

var isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

require("es6-promise").polyfill()
require("isomorphic-fetch")


const AllTicket = () => {
  let history = useHistory();
  const [tickets, setTickets] = useState([]);
  const [filterTickets, setFilterTickets] = useState([]);

useEffect(() => {
  fetch("/ticket")
  .then(response => response.json())
  .then(json => setTickets(json))
}, [])

useEffect(() => {
  fetch("/ticket")
  .then(response => response.json())
  .then(json => setFilterTickets(json))
}, [])

const deleteTicket = (id) => {
  const delTicket = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  
  return new Promise(function (resolve, reject) {
    fetch(`/ticket/${id}`, delTicket)
        .then(res => res.json())
        .then(result => {
            if (result) {
              console.log(result);  
              resolve(result);

            }
        })
  });
}

const generateFilterDataForDropdown = () => {
  return [...new Set(tickets.map((ticket) => ticket.status))];
};

const handleFilterName = (name) => {
  const filteredData = tickets.filter((ticket) => {
    const fullName = `${ticket.firstName} ${ticket.lastName}`;
    if(fullName.toLowerCase().includes(name.toLowerCase())) {
      return ticket;
    }
  });
  setFilterTickets(filteredData);
}

const handleFilterStatus = (status) => {
  const filteredData = tickets.filter((ticket) => {
    if(ticket.status === status) {
      return ticket;
    }
  });
  setFilterTickets(filteredData);
}

const handleFilterDate = (date, field) => {
  const filteredData = tickets.filter((ticket) => {
    if(field === 'from' && dayjs(ticket.createOn).isSameOrAfter(dayjs(date))) {
      return ticket;
    }

    if(field === 'to' && dayjs(ticket.createOn).isSameOrBefore(dayjs(date))) {
      return ticket;
    }

  });
  setFilterTickets(filteredData);
}

  return (
    <>
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            
          </div>
          <div class="col-lg-5">
         
            <h1 class="font-weight-light header">All Tickets</h1>
            <FilterBar
              statuses={generateFilterDataForDropdown()} 
              onNameFilter={handleFilterName} 
              onStatusFilter={handleFilterStatus}
              onDateFilter={handleFilterDate}
            />
            <table className="table table-striped ticketTable">
              <thead>
                <tr>
              
                  <th class="col-md-4">Ticket Number</th>
                  <th class="col-md-4">Ticket Status</th>
                  <th class="col-md-4">Requester's ID</th>
                  <th class="col-md-4">Requested By</th>
                  {/* <th class="col-md-4">Requester's Email</th> */}
                  <th class="col-md-4">Ticket Subject</th>
                  <th class="col-md-4">Short Description</th>
                  {/* <th class="col-md-4">Assigned To</th> */}
                  <th class="col-md-4">Date Created On</th>
                  <th class="col-md-4"></th>
                  <th class="col-md-4"></th>
                  <th class="col-md-4"></th>   
                </tr>
              </thead>
              <tbody>
                {filterTickets.map((ticket) => (
                  <tr>
                    <th class="col-md-3">{ticket.ticketNumber}</th>
                    <th class="col-md-3">{ticket.status}</th>
                    <th class="col-md-3">{ticket.studentID}</th>
                    <td class="col-md-3">{ticket.firstName} {ticket.lastName}</td>
                    {/* <td class="col-md-3">{ticket.email}</td> */}
                    <td class="col-md-2">{ticket.subject}</td> 
                    <td class="col-md-3">{ticket.description.slice(0, 100)}</td>
                    {/* <td class="col-md-3"><img src={ticket.file} /></td> */}
                    <td class="col-md-3"><Moment format="YYYY/MM/DD">{ticket.createOn}</Moment></td>
                    <td class="col-md-3"><button  class="btn btn-danger" type="button" key={ticket._id} onClick={()=> {if(window.confirm("Are you sure? If you already got a solution for this ticket, please consider to close it first! ")){deleteTicket(ticket._id); window.location.reload(false);} }}>Delete</button></td>
                    <td class="col-md-3"><button  className="btn btn-primary" key={ticket._id} onClick={() => { history.push(`/TicketLogHistory/${ticket._id}`) }}>Log</button></td>
                    <td class="col-md-3"><button  className="btn btn-warning" disabled={ticket.status === "Closed"} key={ticket._id} onClick={() => { history.push(`/ClosingTicket/${ticket._id}`) }}>Close</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default withRouter(AllTicket);