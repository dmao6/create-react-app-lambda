import React,{ useState, useEffect }  from "react";
import {withRouter, useHistory, useParams} from 'react-router-dom';

function TransferTicket() {

  const params = useParams();
          const [tickets, setTickets] = useState([]);
          const [contacts, setContact] = useState([]);

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
            
            useEffect(() => {
              fetch(`https://damp-river-45159.herokuapp.com/contacts`)
                  .then(res => res.json())
                  .then(result => {
                      if (result) {
                        console.log(result);
                        setContact(result);
                      } 
                  })    
              }, []);
            const handleSubmit = (e) => {
                e.preventDefault();
                const requestOptions = {
                    method: 'PATCH',
                    
                    headers: { 'Content-Type': 'application/json' },
                    body:JSON.stringify(tickets)
                };
                console.log('Internal comment updated: ' + JSON.stringify(tickets));
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
                            alert('Internal comment updated successfully.');
                            history.push('/AllTicket');
                        })
                        });
                  
               
            }

        const handleChange = (e) => {
            let target = e.target; // the element that initiated the event
            let value = target.value; // its value
            let name = target.name; // its name
    
            setTickets(tickets => {
                // return a new object built with the properties from userData 
                // including a new property name:value.  If name:value exists, it will be 
                // overwritten, ie: let obj1 = {x:5,x:6}; console.log(obj1); // {x: 6}  
                return {...tickets, [name]: value}; 
            });
        }

  
    return (

      <div className="container px-5 my-5">
        <form id="ticketxfr" onSubmit={handleSubmit} >
          <div className="form-floating mb-3">
            <input className="form-control" id="ticketNumber" type="text" value={tickets.ticketNumber} placeholder="Ticket Number" data-sb-validations />
            <label htmlFor="ticketNumber">Ticket Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="ticketBreifing" type="text" placeholder="Ticket Breifing" value={tickets.subject+"\n"+tickets.description} style={{height: '10rem'}} data-sb-validations defaultValue={""} />
            <label htmlFor="ticketBreifing">Ticket Breifing</label>
          </div>
          <div className="form-floating mb-3">
            <select className="form-select" id="transferTo" aria-label="Transfer to">
            {contacts.map((c) => (
                                <option value={c.Email}>{c.Name}</option>
                            ))}
            </select>
            <label htmlFor="transferTo">Transfer to</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="additionalEmail" type="email" placeholder="Additional Email" data-sb-validations="email" />
            <label htmlFor="additionalEmail">Additional Email</label>
            <div className="invalid-feedback" data-sb-feedback="additionalEmail:email">Additional Email Email is not valid.</div>
          </div>
          <div className="mb-3">
            <label className="form-label d-block">Transfer Reason</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="needAdditionalAuthorization" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="needAdditionalAuthorization">Need Additional Authorization</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="outsideAgentScoope" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="outsideAgentScoope">Outside Agent Scoope</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="notAnItIssue" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="notAnItIssue">Not an IT Issue</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="notAnEnglishSpeaker" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="notAnEnglishSpeaker">Not an English speaker</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="other" type="checkbox" name="transferReason" data-sb-validations="required" />
              <label className="form-check-label" htmlFor="other">Other</label>
            </div>
            <div className="invalid-feedback" data-sb-feedback="transferReason:required">One option is required.</div>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="additionalCommentNotVisibleToClient" type="text" placeholder="Additional Comment (not visible to client)" style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
            <label htmlFor="additionalCommentNotVisibleToClient">Additional Comment (not visible to client)</label>
            <div className="invalid-feedback" data-sb-feedback="additionalCommentNotVisibleToClient:required">Additional Comment (not visible to client) is required.</div>
          </div>

          <input type="hidden" id="status" name="status" value="Transfered"></input>

          <div className="d-grid">
            <button className="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
}

export default withRouter(TransferTicket);