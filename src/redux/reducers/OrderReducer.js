import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { apis } from '../../api/api';

// redux thunk => behind the scenes

//  API calls function
// import createAsyncThunk
// 1. function => Rules => unique name ,unique string
// 2. api call => Axios,Fetch,ApiSauce
// 3. wait till we receive output
// 4. check data is received or not
// 5. data received =>return data in format u prefer to use
// 6 in case of error

// dispatch(signUpUser(
//     {
//         userId:"23523523",
//         password:"w3353"
//     }
// ))

// CREATOR FUNCTION => Action
export const signUpUser = createAsyncThunk('signUpUser', async (payload, thunkAPI) => {
	const response = true
	const { ok, problem, data } = response;
	if (ok) {
		return data;
	} else {
		return thunkAPI.rejectWithValue(problem);
	}
});

const initialState = {
	allOrders: [],
};

// slice => reducer advanced implmentation
// reducer unique

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		resetLoginStatus: (state) => {},
	},
	extraReducers: {
		// [signUpUser.pending]: (state) => {
		// 	state.signUpStatus = STATUS.FETCHING;
		// },
		// [signUpUser.rejected]: (state) => {
		// 	state.signUpStatus = STATUS.FAILED;
		// },
		// [signUpUser.fulfilled]: (state, action) => {
		// 	state.signUpStatus = STATUS.SUCCESS;
		// 	state.authToken = action.payload.token;
		// 	state.userData = action.payload.user;
		// 	saveUserDetails(action);
		// },
	},
});

const orderReducer = orderSlice.reducer;
export default orderReducer;
