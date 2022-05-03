import React, { useState } from 'react';
import './DashboardHeader.css';
import { InputForm } from '../SingleComponents/SingleComponents';
import { Link } from 'react-router-dom';

export default function DashboardHeader() {
	const [activeHeader, setActiveHeader] = useState('home');

	return (
		<div className='dashboard-container bg-white'>
			<div className='dashboard-header-wrapper flex items-center justify-between'>
				<div className='flex items-center gap-2 search-wrapper'>
					<input
						type='image'
						src='/facebook-icon.svg'
						alt='Facebook logo'
						className='facebook-logo'
					/>
					<InputForm
						type='search'
						placeholder='Search Facebook'
						className='facebook-search p-2 bg-gray-100 rounded-full flex-1'
						startIcon={'fas fa-search'}
					/>
				</div>
				<div className='header-icons-container'>
					<ul className='flex items-center gap-2'>
						<Link to='/'>
							<li
								className={`header-icons-list ${
									activeHeader === 'home' && activeHeader
								}`}>
								<i
									title='Home'
									className={`fas fa-home header-home-icon ${
										activeHeader === 'home' && 'active-tab'
									}`}
									onClick={() => setActiveHeader('home')}></i>
							</li>
						</Link>
						<Link to='/trident'>
							<li
								className={`header-icons-list ${
									activeHeader === 'watch' && activeHeader
								}`}>
								<input
									type='image'
									src='https://cdn0.iconfinder.com/data/icons/facebook-feature-outline/32/facebook-02-512.png'
									alt='Watch icon'
									title='Watch'
									className={`facebook-watch  header-icons ${
										activeHeader === 'watch' && 'active-tab'
									}`}
									onClick={() => setActiveHeader('watch')}
								/>
							</li>
						</Link>
						<li
							className={`header-icons-list ${
								activeHeader === 'group' && activeHeader
							}`}>
							<input
								type='image'
								src='https://img.icons8.com/ios-filled/50/000000/group-foreground-selected.png'
								alt='Group icon'
								title='Groups'
								className='header-icons'
								onClick={() => setActiveHeader('group')}
							/>
						</li>
						<li
							className={`header-icons-list ${
								activeHeader === 'gaming' && activeHeader
							}`}>
							<input
								type='image'
								src='https://img.icons8.com/ios/50/000000/facebook-gaming.png'
								alt='Gaming icon'
								title='Gaming'
								className='header-icons'
								onClick={() => setActiveHeader('gaming')}
							/>
						</li>
					</ul>
				</div>

				<div className='flex items-center gap-3 user-section-wrapper'>
					<i className='fas fa-user-circle dashboard-header-user-icon'></i>
					<p className='username truncate'>Sathyanarayanan</p>
					<input
						type='image'
						src='https://img.icons8.com/material-rounded/24/000000/circled-menu.png'
						className='header-user-icons'
						title='Menu'
					/>
					<input
						type='image'
						src='https://img.icons8.com/ios-glyphs/30/000000/facebook-messenger.png'
						className='header-user-icons'
						title='Messenger'
					/>
					<input
						type='image'
						src='https://img.icons8.com/material-rounded/24/000000/appointment-reminders.png'
						className='header-user-icons'
						title='Notifications'
					/>
					<input
						type='image'
						src='https://img.icons8.com/ios-glyphs/30/000000/sort-down.png'
						className='header-user-icons sort-down'
						title='Account'
					/>
				</div>
			</div>
		</div>
	);
}
