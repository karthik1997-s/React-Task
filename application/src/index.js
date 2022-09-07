import { BrowserRouter } from 'react-router-dom';
import  ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from '../src/App.js';
import { Provider } from 'react-redux';
import store from './store/reducers/index';


 
ReactDOM.render(
  <Provider store={ store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
      </Provider>
        
    
       
    ,document.getElementById('root')
    
);


