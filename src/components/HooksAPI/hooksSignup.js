import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const url = `http://localhost:3001/users`  //array type of object

export default (props) => {

    var [userData, setStateUserData] = useState({
        uname : '',
        email : '',
        phone : '',
        txtConformation:''
    })
   
//destructuring
var {uname, email, phone, txtConformation} = userData;

 /* unameHandling = (e) => {
    this.setState({uname:e.target.value})
  }

  mailHandling = (e) => {
    this.setState({mail:e.target.value})
  }

  phoneHandling=(e)=>{
    this.setState({phone:e.target.value})
  } */


  let formDatahandling = (e) => {
    setStateUserData({...userData, [e.target.name]: e.target.value});
  }


  let submitHandler=(e)=>{

    e.preventDefault();

    var FormData=
    {
      uname:`${userData.uname}`,
      email:`${userData.email}`,
      phone:`${userData.phone}`
    }
    alert(JSON.stringify(FormData));

         //for autoredirect page
            axios.post(url, FormData)
            .then(()=>{
              //window.alert("..created..")
              props.history.push('/hooksUser')
            });
    }
    return(<>

     <div className="container p-3">
      <h3 className="text-center py-3">USER REGISTRATION</h3>
      <div className="container w-50">
        
        <form onSubmit={submitHandler.bind(this)}>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control"
                value={uname} name="uname"
            onChange={formDatahandling.bind(this)}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"
                value={email} name ="email"
            onChange={formDatahandling.bind(this)}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="number" className="form-control"
                value={phone} name ="phone"
            onChange={formDatahandling.bind(this)}/>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">CREATE NEW ACCOUNT</button>
          </div>

          <p className="text-primary">{txtConformation}</p>

        </form>
      </div>
    </div>
    </>)
  }
