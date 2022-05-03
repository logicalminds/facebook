import { USER_STORIES } from '../types/types';

const initialState = {
	userStories: null,
};

export default function userStoriesReducer(state = initialState, action) {
	switch (action.type) {
		case USER_STORIES: {
			return {
				userStories: action.payload.userStories,
			};
		}
		default:
			return state;
	}
}
