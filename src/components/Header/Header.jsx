import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserCredentials } from '../../Redux/actions/signinAction';
import { Button, InputForm } from '../SingleComponents/SingleComponents';
import './Header.css';

export default function Header() {
	const [userCredential, setUserCredential] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	const handleCredentials = () => {
		if (userCredential === '') {
			history.push('/login');
		} else {
			dispatch(UserCredentials({ userCredential, userPassword }));
		}
	};

	return (
		<div className='flex bg-white items-center justify-between px-4 py-2 header-wrapper'>
			<Link to='/'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
					alt='Facebook logo'
					className='header-facebook-logo'
				/>
			</Link>
			<div className='flex gap-2'>
				<InputForm
					type='text'
					className='header-input p-2'
					placeholder='Email or phone'
					isbordered={true}
					value={userCredential}
					onChange={(e) => setUserCredential(e.target.value)}
				/>
				<InputForm
					type='password'
					className='header-input p-2'
					placeholder='Password'
					isbordered={true}
					value={userPassword}
					onChange={(e) => setUserPassword(e.target.value)}
				/>
				<Button
					buttonName='Log In'
					className='login-btn header-login-btn px-4 py-2 text-md'
					onClick={() => handleCredentials()}
				/>
				<Link
					to='/forgotpassword'
					target='_blank'
					className='header-forgotten-acc text-sm self-center mr-4'>
					Forgotten account?
				</Link>
			</div>
		</div>
	);
}
