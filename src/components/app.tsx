/* eslint-disable-next-line */
import { FunctionalComponent, h } from 'preact';
/* eslint-disable-next-line */
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
/* eslint-disable-next-line */
import NotFoundPage from '../routes/notfound';
/* eslint-disable-next-line */
import Header from './header';

const App: FunctionalComponent = () => {
	return (
		<div id='preact_root'>
			<Header />
			<Router>
				<Route path='/' component={Home} />
				<NotFoundPage default />
			</Router>
		</div>
	);
};

export default App;
