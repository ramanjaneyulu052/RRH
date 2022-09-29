import React,{Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import EmpAction from './../../actions/empAction'

// CREATE CONTACT COMPONENT
class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    componentDidMount()
    {
      this.props.EmpAction();
    }
   
      render (){
         return (<>

        <h1 className="text-center text-primary"> CONTACT COMPONENT</h1>

        <p className="para"> In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        </p>
        <br/> 
        {
                this.props.empinfo.map((res, i) =>
                {
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.email}</li>
                    </ul>)
                })
            }

    </>)
    }
}

function mapStateToProps(state)
{
   return({
       empinfo:state.empReducer
   })
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({EmpAction}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);