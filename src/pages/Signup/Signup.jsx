import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { SignupModal } from '../../components/Modal/CreateAccountModal';
import Footer from '../../components/Footer/Footer';

export default function Login() {
	return (
		<div>
			<div className='body-container'>
				<Helmet>
					<title>Sign up for Facebook | Facebook</title>
				</Helmet>
				<div className='flex justify-center py-10'>
					<div className='text-center'>
						<input
							type='image'
							src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
							alt='facebook logo'
							className='app-facebook-logo'
						/>
						{
							<SignupModal
								heading='Create a new account'
								headClassName='text-center'
								alreadyHaveAccount={true}
							/>
						}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
