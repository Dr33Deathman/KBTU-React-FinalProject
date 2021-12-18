import React from "react";
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";
import Background from "./food-bg.jpg";
import { Route, Redirect, Switch } from "react-router-dom";

const App = () => {
	return (
		<div
			style={{ background: `url(${Background}) center center/cover no-repeat`, minHeight: `1080px` }}
			className="app">
			<AppHeader total={50} />
			<Switch>
				<Route exact path="/menu" component={MainPage} />
				<Route exact path="/cart" component={CartPage} />
				<Redirect to="/menu" />
			</Switch>
		</div>
	);
};

export default App;
