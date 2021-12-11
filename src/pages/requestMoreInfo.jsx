
import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { withRouter,useHistory,useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


  


function MoreInfo() {
  const params = useParams();
  const [TicketData, setTicketData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://damp-river-45159.herokuapp.com/ticket/${params._id}`)
        .then(res => res.json())
        .then(result => {
            if (result) {
              console.log(result);
              setTicketData(result);
            } 
        })
    }, []);


  const handleSubmit = (e) => {
      e.preventDefault();
      const requestOptions = {
          method: 'PATCH',
          
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(TicketData)
      };
      console.log('The FAQ Article Was Submitted: ' + JSON.stringify(TicketData));
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
                   alert('Thank you. We already informed the user to provide the information you requested.');
                  history.push('/AllTicket');
               })
              });
        
     
  }

  const handleChange = (e) => {
      let target = e.target; // the element that initiated the event
      let value = target.value; // its value
      let name = target.name; // its name

      setTicketData(TicketData => {
        return {...TicketData, [name]: value};
      })

      setTicketData(TicketData => {
          // return a new object built with the properties from userData 
          // including a new property name:value.  If name:value exists, it will be 
          // overwritten, ie: let obj1 = {x:5,x:6}; console.log(obj1); // {x: 6}  
          //return {...TicketData, [name]: value, ["status"]:"pending respond"};
          return {...TicketData, ["status"]:"Pending Client Response"}; 
      });
  }

  return (
    <div className="MoreInfo">
     <div className="container px-5 my-5"> 
  <form id="contactForm" onSubmit={handleSubmit}>
  <h1 className="display-6">Request more information</h1>
    <div className="form-floating mb-3">
     <input
        className="form-control"
        id="ticketNumber"
        type="text"
        value={TicketData.ticketNumber}
        placeholder="Ticket Number"
        data-sb-validations="required"
        disabled
      /> 
      <label htmlFor="ticketNumber">Ticket Number</label> 
      <div
        className="invalid-feedback"
        data-sb-feedback="ticketNumber:required"
      >
        Ticket Number is required.
      </div>
    </div>

    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id="ticketDetails"
        type="text"
        placeholder="Additional information required, if needed."
        style={{ height: "10rem" }}
        data-sb-validations
        value={TicketData.subject+"\n\n"+TicketData.description}
        disabled
      />
      <label htmlFor="ticketDetails">
       Ticket Details Display:
      </label>
    </div>
    <div className="mb-3">
      <label className="form-label d-block">
        What additional information requsting
      </label>
      <div className="form-check">
        <input
          className="form-check-input"
          id="studentNumber"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="studentNumber">
          Student Number
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="legalFullNameExactMatchStudentIdCard"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label
          className="form-check-label"
          htmlFor="legalFullNameExactMatchStudentIdCard"
        >
          Legal Full Name( Exact Match student ID card)
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="privateNonSchoolProvidedEmail"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label
          className="form-check-label"
          htmlFor="privateNonSchoolProvidedEmail"
        >
          Private(non-school provided) Email
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="phoneNumber"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="phoneNumber">
          Phone Number
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="dateOfBirth"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="dateOfBirth">
          Date of Birth
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="postalCodeForCurrentAddress"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label
          className="form-check-label"
          htmlFor="postalCodeForCurrentAddress"
        >
          Postal Code for Current Address
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="other"
          type="checkbox"
          name="whatAdditionalInformationRequsting"
          data-sb-validations="required"
        />
        <label className="form-check-label" htmlFor="other">
          Other
        </label>
      </div>
      <div
        className="invalid-feedback"
        data-sb-feedback="whatAdditionalInformationRequsting:required"
      >
        One option is required.
      </div>
    </div>
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id="additionalInformationRequiredIfNeeded"
        type="text"
        placeholder="Additional information required, if needed."
        style={{ height: "10rem" }}
        data-sb-validations
        defaultValue={""}
      />
      <label htmlFor="additionalInformationRequiredIfNeeded">
        Additional information required, if needed.
      </label>
    </div>
    <div className="mb-3">
      <label className="form-label d-block">Reason</label>
      <div className="form-check">
        <input
          className="form-check-input"
          id="verificationPurpose"
          type="checkbox"
          name="reason"
         
        />
        <label className="form-check-label" htmlFor="verificationPurpose">
          Verification Purpose
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="duplicationContactFound"
          type="checkbox"
          name="reason"
          data-sb-validations
        />
        <label className="form-check-label" htmlFor="duplicationContactFound">
          Duplication Contact Found
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="noRecordFoundInOrRecordExpiredUpdateIsRequired"
          type="checkbox"
          name="reason"
          data-sb-validations
        />
        <label
          className="form-check-label"
          htmlFor="noRecordFoundInOrRecordExpiredUpdateIsRequired"
        >
          No record found in or Record expired. Update is required.
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="other"
          type="checkbox"
          name="reason"
          data-sb-validations
        />
        <label className="form-check-label" htmlFor="other">
          Other
        </label>
      </div>
    </div>
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id="additionalReasonIfNeeded"
        type="text"
        placeholder="Additional Reason, If needed"
        style={{ height: "10rem" }}
        data-sb-validations
        defaultValue={""}
      />
      <label htmlFor="additionalReasonIfNeeded">
        Additional Reason, If needed
      </label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="emailAddressIfClientProvided"
        type="email"
        placeholder="Email Address (if client provided)"
        data-sb-validations="email"
        onChange={handleChange}
      />
      <label htmlFor="emailAddressIfClientProvided">
        Email Address (if client provided)
      </label>
      <div
        className="invalid-feedback"
        data-sb-feedback="emailAddressIfClientProvided:email"
      >
        Email Address (if client provided) Email is not valid.
      </div>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="phoneNumberIfClientProvided"
        type="text"
        placeholder="Phone number (if client provided)"
        data-sb-validations
      />
      <label htmlFor="phoneNumberIfClientProvided">
        Phone number (if client provided)
      </label>
    </div>
    
   <div>
      <button
        className="btn btn-primary btn-lg"
        id="submitButton"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>
    </div>
  );
}

export default withRouter(MoreInfo);