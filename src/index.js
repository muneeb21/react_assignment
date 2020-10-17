import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import data from './reducers';
import './index.css';
import App from './components/App';

const store=createStore(data);



ReactDOM.render(
  
    <App store={store} />,
  document.getElementById('root')
);


