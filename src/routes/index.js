import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "constants/routes";
import Home from "pages";
import MapPage from "pages/map";
import TeamPage from "pages/team";
const Routes = () => {
	const { HOME, MAP, TEAM } = ROUTES;
	return (
		<Router>
			<Switch>
				<Route exact path={HOME} component={Home} />
				<Route exact path={MAP} component={MapPage} />
				<Route exact path={TEAM} component={TeamPage} />
			</Switch>
		</Router>
	);
};

export default Routes;
