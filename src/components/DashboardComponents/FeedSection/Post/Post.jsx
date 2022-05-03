import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InputForm } from '../../../SingleComponents/SingleComponents';
import { users_api, photos_api } from '../../../../api/index';
import faker from 'faker';
import './Post.css';
import { Dialog } from '@headlessui/react';
import { CreatePostModal } from '../../../../components/Modal/CreateAccountModal';

const userPosts = [];

for (let i = 0; i <= 20; i++) {
	userPosts.push({
		userProfilePicture: faker.image.avatar(),
		userName: faker.name.firstName() + ' ' + faker.name.lastName(),
		postedAt:
			Math.floor(Math.random() * (24 - 0 + 0)) +
			':' +
			Math.floor(Math.random() * (59 - 0 + 0)),
		postCaption: faker.lorem.paragraph(),
		image: faker.random.image(),
	});
}

export default function Post() {
	const { name } = useSelector((state) => state.userSigninReducer);
	const { userStories } = useSelector((state) => state.userStoriesReducer);
	const [feed, setFeed] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getFeedData();
	}, []);

	const getFeedData = async () => {
		const feeds = await axios
			.get(users_api)
			.then((res) => res.data)
			.catch(() => console.log('Error while fetching feed'));
		setFeed(feeds);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	console.log('feeds', feed);

	return (
		<div className='w-full'>
			<div className='flex justify-center mt-5'>
				<div className='user-post-section bg-white rounded-lg px-5 py-4 w-8/12'>
					<div className='flex items-center gap-2'>
						<input
							type='image'
							src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
							alt='User profile picture'
							className='post-section-user-picture'
						/>
						<div className='w-full'>
							<div
								className='bg-gray-200 text-gray-500 rounded-full p-2 cursor-pointer hover:bg-gray-300'
								onClick={() =>
									setOpen(true)
								}>{`What's on your mind, ${name}`}</div>
						</div>
					</div>
					<hr className='my-4' />
					<div className='flex justify-between px-5'>
						<div className='flex gap-2 items-center'>
							<i className='fas fa-video post-live-video'></i>
							<p className='post-section-text font-medium text-gray-500'>
								Live Video
							</p>
						</div>
						<div className='flex gap-2 items-center'>
							<i className='fas fa-photo-video post-photo-video'></i>
							<p className='post-section-text font-medium text-gray-500'>
								Photo/Video
							</p>
						</div>
						<div className='flex gap-2 items-center'>
							<i className='far fa-laugh post-feeling-activity'></i>
							<p className='post-section-text font-medium text-gray-500'>
								Feeling/Activity
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center mt-5'>
				<div className='user-post-section bg-white rounded-lg px-5 py-4 w-8/12'>
					<div className='create-room-section flex items-center gap-2'>
						<div className='flex gap-2 items-center border border-gray-300 px-4 py-2 rounded-full'>
							<i className='fas fa-video post-create-room'></i>
							<p className='post-create-room-text font-medium text-gray-500'>
								Create Room
							</p>
						</div>
						{userStories &&
							userStories.map((e, index) => (
								<input
									key={index}
									type='image'
									src={e.userDisplayPicture}
									alt={e.firstname}
									className='post-section-user-picture'
								/>
							))}
					</div>
				</div>
			</div>
			{userPosts &&
				userPosts.map((e, index) => (
					<div className='flex justify-center mt-5'>
						<div className='user-post-section bg-white rounded-lg w-8/12'>
							<div className='flex justify-between items-center px-5 py-2'>
								<div className='flex items-center gap-2'>
									<input
										key={index}
										type='image'
										src={e.userProfilePicture}
										alt={e.userName}
										className='post-section-user-picture'
									/>
									<div>
										<p className='text-md font-bold'>{e.userName}</p>
										<div className='flex items-center gap-2'>
											<p className='text-xs'>{`Yesterday at ${e.postedAt}`}</p>
											<i className='fas fa-globe-asia'></i>
										</div>
									</div>
								</div>
								<i className='fas fa-ellipsis-h text-gray-500'></i>
							</div>
							<div className='post-text text-sm px-5 mb-1'>
								<p>{e.postCaption}</p>
							</div>
							<div className='post-picture-section overflow-hidden'>
								<input
									type='image'
									src={e.image}
									alt={`${e.userName} post picture`}
									className='post-picture'
								/>
							</div>
							<div className='px-5 py-2'>
								<div className='post-picture-section flex items-center justify-between'>
									<div>
										<p className='like-comment-text'>Liked person name here</p>
									</div>
									<div className='flex gap-2 text-sm like-comment-text'>
										<p>4 comments</p>
										<p>1 share</p>
									</div>
								</div>
								<hr className='my-2' />
								<div className='flex justify-around text-gray-500 font-medium'>
									<div className='flex items-center gap-2'>
										<i className='far fa-thumbs-up like-icon'></i>
										<p>Like</p>
									</div>
									<div className='flex items-center gap-2'>
										<i class='far fa-comment-alt'></i>
										<p>Comment</p>
									</div>
									<div className='flex items-center gap-2'>
										<i class='far fa-share'></i>
										<p>Share</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			{open ? (
				<div className='create-post-modal'>
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
							<CreatePostModal
								heading='Create post'
								alreadyHaveAccount={false}
								isDialog={true}
								onClick={handleClose}
							/>
						</div>
					</Dialog>
				</div>
			) : null}
		</div>
	);
}
