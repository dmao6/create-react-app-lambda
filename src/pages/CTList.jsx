import { Accordion } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';
import React, { useEffect, useState, useContext } from 'react';
import { withRouter,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function CTList( props) {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  const history = useHistory();
  const [contact, setContact] = useState([]);

  function getContactData() {
    return new Promise(function (resolve, reject) {
        fetch(`https://damp-river-45159.herokuapp.com/contacts`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                  console.log(result);  
                  resolve(result);

                }
            })
    });

    
}

function deleteContactRecord(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
   
};
  return new Promise(function (resolve, reject) {
      fetch(`https://damp-river-45159.herokuapp.com/contacts/${id}`, requestOptions)
          .then(res => res.json())
          .then(result => {
              if (result) {
                console.log(result);  
                resolve(result);

              }
          })
  });

  
}

function AddNewContact(){
  history.push('/contacts/add');
}

useEffect(() => {
  getContactData().then(result => {
      if (result) {
        console.log(result);
          setContact(result);
      }
  });
}, []);


  return (
    <div id="ContactForms">
      <h1>Contact Information Maintain</h1>
    {isAuthenticated? <button className="btn btn-success" onClick={() => {AddNewContact();}}>Add new Contact Entry</button>:""}
   
    <p> </p>
      <Accordion defaultActiveKey="0">
    {contact.map((c) =>
    
       <Accordion.Item eventKey={c._id} >  
          <Accordion.Header>{c.Name}</Accordion.Header>
          <Accordion.Body><p>Email: {c.Email}</p><p>Phone: {c.Phone}</p><p>Address: {c.Address}</p> <p></p>  {isAuthenticated? <button className="btn btn-outline-danger" key={c._id} onClick={() => {if(window.confirm("Are you sure you want to delete this contact? This CANNOT be undone!")){deleteContactRecord(c._id); window.location.reload(false);};  }} >Delete this contact</button>:""  }
           {isAuthenticated?<button className="btn btn-outline-primary" key={c._id} onClick={() => { history.push(`/contacts/edit/${c._id}`) }}>Edit this contact</button>:""}
          </Accordion.Body>
          </Accordion.Item>
      
  )
  }
  
  </Accordion>

  
    </div>
  );


   
}

export default CTList;
