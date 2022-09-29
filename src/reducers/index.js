import {combineReducers} from 'redux'

import empReducer from './empReducer'
import userReducer from './userReducer'
import studentReducer from './studentReducer'

var rootReducer = combineReducers({
    empReducer,userReducer,studentReducer
})
export default rootReducer;