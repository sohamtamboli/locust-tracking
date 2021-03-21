import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "constants/routes";
import Home from "pages";
const Routes = () => {
	const { HOME } = ROUTES;
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path={HOME} component={Home} />
			</Switch>
		</Router>
	);
};

export default Routes;
