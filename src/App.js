import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Trident from './pages/Trident/Trident';

function App() {
	const isLoggedIn = useSelector((state) => state.userSigninReducer.isLoggedIn);

	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/forgotpassword'>
						<ForgotPassword />
					</Route>
					<Route path='/login'>
						<Login isLoggedIn={isLoggedIn} />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<Route path='/trident'>
						<Trident />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
