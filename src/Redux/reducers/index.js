import { combineReducers } from 'redux';
import userSigninReducer from './signinReducer';
import userStoriesReducer from './userStoriesReducer';

export default combineReducers({
	userSigninReducer: userSigninReducer,
	userStoriesReducer: userStoriesReducer,
});
