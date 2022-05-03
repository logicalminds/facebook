import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { users_api } from '../api';
import { UserCredentials } from '../Redux/actions/signinAction';

export const LoginAccess = ({ userCredential, userPassword }) => {
	const [allUsers, setAllUsers] = useState();
	const history = useHistory();
	const dispatch = useDispatch();

	console.log(allUsers);
	console.log(userCredential);
	console.log(userPassword);

	useEffect(() => {
		axios
			.get(users_api)
			.then((res) => {
				setAllUsers(res.data);
			})
			.catch(() => console.log('Error while fetching data'));
	}, []);

	if (userCredential === '') {
		history.push('/login');
	} else {
		if (
			allUsers.some(
				(e) => e.email === userCredential || e.phone === userCredential
			)
		) {
			dispatch(UserCredentials({ userCredential, userPassword }));
			console.log('success logging in');
		} else {
			console.log('error logging in');
		}
	}
};
