import React, { useState } from 'react';
import {
	Button,
	InputForm,
} from '../../components/SingleComponents/SingleComponents';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserCredentials } from '../../Redux/actions/signinAction';
import { useHistory } from 'react-router';

export default function Login(props) {
	const [viewPassword, setViewPassword] = useState(false);
	const [viewPasswordIcon, setViewPasswordIcon] = useState(false);
	const [userCredential, setUserCredential] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const isLoggedIn = useSelector((state) => state.userSigninReducer.isLoggedIn);

	const handleLogin = () => {
		dispatch(UserCredentials({ userCredential, userPassword }));
		if (isLoggedIn) {
			history.push('/');
		}
	};

	if (viewPasswordIcon === true) {
		if (userPassword === '') {
			setViewPasswordIcon(false);
		}
	}

	return (
		<div>
			<div className='body-container flex justify-center'>
				<Helmet>
					<title>Login to Facebook</title>
				</Helmet>
				<div className='flex flex-col py-20'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
						alt='Facebook logo'
						className='login-facebook-logo mb-6'
					/>
					<div className='login-wrapper p-4 bg-white rounded-lg'>
						<p className='text-center text-lg my-2'>Log in to Facebook</p>
						<div className='flex flex-col'>
							<InputForm
								type='text'
								className='p-3.5 mt-3 mb-2'
								placeholder='Email address or phone number'
								userInputError={!props.isLoggedIn}
								value={userCredential}
								onChange={(e) => setUserCredential(e.target.value)}
								autoComplete='on'
							/>
							{props.isLoggedIn ? null : (
								<p className='text-red-600 login-error-text'>
									The email address or mobile number you entered isn't connected
									to an account.{' '}
									<strong className='find-account'>
										Find your account and log in.
									</strong>
								</p>
							)}
							<InputForm
								type={'password'}
								className='p-3.5 my-3'
								placeholder='Password'
								value={userPassword}
								viewPasswordIcon={viewPasswordIcon}
								viewPassword={viewPassword}
								viewPasswordClass='login-password-view-icon'
								onViewPasswordIconClick={() => setViewPassword(!viewPassword)}
								onChange={(e) => {
									setViewPasswordIcon(true);
									setUserPassword(e.target.value);
								}}
							/>
							<Button
								buttonName='Log In'
								className='login-btn text-xl my-1 py-2'
								onClick={() => handleLogin()}
							/>
							<div className='flex justify-center gap-2'>
								<Link
									to='/forgotpassword'
									className='forgot-password my-5 text-sm text-center'>
									Forgotten account?
								</Link>
								<Link
									to='/signup'
									className='forgot-password my-5 text-sm text-center'>
									Sign up for Facebook
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
