import faker from 'faker';
import { USER_STORIES } from '../types/types';

const userStories = [];

export const userStoriesAction = () => {
	for (let i = 1; i <= 15; i++) {
		userStories.push({
			firstname: faker.name.firstName(),
			lastname: faker.name.lastName(),
			userDisplayPicture: faker.image.avatar(),
			storyPost: faker.random.image(),
		});
	}

	if (userStories.length > 15) {
		userStories.length = 15;
	}

	return {
		type: USER_STORIES,
		payload: {
			userStories: userStories,
		},
	};
};
