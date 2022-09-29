import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const url=`http://localhost:3001/users`

export default () => {
      let [userData,setStateUserData]=useState({
      
            uname:'',                // Add Update
            email:'', 
            phone:'',
            txtConformation: ''
            
         })

         // get_parameter_value with destructuring
         let {idno} = useParams();

      // Destructuring......
       var { uname, email, phone, txtConformation } = userData;


        let formDatahandling = (e) => {
            setStateUserData({...userData, [e.target.name]: e.target.value});
     }
         
     useEffect(() => {
        axios.get(`${url}/${idno}`).then((result) =>setStateUserData(result.data));
        
    }, []);

    let submitHandler = (e) => 
     {
      e.preventDefault();
       var FormData =
       {
           uname:`${userData.uname}`,
           email:`${userData.email}`,
           phone:`${userData.phone}`
       }
        axios.put(`${url}/${idno}`, FormData)
           .then(() =>{
            //  window.alert("....CREATED....");
            this.props.history.push('/hooksuser')
        });
       
    }
      return(<>
            <div className="container p-5">
                  <h3 className="text-center">EDIT COMPONENT PAGE</h3>
                  
                <form onSubmit={submitHandler.bind(this)}>       
               
                    <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input type="text" className="form-control" 
                    value={uname} name="uname"
                    onChange={formDatahandling.bind(this)}/>
                    </div>
                    
                    <div className="mb-3">
                    <label className="form-label">EMAIL</label>
                    <input type="text" className="form-control" 
                    value={email} name="email"
                    onChange={formDatahandling.bind(this)}/>
                    </div>
                    
                    <div className="mb-3">
                    <label className="form-label">PHONE</label>
                    <input type="number" className="form-control" 
                    value={phone} name="phone"
                    onChange={formDatahandling.bind(this)}/>
                    </div>

                    <Link className="btn btn-success mx-2" to="/hooksuser">GOTO BACK</Link>
                    <button type="submit" className="btn btn-warning" vlaue="update">UPDATE</button>
                    
                    <p className='text-primary'>{txtConformation}</p>
                </form>
                </div>
            </>)
    }
    


