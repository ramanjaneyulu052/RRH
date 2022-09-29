import React from 'react'

function Child(props){

    console.log(props);

    //object_destructuring_for_props
    var { eid, ename, esal, eaddress} = props

    return(<>
         <div className="border p-5">
           <h1>CHILD COMPONENT</h1>
           {props.eid}-{props.ename}-{props.esal}
         </div>
    
    </>)
}
export default Child;