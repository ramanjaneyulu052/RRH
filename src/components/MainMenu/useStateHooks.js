import {React,useState} from 'react'

export default (props) => {

    //State object implementation
    var [stateEmail, setStateEmail] = useState("Ram@gmail.com");

    //State object changes
    let handleStateEmail =() => {
        setStateEmail("Anji@gmail.com");
    }
    return(<>
          <div className="container p-4">
           <h1>React Hooks UseState</h1>
           {stateEmail} <br/> <br/>
           <button onClick={handleStateEmail}>Update Email</button>
           </div>
    </>)
}