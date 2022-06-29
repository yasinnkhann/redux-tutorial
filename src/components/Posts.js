import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	postsSelector,
	fetchPosts,
	addPost,
	deletePost,
	updatePost,
} from '../features/postsSlice';
import randomWords from 'random-words';

const generateRandomWords = (minimum, maximum) => {
	const randomNum = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	return randomWords(randomNum(minimum, maximum)).join(' ');
};

export default function Posts() {
	const dispatch = useDispatch();
	const { posts, isLoading, error } = useSelector(postsSelector);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		console.error(error);
		return <div>Error: {error?.message}</div>;
	}

	return (
		<div>
			{posts.map(post => (
				<div key={post.id} style={{ border: '1px solid black' }}>
					<h3>{post.id}</h3>
					<h3>{post.title}</h3>
					<button
						onClick={() =>
							dispatch(
								updatePost({
									id: post.id,
									title: generateRandomWords(1, 10),
								})
							)
						}
					>
						Generate new Title
					</button>
					<p>{post.body}</p>
					<button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
				</div>
			))}
			<button
				onClick={() =>
					dispatch(
						addPost({
							id: posts.length + 1,
							userId: 1,
							title: generateRandomWords(1, 10),
							body: generateRandomWords(15, 20),
						})
					)
				}
			>
				Generate New Post
			</button>
		</div>
	);
}
