import{combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import ProductReducer from './productreducer.js';
import LoginReducer from './loginreducer';
const root = combineReducers({
    
        ProductReducer,
       
})
const store = createStore(root);
export default store;