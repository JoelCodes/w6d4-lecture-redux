import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { incrementReducer, uselessMW, delayMW, startAPICallThunk, thunkMW } from './reducers/increment';

const incrementReduxStore = createStore(incrementReducer, applyMiddleware(uselessMW, delayMW, thunkMW));

incrementReduxStore.dispatch(startAPICallThunk);

ReactDOM.render(<Provider store={incrementReduxStore}>
  <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
