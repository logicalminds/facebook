import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../../../pages/UserDashboard/UserDashboard.css';

export default function FeedSection() {
	const { userStories } = useSelector((state) => state.userStoriesReducer);
	const [activeStoryList, setActiveStoryList] = useState('scrollToStory0');
	const [storyIndex, setStoryIndex] = useState(1);

	useEffect(() => {
		setStoryIndex(1);
	}, [setStoryIndex]);

	const scrollNextStories = () => {
		console.log('setActiveStoryList(`scrollToStory${storyIndex}`)', storyIndex);
		/* if (storyIndex == 2) {
      console.log('inside story index', storyIndex);
      setStoryIndex(0);
    } */
		setActiveStoryList(`scrollToStory${storyIndex}`);
	};

	const scrollPrevStories = () => {
		console.log('scrollToStory(`scrollToStory${storyIndex}`)', storyIndex);
		if (storyIndex < 0) {
			console.log('inside story index', storyIndex);
			setStoryIndex(1);
		}
		setActiveStoryList(`scrollToStory${storyIndex}`);
	};

	/* 	storiesScroll === 'scrollToNextStory'
    ? setStoriesScroll('')
    : setStoriesScroll('scrollToNextStory'); */

	return (
		<>
			{userStories && (
				<div className='main-section relative flex flex-col w-full'>
					<div className='stories-section-wrapper flex relative items-center'>
						<button
							className='stories-scroll-btn stories-scroll-btn-left'
							onClick={() => {
								scrollPrevStories();
								setStoryIndex(storyIndex - 1);
							}}>
							<i className='far fa-chevron-left'></i>
						</button>
						<div className='stories-section flex flex-row relative'>
							<div
								className={`story-card-wrapper user-stories-wrapper rounded-lg flex flex-row relative ${activeStoryList}`}>
								<input
									type='image'
									src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
									alt='user-profile-picture'
									className='user-stories rounded-lg'
								/>

								<div className='user-add-story-card bg-white rounded-b-lg'>
									<div className='add-story-btn-wrapper rounded-full'>
										<button className='add-story-btn bg-blue-500 text-2xl text-white rounded-full'>
											+
										</button>
									</div>
									<div>
										<p className='flex justify-center text-sm font-medium pb-1'>
											Create story
										</p>
									</div>
								</div>
							</div>

							{userStories.map((e, index) => (
								<div
									className={`story-card-wrapper friends-stories-wrapper rounded-lg rounded-lg flex flex-row relative ${activeStoryList}`}>
									<div className='friends-stories-wrapper rounded-lg rounded-lg flex flex-row relative'>
										<input
											key={index}
											type='image'
											src={e.storyPost}
											className='friends-stories'
										/>
									</div>
									<div className='absolute z-10 top-0'>
										<input
											type='image'
											src={e.userDisplayPicture}
											alt={e.firstname}
											className='user-profile-picture'
										/>
									</div>
									<div className='absolute bottom-0 ml-2 mb-2'>
										<p className='text-sm text-white font-medium'>
											{e.firstname}
										</p>
										<p className='text-sm text-white font-medium'>
											{e.lastname}
										</p>
									</div>
								</div>
							))}
						</div>
						<button
							className='stories-scroll-btn stories-scroll-btn-right'
							onClick={() => {
								scrollNextStories();
								setStoryIndex(storyIndex + 1);
							}}>
							<i className='far fa-chevron-right'></i>
						</button>
					</div>
				</div>
			)}
		</>
	);
}
