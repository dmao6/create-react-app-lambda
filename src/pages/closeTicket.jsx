import React, { useState, useEffect } from "react";
import {withRouter} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import { search } from "../components/getTickets";

function CloseTicket() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  
  useEffect(() =>{
    if(!(query || query.length)) {
      // clears if nothing in search box
      setResults(null);
      return;
    }

    search(query).then(results => {
      if(results) {
        setResults(results)
      }
    }).catch(err => console.log(err))
  }, [query]);

  return (
    <div className="CloseTicket">
      <h1 className="display-6">Close Ticket</h1>
      <Search query={query} onChange={(e) => setQuery(e.target.value)} />
      <Container fluid>
        <SearchResults results={results}/>
      </Container>
    </div>
  );
}

export default withRouter(CloseTicket);





// import React from "react";
// import {withRouter} from 'react-router-dom';
// function CloseTicket() {
//   return (
    
//     <div className="CloseTicket">
      
//       <div className="container px-5 my-5">
//   <form id="contactForm" data-sb-form-api-token="API_TOKEN">
//   <h1 className="display-6">Close Ticket</h1>
//     <div className="form-floating mb-3">
//       <input
//         className="form-control"
//         id="ticketNumber"
//         type="text"
//         placeholder="Ticket Number"
//         data-sb-validations="required"
//       />
//       <label htmlFor="ticketNumber">Ticket Number</label>
//       <div
//         className="invalid-feedback"
//         data-sb-feedback="ticketNumber:required"
//       >
//         Ticket Number is required.
//       </div>
//     </div>
//     <div className="form-floating mb-3">
//       <textarea
//         className="form-control"
//         id="ticketInformationDisplay"
//         type="text"
//         placeholder="Ticket Information (Display)"
//         style={{ height: "10rem" }}
//         data-sb-validations
//         defaultValue={""}
//       />
//       <label htmlFor="ticketInformationDisplay">
//         Ticket Information (Display)
//       </label>
//     </div>
//     <div className="form-floating mb-3">
//       <select
//         className="form-select"
//         id="pickAQuickSolution"
//         aria-label="Pick a Quick Solution"
//       >
//         <option value="Password Reset Procedure">
//           Password Reset Procedure
//         </option>
//         <option value="Returned Device Received">
//           Returned Device Received
//         </option>
//         <option value="Loan Device Ready to Picked-up">
//           Loan Device Ready to Picked-up
//         </option>
//         <option value="Transferred to Non-IT Department">
//           Transferred to Non-IT Department
//         </option>
//         <option value="Others">Others</option>
//       </select>
//       <label htmlFor="pickAQuickSolution">Pick a Quick Solution</label>
//     </div>
//     <div className="form-floating mb-3">
//       <textarea
//         className="form-control"
//         id="solutionsYourClientWillSeeThis"
//         type="text"
//         placeholder="Solutions:(Your Client Will See This)"
//         style={{ height: "10rem" }}
//         data-sb-validations="required"
//         defaultValue={""}
//       />
//       <label htmlFor="solutionsYourClientWillSeeThis">
//         Solutions:(Your Client Will See This)
//       </label>
//       <div
//         className="invalid-feedback"
//         data-sb-feedback="solutionsYourClientWillSeeThis:required"
//       >
//         Solutions:(Your Client Will See This) is required.
//       </div>
//     </div>
//     <div className="form-floating mb-3">
//       <input
//         className="form-control"
//         id="additionalContactEmailAddressOptional"
//         type="email"
//         placeholder="Additional Contact Email Address (optional)"
//         data-sb-validations="email"
//       />
//       <label htmlFor="additionalContactEmailAddressOptional">
//         Additional Contact Email Address (optional)
//       </label>
//       <div
//         className="invalid-feedback"
//         data-sb-feedback="additionalContactEmailAddressOptional:email"
//       >
//         Additional Contact Email Address (optional) Email is not valid.
//       </div>
//     </div>
//     <div className="mb-3">
//       <div className="form-check form-switch">
//         <input
//           className="form-check-input"
//           id="addTheSolutionToMyQuickSolutionList"
//           type="checkbox"
//           name="addTheSolutionToMyQuickSolutionList"
//         />
//         <label
//           className="form-check-label"
//           htmlFor="addTheSolutionToMyQuickSolutionList"
//         >
//           Add the solution to my Quick solution list
//         </label>
//       </div>
//     </div>
//     <div className="form-floating mb-3">
//       <input
//         className="form-control"
//         id="quickSolutionTitle"
//         type="text"
//         placeholder="Quick Solution Title"
//         data-sb-validations
//       />
//       <label htmlFor="quickSolutionTitle">Quick Solution Title</label>
//     </div>
//     <div className="form-floating mb-3">
//       <textarea
//         className="form-control"
//         id="additionalCommentsYourClientWillNotSeeThis"
//         type="text"
//         placeholder="Additional Comments: (Your client will NOT see this)"
//         style={{ height: "10rem" }}
//         data-sb-validations
//         defaultValue={""}
//       />
//       <label htmlFor="additionalCommentsYourClientWillNotSeeThis">
//         Additional Comments: (For ITS internal reference only. Your client will NOT see this)
//       </label>
//     </div>
//     <div className="d-none" id="submitSuccessMessage">
//       <div className="text-center mb-3">
//         <div className="fw-bolder">Form submission successful!</div>
//         <p>To activate this form, sign up at</p>
//         <a href="https://startbootstrap.com/solution/contact-forms">
//           https://startbootstrap.com/solution/contact-forms
//         </a>
//       </div>
//     </div>
//     <div className="d-none" id="submitErrorMessage">
//       <div className="text-center text-danger mb-3">Error sending message!</div>
//     </div>
//     <div className="d-grid">
//       <button
//         className="btn btn-primary btn-lg disabled"
//         id="submitButton"
//         type="submit"
//       >
//         Submit
//       </button>
//     </div>
//   </form>
// </div>

//     </div>
//   );
// }

// export default withRouter(CloseTicket);