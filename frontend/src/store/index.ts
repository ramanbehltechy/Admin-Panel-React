

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'; // Import your root reducer

import thunk from 'redux-thunk'; // For example, using Redux Thunk middleware

const store = createStore(
    reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;



// import { createStore } from 'redux';
// import reducer from './reducer';

// // ==============================|| REDUX - MAIN STORE ||============================== //

// const store = createStore(reducer);
// const persister = 'Free';

// export { store, persister };