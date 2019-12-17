import React from 'react';
import { Switch, Route /*,Redirect*/ } from 'react-router-dom';
import Example from '../src/example'

export default class Main extends React.Component {
	render() {
		return (
			<main>
				<Switch>
				<Route  path="/example" component={Example} />
				</Switch>
			</main>
		);
	}
}
