import React, { useState } from 'react';
import {
	Button,
	InputForm,
} from '../../components/SingleComponents/SingleComponents';
import { Helmet } from 'react-helmet';
import { SignupModal } from '../../components/Modal/CreateAccountModal';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserCredentials, UserLogout } from '../../Redux/actions/signinAction';
import { useHistory } from 'react-router';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import '../../styles/output.css';
import { Dialog } from '@headlessui/react';
import UserDashboard from '../UserDashboard/UserDashboard';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

export default function Login() {
	const [open, setOpen] = useState(false);
	const [userCredential, setUserCredential] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [viewPassword, setViewPassword] = useState(false);
	const [viewPasswordIcon, setViewPasswordIcon] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const isUserLoggedIn = localStorage.getItem('isLoggedIn');

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleCredentials = () => {
		if (userCredential === '') {
			history.push('/login');
		} else {
			dispatch(UserCredentials({ userCredential, userPassword }));
		}
	};

	if (viewPasswordIcon === true) {
		if (userPassword === '') {
			setViewPasswordIcon(false);
		}
	}

	if (isUserLoggedIn === 'true') {
		return (
			<div>
				<UserDashboard />
				<button onClick={() => dispatch(UserLogout())}>Logout</button>
			</div>
		);
	} else {
		return (
			<div>
				<div className='body-container'>
					<Helmet>
						<title>Facebook - log in or sign up</title>
					</Helmet>
					<div className='h-screen mx-36 flex items-center'>
						<div className='flex w-full app-wrapper'>
							<div className='w-7/12 leading-10 mt-20'>
								<input
									type='image'
									src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
									alt='facebook logo'
									className='app-facebook-logo'
								/>
								<p className='text-3xl'>
									Facebook helps you connect and share with the people in your
									life.
								</p>
							</div>

							<div className='w-5/12 app-form-wrapper'>
								<div className='flex flex-col bg-white app-input-section rounded-lg p-4'>
									<InputForm
										type='text'
										placeholder='Email address or Phone number'
										isbordered={true}
										className='px-3 py-3.5 mb-3'
										value={userCredential}
										onChange={(e) => setUserCredential(e.target.value)}
										autoFocus
										autoComplete='on'
									/>
									<InputForm
										type='password'
										placeholder='Password'
										isbordered={true}
										value={userPassword}
										viewPasswordIcon={viewPasswordIcon}
										viewPassword={viewPassword}
										onViewPasswordIconClick={() =>
											setViewPassword(!viewPassword)
										}
										onChange={(e) => setUserPassword(e.target.value)}
										className='px-3 py-3.5 mb-3'
										viewPasswordClass='home-password-view-icon'
										onChange={(e) => {
											setViewPasswordIcon(true);
											setUserPassword(e.target.value);
										}}
									/>
									<Button
										className='login-btn text-xl my-1 py-2'
										buttonName='Log In'
										onClick={() => handleCredentials()}
									/>
									<Link
										to='/forgotpassword'
										className='forgot-password my-5 text-sm text-center'>
										Forgotten password?
									</Link>
									<hr />
									<Button
										className='create-acc-btn mt-6 mb-3 py-2.5 text-lg inline px-3 self-center'
										buttonName='Create New Account'
										onClick={() => {
											handleOpen();
										}}
									/>
								</div>
								<div>
									<p className='text-sm text-center my-7'>
										<Link to='/'>
											<strong>Create a Page</strong>
										</Link>{' '}
										for a celebrity, brand or business.
									</p>
								</div>
							</div>
						</div>

						{open ? (
							<div>
								<Dialog
									className='fixed inset-0 z-10 overflow-y-auto'
									open={open}
									onClose={handleOpen}>
									<Dialog.Overlay className='fixed inset-0 bg-white opacity-80' />
									<div className='min-h-screen px-4 text-center'>
										<span
											className='inline-block h-screen align-middle'
											aria-hidden='true'>
											&#8203;
										</span>
										<SignupModal
											heading='Sign Up'
											closeIcon={true}
											alreadyHaveAccount={false}
											isDialog={true}
											onClick={handleClose}
										/>
									</div>
								</Dialog>
							</div>
						) : null}
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}
