import React, { useState, useEffect } from "react";
import {withRouter, useHistory, useParams} from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

function ClosingTicket(props) {
        const params = useParams();
          const [tickets, setTickets] = useState([]);

          const history = useHistory();
          useEffect(() => {
            fetch(`https://damp-river-45159.herokuapp.com/ticket/${params._id}`)
                .then(res => res.json())
                .then(result => {
                    if (result) {
                      console.log(result);
                      setTickets(result);
                    } 
                })    
            }, []);

            const handleSubmit = (e) => {
                e.preventDefault();
                const answer = window.confirm("Are you sure you want to close the ticket?");
                if (answer) {
                    const requestOptions = {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body:JSON.stringify(tickets)
                    };
                    console.log('Ticket Closed: ' + JSON.stringify(tickets));
                      return new Promise(function (resolve, reject) {
                          fetch(`https://damp-river-45159.herokuapp.com/ticket/${params._id}`, requestOptions)
                          .then((response) => {
                            return response.json();
                          })    
                              .then(result => {
                                  if (result) {
                                    console.log(result);  
                                    resolve(result);
                    
                                  }
                              })
                              .then(()=>{
                                alert('Ticket closed successfully.');
                                history.push('/AllTicket');
                            })
                        });
                }
            }

        const handleChange = (e) => {
            let target = e.target; // the element that initiated the event
            let value = target.value; // its value
            let name = target.name; // its name
    
            setTickets(tickets => {
                return {...tickets, [name]: value}; 
            });

            setTickets(tickets => {
                return {...tickets, ["status"]: "Closed"}; 
            });
        }

  return(
    <div className="CloseTicket">
      <h1 className="display-6">Closing Ticket</h1>
      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>Submitted By</Form.Label>
          <Form.Control placeholder="Enter first name" required name="submittedBy" value={tickets.firstName + " " + tickets.lastName} readOnly />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridID">
          <Form.Label>Ticket Number</Form.Label>
          <Form.Control placeholder="Enter student ID" required name="studentID" type="number" value={tickets.ticketNumber} readOnly />
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter last name" required name="lastName" value={tickets.lastName} readOnly />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="+1 (416)-254-1234" required name="phone" value={tickets.phone} readOnly />
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" name="email" value={tickets.email} onChange={handleChange} />
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Enter subject line" name="subject" required value={tickets.subject} readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={4} name="description" required value={tickets.description} readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Closing Notes</Form.Label>
        <Form.Control as="textarea" rows={4} name="solution" required value={tickets.solution} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Close
      </Button>
    </Form>
      
    </div>
  );  
}

export default withRouter(ClosingTicket);