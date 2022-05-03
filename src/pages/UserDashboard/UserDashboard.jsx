import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import { useDispatch } from 'react-redux';
import { userStoriesAction } from '../../Redux/actions/userStoriesAction';
import LeftNavigationSection from '../../components/DashboardComponents/LeftNavigationSection/LeftNavigationSection';
import FeedSection from '../../components/DashboardComponents/FeedSection/FeedSection';
import MessagingSection from '../../components/DashboardComponents/MessagingSection/MessagingSection';
import { CreatePostModal } from '../../components/Modal/CreateAccountModal';
import { Dialog } from '@headlessui/react';

export default function UserDashboard() {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userStoriesAction());
	}, []);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='userDashboard-wrapper body-container max-h-screen'>
			<DashboardHeader />
			<div className='pt-4'>
				<div className='dashboard-container-wrapper px-3'>
					<div className='left-navigation-section-wrapper'>
						<LeftNavigationSection />
					</div>
					<div className='feed-container-wrapper'>
						<FeedSection />
					</div>
					<div className='messaging-section-wrapper'>
						<MessagingSection />
					</div>
				</div>
			</div>
			{open ? (
				<div>
					<Dialog
						className='fixed inset-0 overflow-y-auto'
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
	);
}
