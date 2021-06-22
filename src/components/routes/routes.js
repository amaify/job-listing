import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import Details from "../../pages/details";

export const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/:id" exact component={Details} />
		</Switch>
	);
};
