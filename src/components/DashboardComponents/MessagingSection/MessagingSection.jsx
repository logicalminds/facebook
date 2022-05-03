import React from 'react';
import '../../../pages/UserDashboard/UserDashboard.css';

export default function MessagingSection() {
	return (
		<div className='messaging-section flex flex-col mr-2'>
			<div className='card'>
				<div className='card-image'>
					<input type='image' src='/user.jpg' alt='' className='user-image' />
				</div>
			</div>
		</div>
	);
}
