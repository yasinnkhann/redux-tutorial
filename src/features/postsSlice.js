import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		isLoading: false,
		error: null,
		posts: [],
	},
	reducers: {
		fetchingPosts: state => {
			state.isLoading = true;
		},
		fetchPostsSuccess: (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
			state.error = null;
		},
		fetchPostsFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		addPost: (state, action) => {
			state.posts.push(action.payload);
			// state.posts = [...state.posts, action.payload];
		},
		deletePost: (state, action) => {
			state.posts = state.posts.filter(post => post.id !== action.payload);
		},
		updatePost: (state, action) => {
			state.posts = state.posts.map(post =>
				post.id === action.payload.id
					? { ...post, title: action.payload.title }
					: post
			);
		},
	},
});

export const {
	fetchingPosts,
	fetchPostsSuccess,
	fetchPostsFailure,
	addPost,
	deletePost,
	updatePost,
} = postsSlice.actions;

export const fetchPosts = () => async dispatch => {
	dispatch(fetchingPosts());
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		dispatch(fetchPostsSuccess(data.slice(0, 5)));
	} catch (err) {
		dispatch(fetchPostsFailure(err));
	}
};

export const postsSelector = state => state.posts;
export default postsSlice.reducer;
