import {React, Component} from 'react';

import {connect} from 'react-redux';

import EmpAction from './../../actions/empAction';
import UsersAction from './../../actions/usersAction';
import StudentAction from './../../actions/studentAction';

import { bindActionCreators } from 'redux';

class ReactReduxConnection extends Component
{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    componentDidMount()
    {
    this.props.EmpAction();
    this.props.UsersAction();
    this.props.StudentAction();
    }

    render()
{
      return(<>
      <div className='container py-2'>
            <h2 className='text-center'>ReactReduxConnection Example</h2>

            <h2>Synchonous Data from Redux_Actions</h2>
            {
                this.props.empdata.map((res, i) =>
                {
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.email}</li>
                    </ul>)
                })
            }
            <h2>Asynchonous Data-1[GLOBAL RESTAPI] from Redux_Actions</h2>
            {
                this.props.userdata.map((res, i) =>
                {
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.email}</li>
                    </ul>)
                })
            }

        <h2>Asynchonous Data-2[LOCAL RESTAPI] from Redux_Actions</h2>
            {
                this.props.studentdata.map((res, i) =>
                {
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.email}</li>
                    </ul>)
                })
            }

            </div>
      </>)
}
}

const mapStateToProps = (state) =>{
    // get the data from the redux_store[state data] by using Reducers[state object].....
    
    console.log(state)
    return({
         empdata:state.empReducer,
         userdata:state.userReducer,
         studentdata:state.studentReducer
    })
}
const mapDispatchToProps = (dispatch) =>{
   return bindActionCreators({EmpAction,UsersAction,StudentAction}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConnection)