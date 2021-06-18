import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";

import Toggle from "../toggleSwitch/toggle";
import {
	setThemeLight,
	setThemeDark,
	setToggle,
} from "../../store/utils/utility";
import { setThemeToLight } from "../../store/actions/actions";

function Header(props) {
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(props.toggled);

	useEffect(() => {
		localStorage.setItem("toggle", JSON.stringify(props.toggled));
	}, [props.toggled]);

	return (
		<header className="header">
			<div className="header-title">
				<Link className="header-title__heading" to="/">
					devjobs
				</Link>
			</div>

			<Toggle
				onChange={(event) => setToggle(event.target.checked)}
				onClick={() =>
					props.toggled ? dispatch(setThemeLight()) : dispatch(setThemeDark())
				}
			/>
		</header>
	);
}

const mapStateToProps = (state) => {
	return {
		toggled: state.setToggle,
	};
};

export default connect(mapStateToProps, null)(Header);
