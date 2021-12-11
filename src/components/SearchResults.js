import React from "react";
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';

export default function SearchResults({ results }) {
    let history = useHistory();

    if (!results) {
        return null;
    }
    if (results.length === 0){
        return <p>No results.</p>
    }
    return (
        <div className="home">
          <div class="container">
            <div class="row align-items-center my-5">
              <div class="col-lg-7">
              </div>
              <div class="col-lg-5">
                
    
                <table className="table table-striped ticketTable">
                  <thead>
                    <tr>
                      <th class="col-md-4">Ticket number</th>
                      <th class="col-md-4">Requested by</th>
                      <th class="col-md-4">Ticket subject</th>
                      <th class="col-md-4">Short description</th>
                      <th class="col-md-4">Created on</th>
                      <th class="col-md-4">Status</th>
                      <th class="col-md-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((ticket)=> (
                      <tr>
                        <th class="col-md-3">{ticket.ticketNumber}</th>
                        <td class="col-md-3">{ticket.firstName} {ticket.lastName}</td>
                        <td class="col-md-2">{ticket.subject}</td> 
                        <td class="col-md-3">{ticket.description}</td>
                        <td class="col-md-3">
                          <Moment format="YYYY/MM/DD">{ticket.createOn}</Moment>
                        </td>
                        <td class="col-md-3">{ticket.status}</td>
                        <td class="col-md-3"><button  className="btn btn-warning" disabled={ticket.status === "Closed"} key={ticket._id} onClick={() => { history.push(`/ClosingTicket/${ticket._id}`) }}>Close</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}