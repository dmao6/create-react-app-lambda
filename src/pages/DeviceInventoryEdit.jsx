import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { withRouter, useHistory,useParams   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function DeviceInventoryEdit() {
  const params = useParams();  
  const [devices,setDevice] = useState("");
    const history = useHistory();
    
    useEffect(() => {
      fetch(`/hardware/${params.id}`)
          .then(res => res.json())
          .then(result => {
              if (result) {
                console.log(result);
                setDevice(result);
              } 
          })
      

  }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      const requestOptions = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(devices)
      };
        console.log('The Device Was Submitted: ' + JSON.stringify(devices));
          return new Promise(function (resolve, reject) {
            fetch(`/hardware/${params.id}`, requestOptions)
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
                     alert('Device Updated');
                    history.push('/deviceInventory');
                 })
                });
          
       
    }

    const handleChange = (e) => {
        let target = e.target; // the element that initiated the event
        let value = target.value; // its value
        let name = target.name; // its name

        setDevice(device => {
            // return a new object built with the properties from userData 
            // including a new property name:value.  If name:value exists, it will be 
            // overwritten, ie: let obj1 = {x:5,x:6}; console.log(obj1); // {x: 6}  
            return {...device, [name]: value}; 
        });
    }
    return (

      <div className="container px-5 my-5">
        <form id="NewInventoryForm" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input className="form-control" id="equipmentName" name="equipmentName" type="text" placeholder="Device Name" value={devices.equipmentName} onChange={handleChange} data-sb-validations="required" />
            <label htmlFor="equipmentName">Device Name</label>
            <div className="invalid-feedback" data-sb-feedback="deviceName:required">Device Name is required.</div>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="quantity" name="quantity" type="number" placeholder="Quantity" value={devices.quantity} onChange={handleChange} data-sb-validations="required" />
            <label htmlFor="quantity">Quantity</label>
            <div className="invalid-feedback" data-sb-feedback="quantity:required">Quantity is required.</div>
          </div>
          <div className="mb-3">
            <label className="form-label d-block">Category</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="laptop" type="radio" name="category" checked={devices.category==="Laptop"} value="Laptop" onChange={handleChange} data-sb-validations />
              <label className="form-check-label" htmlFor="laptop">Laptop</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="desktop" type="radio" name="category" checked={devices.category==="Desktop"} value="Desktop" onChange={handleChange} data-sb-validations />
              <label className="form-check-label" htmlFor="desktop">Desktop</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="tablet" type="radio" name="category" checked={devices.category==="Tablet"} value="Tablet" onChange={handleChange} data-sb-validations />
              <label className="form-check-label" htmlFor="tablet">Tablet</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="soundRecorder" type="radio" name="category" checked={devices.category==="Sound Recorder"} value="Sound Recorder" onChange={handleChange} data-sb-validations />
              <label className="form-check-label" htmlFor="soundRecorder">Sound Recorder</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="camera" type="radio" name="category" checked={devices.category==="Camera"} value="Camera" onChange={handleChange} data-sb-validations />
              <label className="form-check-label" htmlFor="camera">Camera</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="other" type="radio" name="category" checked={devices.category==="Other"} value="Other" onChange={handleChange} data-sb-validations />
              <label className="form-check-label" htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="comment" name="comment" type="text" placeholder="Comment" value={devices.comment} onChange={handleChange}/>
            <label htmlFor="comment">Comment</label>
          </div>
       
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default DeviceInventoryEdit;
