import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './reducers/authReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  login:authReducer
});

export default reducer;

// Define RootState based on the shape of your rootReducer
export type RootState = ReturnType<typeof reducer>
