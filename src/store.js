import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice.js';
import themeReducer from './features/themeSlice.js';
import postsReducer from './features/postsSlice.js';

export default configureStore({
	reducer: {
		user: userReducer,
		theme: themeReducer,
		posts: postsReducer,
	},
});
