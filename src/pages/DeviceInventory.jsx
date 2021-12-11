import  React, {useEffect,useState}  from 'react';
import { Table, Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { withRouter,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
function DeviceInventory() {
    const history = useHistory();
    const [devices,setDevice] = useState([]);
    function getDeviceData() {
        return new Promise(function (resolve, reject) {
            fetch(`/hardware`)
                .then(res => res.json())
                .then(result => {
                    if (result) {
                      console.log(result);  
                      resolve(result);
    
                    }
                })
        });
    
        
    }
    
    function AddNewDevice(){
        history.push('/deviceInventory/AddNew');
    }

    function deleteDevice(id) {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
         
      };
        return new Promise(function (resolve, reject) {
            fetch(`/hardware/${id}`, requestOptions)
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
        getDeviceData().then(result => {
            if (result) {
              console.log(result);
                setDevice(result);
            }
        });
      }, []);

    return (
        <>
        <div className="deviceInventory">
            <h2>Device Inventory</h2>
            <p></p>
            <button type="button" class="btn btn-primary" onClick={() => {AddNewDevice();}}>Add a new devices</button>
            <p></p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>Device Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Function</th>

                    </tr>
                </thead>
                <tbody>

                    {devices.map((device) => (
                        <tr>
                         
                            <td class="col-md-2">{device.equipmentName}</td>
                            <td>{device.category}</td>
                            <td class="col-md-2">{device.quantity}</td>
                            <td>
                            <button type="button" class="btn btn-secondary" key={device._id} onClick={() => { history.push(`/deviceInventory/edit/${device._id}`) }}>Edit</button>
                                <span><button type="button" class="btn btn-danger" key={device._id} onClick={() => {if(window.confirm("Are you sure you want to delete this category? There is no `OOPS` button later !")){deleteDevice(device._id); window.location.reload(false);} }}>Delete</button></span>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </Table>
                    
        </div>
        </>
    )


}

export default DeviceInventory;