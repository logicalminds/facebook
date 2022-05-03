import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
	Button,
	InputForm,
} from '../../components/SingleComponents/SingleComponents';
import './ForgotPassword.css';

export default function ForgotPassword() {
	const [searchError, setSearchError] = useState(false);

	const handleSearch = () => {
		setSearchError(true);
	};

	return (
		<div>
			<Helmet>
				<title>Forgotten Password | Can't Log In | Facebook </title>
			</Helmet>
			<div className='forgot-password-body-container'>
				<Header />
				<div className='flex justify-center h-full py-20'>
					<div className='forgot-password-wrapper bg-white rounded-md shadow-lg'>
						<div className='p-4'>
							<p className='font-medium text-xl'>Find Your Account</p>
						</div>
						<hr className='mb-4' />
						{searchError && (
							<div className='p-4 pt-0'>
								<div className='search-error p-3 border border-red-500'>
									<p className='text-md mb-1 text-gray-700 font-medium'>
										Please fill in at least one field
									</p>
									<p className='text-xs text-gray-700'>
										Fill in at least one field to search for your account
									</p>
								</div>
							</div>
						)}
						<div className='p-4 pt-0'>
							<p>
								Please enter your email address or mobile number to search for
								your account.
							</p>
							<InputForm
								type='text'
								placeholder='Mobile number'
								isbordered={false}
								className='p-3 w-full mt-3'
							/>
						</div>
						<hr />
						<div className='p-4 float-right'>
							<Button
								buttonName='Cancel'
								className='cancel-btn mx-1 px-5 py-1.5'
							/>
							<Button
								buttonName='Search'
								className='search-btn mx-1 px-5 py-1.5'
								onClick={() => handleSearch()}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
