import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { withRouter, useHistory  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function FAQAdd() {
    const [FAQData, setFAQData] = useState("");
    const history = useHistory();
    
    useEffect(() => {
        setFAQData({
            articleTitle: "",
            body:"",
            category:""
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(FAQData)
        };
        console.log('The FAQ Article Was Submitted: ' + JSON.stringify(FAQData));
          return new Promise(function (resolve, reject) {
              fetch(`https://damp-river-45159.herokuapp.com/faq/`, requestOptions)
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
                     alert('Article Added');
                    history.push('/faq');
                 })
                });
          
       
    }

    const handleChange = (e) => {
        let target = e.target; // the element that initiated the event
        let value = target.value; // its value
        let name = target.name; // its name

        setFAQData(FAQData => {
            // return a new object built with the properties from userData 
            // including a new property name:value.  If name:value exists, it will be 
            // overwritten, ie: let obj1 = {x:5,x:6}; console.log(obj1); // {x: 6}  
            return {...FAQData, [name]: value}; 
        });
    }

    return(
    <div className="container px-5 my-5">
        <form id="NewFAQForm" onSubmit={handleSubmit}>
            <h2>Add a new FAQ article</h2>
          <div className="form-floating mb-3">
            <input className="form-control articleTitle" id="articleTitle" name="articleTitle" type="text" placeholder="Input Title Here" value={FAQData.articleTitle} onChange={handleChange} />
            <label htmlFor="articleTitle">FAQ Title</label>
            <div className="invalid-feedback" data-sb-feedback="articleTitle:required">Title is required.</div>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="body" name="body" type="text" placeholder="FAQ Solution" style={{height: '10rem'}} value={FAQData.body} onChange={handleChange} />
            <label htmlFor="body">FAQ Solution</label>
            <div className="invalid-feedback" data-sb-feedback="body:required">Body is required.</div>
          </div>
          <div className="mb-3">
            <label className="form-label d-block">Category</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="hardware" type="radio" name="category" checked={FAQData.category==="hardware"} value="hardware" onChange={handleChange} />
              <label className="form-check-label" htmlFor="hardware">Hardware</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="software" type="radio" name="category" checked={FAQData.category==="software"} value="software" onChange={handleChange} />
              <label className="form-check-label" htmlFor="software">Software</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="network" type="radio" name="category" checked={FAQData.category==="network"} value="network" onChange={handleChange}/>
              <label className="form-check-label" htmlFor="network">Network</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="other" type="radio" name="category"  checked={FAQData.category==="other"} value="other"onChange={handleChange}/>
              <label className="form-check-label" htmlFor="other">Other</label>
            </div>
            <div className="invalid-feedback" data-sb-feedback="category:required">One option is required.</div>
          </div>
         
          
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" id="FAQSubmit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  
   
};

export default FAQAdd;
