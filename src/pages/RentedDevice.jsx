

import "../components/ticketList.css"
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter,useHistory} from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
const AllRentedDevices = () => {
  const [Renter, setRenter] = useState([]);
  const history=useHistory();
  
  function getRentData() {
    return new Promise(function (resolve, reject) {
        fetch(`/requestService`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                  console.log(result);  
                  resolve(result);

                }
            })
    });

    
}

useEffect(() => {
    getRentData().then(result => {
        if (result) {
          console.log(result);
          setRenter(result);
        }
    });
  }, []);

  if(Renter.length===0){
      return (<><p>No Devices are lent out at this point.</p> </>);
  }
  
  else{
    return (
        
        <div className="rentedList">
        
      
                <h1>All Rented Device</h1>
                <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">Renter's ID</th>
      <th scope="col">Renter's Name</th>
      <th scope="col">Device Rented</th>
      <th scope="col">Rented Date</th>
      <th scope="col">Returned Date</th>
      <th scope="col">Return Action</th>
    </tr>
  </thead>
  <tbody>
  {Renter.map((R)=> (
                  <tr>
                    <th scope="col">{R.id}</th>
                    <td scope="col">{R.requestingPerson}</td>
                    <td scope="col">{R.equipment}</td>
                    <td scope="col">{R.DateRented}</td>
                    <td scope="col">{R.DateReturned}</td>
                    <td scope="col"><button type="submit" class="btn btn-danger">Return</button></td>
                  </tr>
                ))}
   
    
    
  </tbody>
</table>

       </div>
      );
  }
  
}

export default AllRentedDevices;