
import { combineReducers } from 'redux';
import hobbyReducer from './hobby';
import userReducer from './user'

const rootReducer = combineReducers({
    hobbys: hobbyReducer,
    users: userReducer
})

export default rootReducer;