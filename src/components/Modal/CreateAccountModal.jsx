import React, { useState } from 'react';
import { Button, InputForm } from '../SingleComponents/SingleComponents';
import { Link } from 'react-router-dom';
import Picker from 'emoji-picker-react';
import './CreateAccountModal.css';

export function SignupModal(props) {
	const dates = [];

	for (let i = 1; i <= 31; i++) {
		dates.push(i);
	}

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const d = new Date();
	const todayDate = d.getDate();
	const thisMonth = months[d.getMonth()];
	const thisYear = d.getFullYear();

	const years = [];

	for (let i = thisYear; i >= 1905; i--) {
		years.push(i);
	}
	const [calendarDropDown, setcalendarDropDown] = useState({
		currentDate: todayDate,
		currentMonth: thisMonth,
		currentYear: thisYear,
	});
	const [customGender, setCustomGender] = useState(false);
	const [genderModal, setGenderModal] = useState(false);
	const [dobModal, setDobModal] = useState(false);

	return (
		<div className={props.isDialog ? 'app-create-acc-modal' : null}>
			<div className='min-h-screen px-4 text-center'>
				<div className='inline-block w-full max-w-md my-8 text-left align-middle bg-white shadow-xl rounded-lg'>
					<div className='p-4'>
						<div
							className={
								props.isDialog
									? 'flex items-center justify-between'
									: props.headClassName
							}>
							<p
								className={`font-medium leading-6 
								${props.isDialog ? `text-4xl` : `text-2xl`}`}>
								{props.heading}
							</p>
							{props.closeIcon && (
								<i
									className='fas fa-times text-2xl font-light text-gray-500 cursor-pointer'
									onClick={props.onClick}></i>
							)}
						</div>
						<div
							className={
								props.isDialog ? 'mt-2' : `mt-2 ${props.headClassName}`
							}>
							<p className='text-sm text-gray-500'>It's quick and easy.</p>
						</div>
					</div>
					<hr />
					<div className='p-4'>
						<div className='flex gap-2 mb-3'>
							<InputForm
								type='text'
								placeholder='Firstname'
								className='w-6/12 p-2'
								autoFocus
							/>
							<InputForm
								type='text'
								placeholder='Lastname'
								className='w-6/12 p-2'
							/>
						</div>
						<InputForm
							type='text'
							placeholder='Mobile number or email address'
							className='w-full p-2 mb-3'
						/>
						<InputForm
							type='password'
							placeholder='New password'
							className='w-full p-2 mb-3'
						/>
						<div>
							<div className='flex items-center gap-1'>
								<p className='text-sm text-gray-600'>Date of Birth</p>
								<i
									className='fas fa-question-circle cursor-pointer text-sm text-gray-500'
									onClick={() => setDobModal(true)}></i>
							</div>

							<div className='flex gap-3 mb-3'>
								<select
									className='w-4/12 flex-1 p-2 rounded-md border border-gray-300 bg-white outline-none'
									value={calendarDropDown.currentDate}
									onChange={(e) => setcalendarDropDown(e.target.value)}>
									{dates.map((e) => (
										<option>{e}</option>
									))}
								</select>
								<select
									className='w-4/12 p-2 flex-1 rounded-md border border-gray-300 bg-white outline-none'
									value={calendarDropDown.currentMonth}
									onChange={(e) => setcalendarDropDown(e.target.value)}>
									{months.map((e) => (
										<option>{e}</option>
									))}
								</select>
								<select
									className='w-4/12 p-2 flex-1 rounded-md border border-gray-300 bg-white outline-none'
									value={calendarDropDown.currentYear}
									onChange={(e) => setcalendarDropDown(e.target.value)}>
									{years.map((e) => (
										<option>{e}</option>
									))}
								</select>
							</div>
							<div>
								<div className='flex items-center gap-1'>
									<p className='text-sm text-gray-600'>Gender</p>
									<i
										className='fas fa-question-circle cursor-pointer text-sm text-gray-500'
										onClick={() => setGenderModal(true)}></i>
								</div>
								<div className='flex gap-3 mb-3'>
									<span className='border border-gray-300 w-4/12 flex flex-1 items-center justify-between rounded-md p-2'>
										<label htmlFor='genFemale'>Female</label>
										<input
											type='radio'
											name='gender'
											id='genFemale'
											onClick={() => setCustomGender(false)}
										/>
									</span>
									<span className='border border-gray-300 w-4/12 flex flex-1 items-center justify-between rounded-md p-2'>
										<label htmlFor='genMale'>Male</label>
										<input
											type='radio'
											name='gender'
											id='genMale'
											onClick={() => setCustomGender(false)}
										/>
									</span>
									<span className='border border-gray-300 w-4/12 flex flex-1 items-center justify-between rounded-md p-2'>
										<label htmlFor='genCustom'>Custom</label>
										<input
											type='radio'
											name='gender'
											id='genCustom'
											onClick={() => setCustomGender(true)}
										/>
									</span>
								</div>

								{/* CustomGender options */}

								{customGender ? (
									<div>
										<select className='w-full p-2 flex-1 rounded-md border border-gray-300 bg-white outline-none custom-gender-options'>
											<option value='Select your pronoun' disabled selected>
												Select your pronoun
											</option>
											<option>She: "Wish her a happy birthday!"</option>
											<option>He: "Wish him a happy birthday!"</option>
											<option>They: "Wish them a happy birthday!"</option>
										</select>
										<p className='text-gray-600 mt-1 mb-2 pronoun-visibility-alert'>
											Your pronoun is visible to everyone.
										</p>
										<div>
											<InputForm
												type='text'
												placeholder='Gender (optional)'
												className='w-full p-2'
											/>
										</div>
									</div>
								) : null}
							</div>

							{/* Conditions */}

							<div>
								<p className='conditions mt-2 text-gray-600'>
									By clicking Sign Up, you agree to our{' '}
									<Link to='/' className='text-blue-700'>
										Terms,
									</Link>{' '}
									<Link to='/' className='text-blue-700'>
										Data Policy
									</Link>{' '}
									and{' '}
									<Link to='/' className='text-blue-700'>
										Cookie Policy.
									</Link>{' '}
									You may receive SMS notifications from us and can opt out at
									any time.
								</p>
							</div>

							{/* Signup and already have account button */}

							<div className='flex flex-col justify-center items-center py-4'>
								<Button
									className='create-acc-btn px-16 py-1 text-lg inline'
									buttonName='Sign Up'
								/>
								{props.alreadyHaveAccount && (
									<Link
										to='/login'
										className='forgot-password mt-6 text-md text-center'>
										Already have an account?
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Gender & Dob Modal */}

				{dobModal ? (
					<div
						className='modal-genderModal absolute left-8 top-72 bg-white'
						onClick={() => setDobModal(false)}>
						<p className='p-3 z-20 border border-gray-300 text-sm text-gray-500 text-left max-w-sm modal-genderModal-text'>
							<strong>Providing your date of birth</strong> helps make sure that
							you get the right Facebook experience for your age. If you want to
							change who sees this, go to the About section of your Profile. For
							more details, please visit our{' '}
							<Link to='/' className='text-blue-700'>
								{' '}
								Data Policy.
							</Link>
						</p>
					</div>
				) : null}

				{genderModal ? (
					<div
						className='modal-genderModal absolute left-8 top-96 bg-white'
						onClick={() => setGenderModal(false)}>
						<p className='p-3 z-20 border border-gray-300 text-sm text-gray-500 text-left max-w-sm modal-genderModal-text'>
							You can change who sees your gender on your profile later. Select
							Custom to choose another gender, or if you'd rather not say.
						</p>
					</div>
				) : null}
			</div>
		</div>
	);
}

export function CreatePostModal(props) {
	const [textareaBgColor, setTextareaBgColor] = useState('#ffffff');
	const [viewEmojis, setViewEmojis] = useState(false);
	const [inputText, setInputText] = useState('');
	const [changePlaceholderColor, setChangePlaceholderColor] = useState('');
	const [buttonActive, setButtonActive] = useState(true);

	const onEmojiClick = (event, emojiObject) => {
		setInputText((e) => e + emojiObject.emoji);
	};

	if (inputText === '' && buttonActive === false) {
		setButtonActive(true);
	}

	return (
		<div
			className={`create-post-modal rounded-lg shadow-2xl ${
				props.isDialog ? 'app-create-acc-modal' : null
			}`}>
			<div className='text-center w-full'>
				<div className='inline-block w-full text-left align-middle bg-white shadow-xl rounded-lg'>
					<div className='flex items-center relative justify-center'>
						<p className='font-medium py-4 leading-6 text-xl'>
							{props.heading}
						</p>
						<i
							className='modal-close-btn fas fa-times text-2xl font-light text-gray-500 cursor-pointer absolute right-0 mr-4'
							onClick={props.onClick}></i>
					</div>

					<hr className='bg-gray-200 mb-4' />
					<div className='px-4'>
						<div className='flex items-center gap-2'>
							<input
								type='image'
								src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
								alt='User profile picture'
								className='post-section-user-picture'
							/>
							<div>
								<p className='font-bold'>Sathyanarayanan</p>
								<p className='text-sm font-medium'>Public</p>
							</div>
						</div>

						<div>
							<textarea
								rows={4}
								className={`textarea my-4 text-2xl w-full ${changePlaceholderColor}`}
								style={{ backgroundColor: `${textareaBgColor}` }}
								placeholder="What's on your mind, Sathyanarayanan?"
								value={inputText}
								onChange={(e) => {
									setInputText(e.target.value);
									setButtonActive(false);
								}}
								onClick={() => setViewEmojis(false)}></textarea>
							<div className='flex justify-between items-center mb-4'>
								<input
									type='color'
									className='w-8 h-8'
									value={textareaBgColor}
									onChange={(e) => {
										setTextareaBgColor(e.target.value);
										setChangePlaceholderColor('changePlaceholderColor');
									}}
								/>
								<i
									className='emoji-icon far fa-smile text-2xl font-thin text-gray-400 cursor-pointer'
									title='Emoji'
									onClick={() => setViewEmojis(!viewEmojis)}></i>
							</div>
						</div>
						<div className='flex justify-between items-center border border-gray-400 p-3 rounded-lg'>
							<p className='font-bold text-sm'>Add to your post</p>
							<div className='flex gap-5'>
								<i className='post-photo fas fa-photo-video text-2xl font-normal'></i>
								<i className='post-user fas fa-user-tag text-2xl font-normal'></i>
								<i className='post-smile fas fa-laugh text-2xl font-normal'></i>
								<i className='post-map fas fa-map-marker-alt text-2xl font-normal'></i>
								<i className='post-microphone fas fa-microphone text-2xl font-normal'></i>
								<i className='post-ellipsis fas fa-ellipsis-h text-2xl font-normal'></i>
							</div>
						</div>
						<Button
							buttonName='Post'
							className='post-btn w-full my-4 py-1.5'
							disabled={buttonActive}
						/>
					</div>
				</div>
			</div>
			<div className='emoji-palette'>
				{viewEmojis ? (
					<Picker
						className='emoji-picker'
						disableSearchBar
						onEmojiClick={onEmojiClick}
					/>
				) : null}
			</div>
		</div>
	);
}
