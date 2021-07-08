import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../../pages/home";
import Details from "../../pages/details";
import NotFound from "../../pages/notFound";

const Routes = (props) => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			{props.setLink ? <Route path="/:id" exact component={Details} /> : ""}
			{/* <Route path="/:id" exact component={Details} /> */}
			<Route component={NotFound} />
			{/* <Redirect to="/not" /> */}
		</Switch>
	);
};

const mapStateToProps = (state) => {
	return {
		setLink: state.setLink,
	};
};

export default connect(mapStateToProps, null)(Routes);
