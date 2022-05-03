import { USER_CREDENTIALS, USER_LOGOUT } from '../types/types';

const initialState = {
	isLoggedIn: false,
	credential: '',
	name: '',
	password: '',
};

export default function userSigninReducer(state = initialState, action) {
	switch (action.type) {
		case USER_CREDENTIALS: {
			console.log('Inside success signinreducer');
			console.log(action.payload.isLoggedIn);
			action.payload
				? console.log('userdata', action.payload)
				: console.log('userdata', initialState);
			localStorage.setItem('isLoggedIn', action.payload.isLoggedIn);
			return {
				isLoggedIn: action.payload.isLoggedIn,
				credential: action.payload.credential,
				name: action.payload.user[0].name,
				password: action.payload.user[0].username,
			};
		}
		case USER_LOGOUT: {
			localStorage.setItem('isLoggedIn', initialState.isLoggedIn);
			return initialState;
		}
		default:
			return state;
	}
}
