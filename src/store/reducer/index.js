import {combineReducers} from 'redux'
import user from './user'
import chatuser from './chatuser'
let reducer = combineReducers({
    user,
    chatuser
})

export default reducer