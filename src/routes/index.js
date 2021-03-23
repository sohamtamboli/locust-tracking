import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "constants/routes";
import Home from "pages";
import MapPage from "pages/map";
import TeamPage from "pages/team";
import AboutPage from "pages/about";
const Routes = () => {
	const { HOME, MAP, TEAM, ABOUT } = ROUTES;
	return (
		<Router>
			<Switch>
				<Route exact path={HOME} component={Home} />
				<Route exact path={MAP} component={MapPage} />
				<Route exact path={ABOUT} component={AboutPage} />
				<Route exact path={TEAM} component={TeamPage} />
			</Switch>
		</Router>
	);
};

export default Routes;
