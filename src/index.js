import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index-reducer';
import App from './components/App';



const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
   
<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>

    , document.getElementById('root'));

