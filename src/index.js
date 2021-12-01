import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import appResducers from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  appResducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
  <App />
</Provider>,
</BrowserRouter>,
document.getElementById('root')
);

reportWebVitals();
