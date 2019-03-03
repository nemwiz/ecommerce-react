import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
const Header = lazy(() => import('./header/Header'));
const Orders = lazy(() => import('./orders/Orders'));
const AddOrder = lazy(() => import('./add-order/AddOrder'));

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Suspense fallback={<div className={'loader'} />}>
						<Header />
						<Switch>
							<Route exact path="/" component={Orders} />
							<Route exact path="/orders" component={Orders} />
							<Route exact path="/order-new" component={AddOrder} />
						</Switch>
					</Suspense>
				</div>
			</Router>
		);
	}
}

export default App;
