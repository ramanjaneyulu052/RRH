import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


//Local_variable for RESTAPI_URL
const url = `http://localhost:3001/users` //array type of object

class Restapi extends Component {

    constructor(props) {
        super(props)

        this.state =
        {
            userData: [] //empty Array
        }
    }
      getData = ()=> {
        axios.get(url).then((result) => this.setState({ userData:result.data }));
      }

    //delete the data
    DeleteHandler = (id) => {

        if(window.confirm (`Deleted the Record Number is ${id}`)) {

         //Delete the seleted id Record   
        axios.delete(`${url}/${id}`)  //http://localhost:3001/users
         
        //Fetch Rest of the records after delete for Display
        this.getData()

        }
    } 
    //Render_is_Mounting_Method
    render() {
        return (<>
            <div className="container p-5">
                <h3 className="text-center"> FETCH RESTAPI DATA USING LOCAL URL/CLIENT</h3>
                <table className="table table-dark table-border">
                    <thead className="table table-primary">
                        <tr>
                            <th>ID</th>
                             <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th colSpan="3" className="text-center"> ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.userData.map((res, i) => {
                                return (<tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{res.uname}</td>
                                    <td>{res.email}</td>
                                    <td>{res.phone}</td>
                                    
                                    <td>
                                        <Link to={`/restapi/view/${res.id}`} className="btn btn-primary">View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/restapi/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => this.DeleteHandler(res.id)}className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                
                    </tbody>
                 
                </table>

            </div>
        </>)

      
      }
          //RESTAPI_CALLS
    componentDidMount(){
        this.getData()
     }
         
    }
export default Restapi