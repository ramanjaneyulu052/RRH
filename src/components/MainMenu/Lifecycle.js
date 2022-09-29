import React from 'react'

class Lifecycle extends React.Component 
{
    //constructor_is_mounting_method
    constructor(props){
        super(props);
        this.state = {}
        console.log(`*****constructor_is_Mounting_method*****`)
    }

//RESTAPI_CALLS.......
componentDidMount()
{
  console.log(`*****componentDidMount_is_Mounting_Method*****`)
}

//Render_is_Mounting_Method
render()
{
    console.log(`*****Render_is_Mounting_Method*****`) 

    return(<>
    <div className="p-5 text-center">
        <h2>REACT CLASS COMPONENT LIFE CYCLE PROCESS</h2>
    </div>
    </>)
}
componentWillMount()
{
   console.log('*****componentWillMount_is_Mounting_Method*****')
}
}
export default Lifecycle;
