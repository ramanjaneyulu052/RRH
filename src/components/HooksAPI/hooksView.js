import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default () => {
  
      var [userData, setStateUserData] = useState ({
           id: '',
           uname: '', 
           email: '',
           phone: '',
           
      });
      //get parameter value
      let {idno} = useParams();

      //Desturcturing for object
    var { id, uname, email, phone } = userData
   
//Restapi_calls
 useEffect(() => {
    const url =`http://localhost:3001/users/${idno}`
   axios.get(url).then((result)=> setStateUserData(result.data));
  },[]);

        return(<>
        <div className="container p-5"> 
            <h3>VIEW COMPONENT PAGE</h3>
            <p>
                {idno} th Record Data
            </p>
            <ul> 
                <li>{id}</li>
                <li>{uname}</li>
                <li>{email}</li>
                <li>{phone}</li>
            </ul>
            <Link to ={"/hooksuser"} className="btn btn-success">GOTO BACK</Link>
        </div>
        </>)
}

