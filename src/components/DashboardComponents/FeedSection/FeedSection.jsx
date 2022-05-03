import React from 'react';
import Stories from './Stories/Stories';
import Post from './Post/Post';
import './FeedSection.css';

export default function FeedSection() {
	return (
		<div className='flex flex-col items-center h-full'>
			<Stories />
			<Post />
		</div>
	);
}
