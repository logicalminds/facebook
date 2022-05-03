import axios from 'axios';
import { USER_CREDENTIALS, USER_LOGOUT } from '../types/types';
import { users_api } from '../../api/index';

export const UserCredentials =
	({ userCredential, userPassword }) =>
	async (dispatch) => {
		const currentUser = await axios
			.get(`${users_api}?q=${userCredential}`)
			.then((res) => res.data)
			.catch(() => console.log('Error while fetching single user data'));

		if (
			(currentUser[0].email === userCredential ||
				currentUser[0].phone === userCredential) &&
			currentUser[0].username === userPassword
		) {
			console.log('Inside success signinaction');
			dispatch({
				type: USER_CREDENTIALS,
				payload: {
					isLoggedIn: true,
					credential: userCredential,
					user: currentUser,
				},
			});
		} else {
			console.log('Username or password you entered is wrong');
		}
	};

export const UserLogout = () => {
	return {
		type: USER_LOGOUT,
	};
};
