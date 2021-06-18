import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import Details from "../../pages/details";

export const Routes = () => {
	return (
		<Switch>
			<Route
				path="/"
				exact
				render={(props) => (
					// <Home {...props} theme={theme} setTheme={setTheme} />
					<Home {...props} />
				)}
			/>
			<Route
				path="/jobs/:id"
				exact
				render={(props) => <Details {...props} />}
			/>
		</Switch>
	);
};
