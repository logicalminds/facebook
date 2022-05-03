import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../pages/UserDashboard/UserDashboard.css';

const navIconsData = [
	{
		id: 1,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png',
		name: 'Friends',
	},
	{
		id: 2,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png',
		name: 'Groups',
	},
	{
		id: 3,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png',
		name: 'Marketplace',
	},
	{
		id: 4,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png',
		name: 'Watch',
	},
	{
		id: 5,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png',
		name: 'Memories',
	},
	{
		id: 6,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png',
		name: 'Saved',
	},
	{
		id: 7,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png',
		name: 'Pages',
	},
	{
		id: 8,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png',
		name: 'Events',
	},
	{
		id: 9,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/XxEsb0x8INQ.png',
		name: 'Jobs',
	},
	{
		id: 10,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png',
		name: 'Ad center',
	},
	{
		id: 11,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png',
		name: 'Ads Manager',
	},
	{
		id: 12,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/bRC_jZ58syg.png',
		name: 'Blood Donations',
	},
	{
		id: 13,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png',
		name: 'Climate Science Center',
	},
	{
		id: 14,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png',
		name: 'Community Help',
	},
	{
		id: 15,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png',
		name: 'COVID-19 Information Center',
	},
	{
		id: 16,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png',
		name: 'Emotional Health',
	},
	{
		id: 17,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png',
		name: 'Favourites',
	},
	{
		id: 18,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png',
		name: 'Fundraisers',
	},
	{
		id: 19,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/9bekmF_PzNp.png',
		name: 'Gaming Video',
	},
	{
		id: 20,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/AisrwUSvQf8.png',
		name: 'Live videos',
	},
	{
		id: 21,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png',
		name: 'Messenger',
	},
	{
		id: 22,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png',
		name: 'Messenger Kids',
	},
	{
		id: 23,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png',
		name: 'Most Recent',
	},
	{
		id: 24,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png',
		name: 'Play Games',
	},
	{
		id: 25,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png',
		name: 'Recent ad activity',
	},
	{
		id: 24,
		iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png',
		name: 'Weather',
	},
];

export default function LeftNavigationSection() {
	const [leftTabHeight, setLeftTabHeight] = useState(9);
	const [seeMoreButtonText, setSeeMoreButtonText] = useState('See more');
	const [arrow, setArrow] = useState('down');
	const [editClass, setEditClass] = useState('edit-hidden');
	const { name } = useSelector((state) => state.userSigninReducer);

	return (
		<div className='nav-wrapper'>
			<ul className='left-nav-section'>
				<li className='nav-list flex items-center gap-1 p-2'>
					<i className='fas fa-user-circle user-icon'></i>
					<p className='list-text'>{name}</p>
				</li>
				{navIconsData.slice(0, leftTabHeight).map((e) => (
					<li className='nav-list flex items-center p-2 gap-2 cursor-pointer'>
						<input type='image' src={e.iconUrl} className='nav-icons' />
						<p className='list-text'>{e.name}</p>
					</li>
				))}
			</ul>
			<div
				className='flex items-center gap-3 p-2 see-more'
				onClick={() => {
					if (arrow === 'down') {
						setLeftTabHeight(navIconsData.length);
						setSeeMoreButtonText('See less');
						setArrow('up');
					} else {
						setLeftTabHeight(9);
						setSeeMoreButtonText('See more');
						setArrow('down');
					}
				}}>
				<i className={`fas fa-chevron-${arrow} p-2 see-more-arrow`}></i>
				<p className='list-text'>{seeMoreButtonText}</p>
			</div>
			<hr />
			<div>
				<div
					className='flex flex-row items-center justify-between'
					onMouseOver={() => setEditClass('edit-view')}
					onMouseOut={() => setEditClass('edit-hidden')}>
					<p className='px-3 text-lg m-2 font-black text-gray-600'>
						Your shortcuts
					</p>
					<p
						className={`${editClass} text-sm text-blue-900 cursor-pointer bg-gray-300 px-2.5 py-2 rounded`}>
						Edit
					</p>
				</div>
				<ul className='left-nav-section'>
					<li className='nav-list flex items-center p-2 gap-2 cursor-pointer'>
						<input
							type='image'
							src={navIconsData[2].iconUrl}
							className='nav-icons'
						/>
						<p className='list-text'>MS in US Fall 2021</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
