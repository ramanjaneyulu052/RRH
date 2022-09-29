import {React, useEffect} from 'react';
import {connect} from 'react-redux';

import EmpAction from './../../actions/empAction';
import UsersAction from './../../actions/usersAction';
import StudentAction from './../../actions/studentAction';
import { bindActionCreators } from 'redux';

let HooksRedux = (props) => {
    
    useEffect(()=>{                
    props.EmpAction();
    props.UsersAction();
    props.StudentAction();
    },[]);
    
return(<>
      <div className='container py-2'>
            <h2 className='text-center'>ReactReduxConnection Example</h2>

            <h2>Synchronous Data from Redux_Actions</h2>
            {
                props.empdata.map((res, i) =>
                {
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.email}</li>
                    </ul>)
                })
            }
            <h2>Asynchronous Data-1[GLOBAL RESTAPI] from Redux_Actions</h2>
            {
                props.userdata.map((res, i) =>
                {
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.email}</li>
                    </ul>)
                })
            }

        <h2>Asynchronous Data-2[LOCAL RESTAPI] from Redux_Actions</h2>
            {
                props.studentdata.map((res, i) =>
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
const mapStateToProps = (state) =>{
    // console.log(state)
    return({
         empdata:state.empReducer,
         userdata:state.userReducer,
         studentdata:state.studentReducer
    })
}
const mapDispatchToProps = (dispatch) =>{
   return bindActionCreators({EmpAction,UsersAction,StudentAction}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HooksRedux)