// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu ESTADO GLOBAL

import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
