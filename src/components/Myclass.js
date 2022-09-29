import React from 'react'

class Myclass extends React.Component {

    //constructor
    constructor(props){
        super(props)
        
     //step-1 state object initialization
        this.state={
            email:'kumar1@gmail.com',
            phone: 7896541230
        }   
    }
    statechanges=()=>
    {
        this.setState({
            email:'kumar2@gmail.com',
            phone: 9998887771
        })
    }
   

//class_method
    render() {

    return (<>
        <div className="container p-5">
        <h1>React Class Component & state & Events </h1>

        {/* step-2: Access state object properties from jsx */}
         <p>Email is: {this.state.email}</p>

        {/* step-3: change state object data by this.setstate */}
        <button onClick={()=>this.setState({emai:'vijayakumar@gmail.com'})}>
            Change My Email</button>
        <br/> <br/>

        <p>phone is :{this.state.phone}</p>
         {/* step-3: change state object data by this.setstate */}
         <button onClick={()=>this.setState({phone:7896541230})}>
            Change My PhoneNo</button>
        <br/> <br/>  

        <button onClick={()=>this.statechanges()}>update All state properties</button> 

        </div>    
        </>);
    }
}
export default Myclass;