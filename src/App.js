import Profile from './components/Profile.js';
import Login from './components/Login.js';
import AlterColor from './components/AlterColor.js';
import Posts from './components/Posts.js';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Profile />
			<Login />
			<AlterColor />
			<Posts />
		</div>
	);
}

export default App;
