import todoreducer from "./todoreducer";
import {combineReducers} from 'redux'


const rootreducer=combineReducers({todo:todoreducer,})

export default rootreducer;