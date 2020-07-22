import { combineReducers } from 'redux';
import books from './books';


let rootReducer=()=>{
    combineReducers({
        books
    })
}
export default rootReducer;