import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { withRouter, useHistory  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function ContactAdd() {
    const [contactData, setContactData] = useState("");
    const history = useHistory();
    
    useEffect(() => {
        setContactData({
            Name: "",
            Email:"",
            Phone:"",
            Address:""
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(contactData)
        };
        console.log('The Contact Record Was Submitted: ' + JSON.stringify(contactData));
          return new Promise(function (resolve, reject) {
              fetch(`https://damp-river-45159.herokuapp.com/contacts/`, requestOptions)
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
                     alert('Contact Added');
                    history.push('/contacts');
                    window.location.reload(false);
                 })
                });
          
       
    }

    const handleChange = (e) => {
        let target = e.target; // the element that initiated the event
        let value = target.value; // its value
        let name = target.name; // its name

        setContactData(contactData => {
            // return a new object built with the properties from userData 
            // including a new property name:value.  If name:value exists, it will be 
            // overwritten, ie: let obj1 = {x:5,x:6}; console.log(obj1); // {x: 6}  
            return {...contactData, [name]: value}; 
        });
    }

    return(
    <div className="container px-5 my-5">
        <form id="NewFAQForm" onSubmit={handleSubmit}>
            <h2>Add a new Contact Entry</h2>
          <div className="form-floating mb-3">
            <input className="form-control" id="Name" name="Name" type="text" placeholder="Input Name Here" value={contactData.Name} onChange={handleChange} />
            <label htmlFor="Name">Contact/Department Name</label>
            <div className="invalid-feedback" data-sb-feedback="Name:required">Name is required.</div>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="Email" name="Email" type="text" placeholder="Email" value={contactData.Email} onChange={handleChange} />
            <label htmlFor="Email">Email</label>
            <div className="invalid-feedback" data-sb-feedback="Email:required">Email is required.</div>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="Phone" name="Phone" type="text" placeholder="Phone" value={contactData.Phone} onChange={handleChange} />
            <label htmlFor="Phone">Phone</label>
            
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="Address" name="Address" type="text" placeholder="Input Address Here" style={{height: '10rem'}} value={contactData.Address} onChange={handleChange} />
            <label htmlFor="Address">Address</label>
            
          </div>
         
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" id="ContactSubmit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  
   
};

export default ContactAdd;
