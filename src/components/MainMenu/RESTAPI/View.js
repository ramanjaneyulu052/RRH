import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//Global
var idno;

export default class view extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
                 //viewdata:{ }
        }
    }
    render(){
        idno = this.props.match.params.idno
    
        console.log(idno)
        return(<>
        <div className="container p-5">
            <h3>VIEW COMPONENT PAGE</h3>
            <p>
                {idno} th Record Data
            </p>
            <ul> 
                <li>{this.state.id}</li>
                <li>{this.state.uname}</li>
                <li>{this.state.email}</li>
                <li>{this.state.phone}</li>
            </ul>
            <Link to ={"/restapi"} className="btn btn-success">GOTO BACK</Link>
        </div>
        </>)
    }

//Restapi_calls
   componentDidMount()
 {
    const url =`http://localhost:3001/users/${idno}`

    axios.get(url).then((result)=> this.setState(result.data));
 }
}