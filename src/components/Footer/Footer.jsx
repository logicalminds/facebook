import React from 'react';
import './Footer.css';

const languages = [
	'English(UK)',
	'தமிழ்',
	'తెలుగు',
	'ಕನ್ನಡ',
	'ಕನ್ನಡ',
	'اردو',
	'हिन्दी',
	'മലയാളം',
	'සිංහල',
	'ਪੰਜਾਬੀ',
	'বাংলা',
	'ગુજરાતી',
];

const footerLinks = [
	'Sign Up',
	'Log In',
	'Messenger',
	'Facebook Lite',
	'Watch',
	'Places',
	'Games',
	'Marketplace',
	'Facebook Pay',
	'Jobs',
	'Oculus',
	'Portal',
	'Instagram',
	'Bulletin',
	'Local',
	'Fundraisers',
	'Services',
	'Voting Information Centre',
	'Groups',
	'About',
	'Create ad',
	'Create Page',
	'Developers',
	'Careers',
	'Developers',
	'Privacy',
	'Cookies',
	'AdChoices',
	'Terms',
	'Help',
];

export default function Footer() {
	return (
		<div className='footer'>
			<div className='flex items-center'>
				<ul className='footer-links flex items-center'>
					{languages.map((e, index) => (
						<li key={index} className='mx-1.5 footer-links-lists'>
							{e}
						</li>
					))}
					<button className='border border-gray-300 text-gray-900 px-3 rounded text-xl hover:bg-gray-200'>
						+
					</button>
				</ul>
			</div>
			<hr className='my-2' />
			<div>
				<ul className='footer-links items-center'>
					{footerLinks.map((e, index) => (
						<li key={index} className='ml-1.5 mr-2.5 footer-links-lists'>
							{e}
						</li>
					))}
				</ul>
			</div>
			<p className='footer-links mt-10 mx-1.5'>Meta © 2021</p>
		</div>
	);
}
