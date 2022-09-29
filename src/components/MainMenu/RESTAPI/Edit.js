import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//Global 
var idno;

const url=`http://localhost:3001/users/`

export default class Edit extends Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
           uname:'',                // Add Update
           email:'', 
           phone:'',
           txtConformation: ''
        }
    }

     //Name_input_textbox
     unameHandling = (e) => {
        this.setState({ uname: e.target.value })
    }
    //Email_input_textbox
    emailHandling = (e) => {
        this.setState({ email: e.target.value })
    }
    //Phone_input_textbox
    phoneHandling = (e) => {
        this.setState({ phone: e.target.value })
    }

    submitHandler = (e) => 
    {

        e.preventDefault();
       var FormData =
       {
           'uname': this.state.uname,
           'email': this.state.email,
           'phone': this.state.phone
       }
      

            axios.put(`${url}/${idno}`, FormData)
           .then(() =>{
            //  window.alert("....CREATED....");
            this.props.history.push('/restapi')
        });
       
    }
    
    render(){
        idno = this.props.match.params.idno
        console.log(idno)

        // Destructuring......
        var { uname, email, phone, txtConformation } = this.state

       return(<>
            <div className="container p-5">
                  <h3 className="text-center">EDIT COMPONENT PAGE</h3>
                  
                <form onSubmit={this.submitHandler.bind(this)}>       
               
                    <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input type="text" className="form-control" 
                    value={uname}
                    onChange={this.unameHandling.bind(this)}/>
                    </div>
                    
                    <div className="mb-3">
                    <label className="form-label">EMAIL</label>
                    <input type="text" className="form-control" 
                    value={email}
                    onChange={this.emailHandling.bind(this)}/>
                    </div>
                    
                    <div className="mb-3">
                    <label className="form-label">PHONE</label>
                    <input type="number" className="form-control" 
                    value={phone}
                    onChange={this.phoneHandling.bind(this)}/>
                    </div>

                    <Link className="btn btn-success mx-2" to="/restapi">GOTO BACK</Link>
                    <button type="submit" className="btn btn-warning" vlaue="update">UPDATE</button>
                    
                    <p className='text-primary'>{txtConformation}</p>
                </form>
                </div>
            </>)
    }
     //RESTAPI_CALLS
     componentDidMount(){
    axios.get(`${url}/${idno}`).then((result) => this.setState(result.data));
    //update apidata to empty state object via setstate
     }
}

