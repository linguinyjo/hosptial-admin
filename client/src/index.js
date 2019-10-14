import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(reducers, persistedState, applyMiddleware(reduxThunk))

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

