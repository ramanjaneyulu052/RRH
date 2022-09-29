import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//Local_variable for RESTAPI_URL
const url = `http://localhost:3001/users` //array type of object

export default (props) => {
    let [userData, setStateUserData] = useState([]);

    let getData = () => {
        axios.get(url).then((result) => setStateUserData(result.data))
    }
    useEffect(() => { getData() }, []);

    //delete the data
    let DeleteHandler = (id) => {
        if (window.confirm(`Deleted the Record Number is ${id}?`)) {
            axios.delete(`${url}/${id}`)  //http://localhost:3001/users
            getData();
        }
    }
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
                        userData.map((res, i) => {
                            return (<tr key={i}>
                                <td>{i + 1}</td>
                                <td>{res.uname}</td>
                                <td>{res.email}</td>
                                <td>{res.phone}</td>

                                <td>
                                    <Link to={`/hooksuser/view/${res.id}`} className="btn btn-primary">View</Link>
                                </td>
                                <td>
                                    <Link to={`/hooksuser/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                                </td>
                                <td>
                                    <button onClick={() => DeleteHandler(res.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>) 
                        })
                    }

                </tbody>

            </table>

        </div>
    </>)
}
