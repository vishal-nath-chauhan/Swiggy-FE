import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './UserReducer';
import orderReducer from './OrderReducer';

const appReducer = combineReducers({
	order: orderReducer,
	user: userReducer,
});

const reducer = (state, action) => {
	return appReducer(state, action);
};
export default reducer;
