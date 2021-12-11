import React, { useState, useEffect } from "react";
import {withRouter, useHistory, useParams} from 'react-router-dom';
import ticketList from "./ticketList";
//import { useEffect } from 'react';
function TicketLogHistory(props) {
        const params = useParams();
          const [tickets, setTickets] = useState([]);
          const [users, setUsers] = useState([]);

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

    // const [tickets, setTickets] = useState([]);
// let ticket = tickets[props.match.params._id];

// console.warn("props", props.match.params._id)

// useEffect(async () => {
//   let result = await fetch(`/ticket/+${props.match.params._id}`)
//   result = await result.json();
//   setTickets(result)
// }, [])

// useEffect(() => {
//     fetch("/ticket")
//     .then(response => response.json())
//     .then(json => setTickets(json));
//   }, [])
    

  return(
  <div>
      <style type="text/css" dangerouslySetInnerHTML={{__html: "@media print{.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}" }} />
      <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/themes/CSS/defaultV2.css?" />
      <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/themes/CSS/548b1325700cc48d318b4567.css?themeRevisionID=60d3156fd82983013b471ba1" />
      <link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.28156" />
      <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.28156" />
      <form className="jotform-form" onSubmit={handleSubmit}>
      
        <div role="main" className="form-all">
          <style dangerouslySetInnerHTML={{__html: "\n      .form-all:before { background: none;}\n    " }} />
          <ul className="form-section page-section">
            <li id="cid_1" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_1" className="form-header" data-component="header">
                    IT Service Ticket Log
                  </h1>
                  <div id="subHeader_1" className="form-subHeader">
                    View Ticket History Log
                  </div>
                 
                </div> 
                <div  className="d-flex justify-content-end">
                <button type="submit" className= {tickets.status=="Closed"?"btn btn-success":"btn btn-danger"} >
                {tickets.status=="Closed"?"Re-Open This Ticket":"Close This Ticket"}
                  </button>
                  </div>
              </div>
            </li>
         
            <li className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_15">
              <label className="form-label form-label-top form-label-auto" id="label_15" htmlFor="input_15"> Ticket Number </label>
              <div id="cid_15" className="form-input-wide" data-layout="half">
                <input type="text" value={tickets.ticketNumber} id="ticketNumber" name="ticketNumber" data-type="input-textbox" className="form-textbox" data-defaultvalue style={{width: '310px'}} size={310}  data-component="textbox" aria-labelledby="label_15" />
              </div>
            </li>

            <li className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_15">
              <label className="form-label form-label-top form-label-auto" id="label_15" htmlFor="input_15"> Student/Employee ID </label>
              <div id="cid_15" className="form-input-wide" data-layout="half">
                <input type="text" value={tickets.studentID} id="studentID" name="studentID" data-type="input-textbox" className="form-textbox" data-defaultvalue style={{width: '310px'}} size={310}  data-component="textbox" aria-labelledby="label_15" />
              </div>
            </li>

            <li className="form-line form-line-column form-col-3" data-type="control_fullname" id="id_3">
              <label className="form-label form-label-top form-label-auto" id="label_3" htmlFor="first_3"> Student/Employee Name </label>
              <div id="cid_3" className="form-input-wide" data-layout="full">
                <div data-wrapper-react="true">
                  <span className="form-sub-label-container" style={{verticalAlign: 'top'}} data-input-type="first">
                    <input type="text" value={tickets.firstName} id="firstName" name="firstName" className="form-textbox" data-defaultvalue size={10}  data-component="first" aria-labelledby="label_3 sublabel_3_first" />
                    <label className="form-sub-label" htmlFor="first_3" id="sublabel_3_first" style={{minHeight: '13px'}} aria-hidden="false"> First Name </label>
                  </span>
                  <span className="form-sub-label-container" style={{verticalAlign: 'top'}} data-input-type="last">
                    <input type="text" value={tickets.lastName} id="lastName" name="lastName" className="form-textbox" data-defaultvalue size={15}  data-component="last" aria-labelledby="label_3 sublabel_3_last" />
                    <label className="form-sub-label" htmlFor="last_3" id="sublabel_3_last" style={{minHeight: '13px'}} aria-hidden="false"> Last Name </label>
                  </span>
                </div>
              </div>
            </li>
            
            <li className="form-line form-line-column form-col-1 jf-required" data-type="control_textbox" id="id_12">
              <label className="form-label form-label-top form-label-auto" id="label_12" htmlFor="input_12">
                Topic
                <span className="form-required">
                  *
                </span>
              </label>
              <div id="cid_12" className="form-input-wide jf-required" data-layout="half">
              {/* {tickets.map((ticket)=>(  */}
                <input type="text" value={tickets.subject} id="input_12" name="q12_topic" data-type="input-textbox" className="form-textbox validate[required]" data-defaultvalue style={{width: '310px'}} size={310}  data-component="textbox" aria-labelledby="label_12" required />
            {/*   ))}   */}
              </div>
            </li>
         
            <li className="form-line jf-required" data-type="control_textarea" id="id_6">
              <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">
                Attachments:
                <span className="form-required">
                  *
                </span>
              </label>
              <div id="cid_6" className="form-input-wide jf-required" data-layout="full">
                <a href={"https://damp-river-45159.herokuapp.com/files/"+tickets.file}>{tickets.file}</a>
              </div>
            </li>
            <li className="form-line jf-required" data-type="control_textarea" id="id_6">
              <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">
                Client's Issue in Detail
                <span className="form-required">
                  *
                </span>
              </label>
              <div id="cid_6" className="form-input-wide jf-required" data-layout="full">
                <textarea id="input_6" value={tickets.description} className="form-textarea validate[required]" name="q6_describeThe" style={{width: '648px', height: '163px'}} data-component="textarea" required aria-labelledby="label_6" defaultValue={""} />
              </div>
            </li>
            <li className="form-line" data-type="control_textarea" id="id_14">
              <label className="form-label form-label-top form-label-auto" id="label_14" htmlFor="input_14"> Internal ITS Comment (Client will NOT see this) </label>
              <div id="cid_14" className="form-input-wide" data-layout="full">
                <textarea id="internalComment" value={tickets.internalComment} onChange={handleChange} className="form-textarea" name="internalComment" style={{width: '648px', height: '163px'}} data-component="textarea" aria-labelledby="label_14" defaultValue={""} />
              </div>
            </li>
            <li className="form-line" data-type="control_textarea" id="id_18">
              <label className="form-label form-label-top" id="label_18" htmlFor="input_18"> Ticket History (Display Only) </label>
              <div id="cid_18" className="form-input-wide" data-layout="full">
                <textarea id="input_18" value={"Created On: " + tickets.createOn +  "             Status: " + tickets.status} className="form-readonly form-textarea" name="q18_ticketHistory18" style={{width: '648px', height: '163px'}} tabIndex={-1} data-component="textarea" readOnly aria-labelledby="label_18" defaultValue={""} />
              </div>
            </li>
            <li className="form-line" data-type="control_button" id="submit">
              <div id="cid_20" className="form-input" data-layout="full">
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary" data-component="button" data-content>
                    Update
                  </button>
                  <button className="btn btn-secondary" onClick={()=>{tickets.status=="Closed"? alert('This ticket has been closed, please re-open first if you need to do this action'):history.push(`/moreInfoReq/${tickets._id}`)}}>
                    Request More Information
                  </button>
                  <button className="btn btn-info" onClick={()=>{tickets.status=="Closed"? alert('This ticket has been closed, please re-open first if you need to do this action'):history.push(`/xfrTo/${tickets._id}`)}}>
                    Transfer this ticket
                  </button>
                  
                </div>
              </div>
            </li>
           
          </ul>
        </div> 
      </form>
    </div>
  );  
}

export default withRouter(TicketLogHistory);