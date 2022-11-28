import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apis from '../../api/ApiIndex';
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
export const signUpUserFunc = createAsyncThunk('signUpUser', async (payload, thunkAPI) => {
	// const response = await {}.signUpUser(payload);


	// call get all posts
	const response = await apis.getAllPosts(payload)



	const { ok, problem, data } = response;
	if (ok) {
		return data; //action.payload
	} else {
		return thunkAPI.rejectWithValue(problem);
	}
});

// ui ==> loader => signUpStatus === STATUS.FETCHING

const STATUS = {
	NOT_STARTED: 0,
	SUCCESS: 1,
	FETCHING: 2,
	FAILED: 3,
};

const initialState = {
	signUpStatus: STATUS.NOT_STARTED,
};

// NON API CALL SCENARIO => REDUX CLEANUP => login => dashboard

// slice => reducer advanced implmentation
// reducer unique

// reducers => NON Api calls actions
// extraReducers => api calls

// dispatch(signUpUser(
//     {
//         userId:"23523523",
//         password:"w3353"
//     }
// ))

// useEffect(()=>{
//     return ()=> dispatch(resetLoginStatus({message:it is done}))
// })

const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		resetLoginStatus: (state, action) => {
			// let message = action.payload.message

			state.signUpStatus = STATUS.NOT_STARTED;
		},
	},

	extraReducers: {
		[signUpUserFunc.pending]: (state) => {
			state.signUpStatus = STATUS.FETCHING;
		},
		[signUpUserFunc.rejected]: (state) => {
			state.signUpStatus = STATUS.FAILED;
		},

		// payload => term => data => function is taking with him/
		[signUpUserFunc.fulfilled]: (state, action) => {
			state.signUpStatus = STATUS.SUCCESS;
			// action.payload => response
			// state.authToken = action.payload.token;
			// state.userData = action.payload.user;
			// saveUserDetails(action);
		},
	},
});

export const { resetLoginStatus } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
