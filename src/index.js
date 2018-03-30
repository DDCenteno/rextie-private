import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index-reducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './App.css'

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
   
<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>

    , document.getElementById('root'));
registerServiceWorker();
