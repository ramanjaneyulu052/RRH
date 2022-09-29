import React, {Component} from "react";
import axios from 'axios'

//Local_variable for RESTAPI_URL
const url = `http://localhost:3001/users` //array type of object

export default class Signup extends Component {

    constructor(props)
    {
        super(props);
        this.state =
        {
           uname:'', 
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
       alert(JSON.stringify(FormData));

    //    axios.post(url, FormData)
    //             .then(() => window.alert("....CREATED...."))
    //             .catch(() => window.alert("....ERROR...."));

    //    axios.post(url, FormData)
    //        .then(() => this.setState({txtConformation: 'Accounted Created...'}))
    //        .catch(() => this.setState({txtConformation: 'Accounted Failed...'}));

        //    axios.post(url, FormData)
        //    .then(() => this.props.history.push('/restapi'));

           axios.post(url, FormData)
           .then(() =>{
             window.alert("....CREATED....");
            this.props.history.push('/restapi')
        })
       
    }

    render() {
             console.log(this.props)

        // Destructuring......
        var { uname, email, phone, txtConformation } = this.state      

        return (<>
              <div className="container p-3">
                  <h2 className="py-3 text-center">User Registration</h2>
                  <div className="container w-50">

                  <form onSubmit={this.submitHandler.bind(this)}>

                    <div className="mb-3" >
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control " 
                    value={uname}
                    onChange={this.unameHandling.bind(this)}/>
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control "
                    value={email}
                    onChange={this.emailHandling.bind(this)}/>
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="number" className="form-control "
                    value={phone}
                    onChange={this.phoneHandling.bind(this)}/>
                    </div>

                    <div className="mb-3">
                   <button type="submit"className="btn btn-primary text-center">CREATE ACCOUNT</button>
                    </div>
                    <p className="text-primary">{txtConformation}</p>
                  </form>
                  </div>
              </div>
        </>)
    }
}