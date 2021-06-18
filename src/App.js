import React, { useState, useEffect } from "react";
import { Routes } from "./components/routes/routes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import axios from "axios";

import { GlobalStyle } from "./components/theme/global";
import { ThemeProvider } from "styled-components";

import "./assets/scss/main.css";
import { loadData } from "./store/actions/actions";
import { getData } from "./store/utils/utility";

function getInitialTheme(themeMode) {
	try {
		const savedTheme = localStorage.getItem("theme");

		return savedTheme ? JSON.parse(savedTheme) : { mode: themeMode };
	} catch (err) {
		return err;
	}
}

function App(props) {
	let mainTheme = props.setTheme.mode;
	const dispatch = useDispatch();
	// const [theme, setTheme] = useState(getInitialTheme());
	// const [theme, setTheme] = useState(getInitialTheme(mainTheme));

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(mainTheme));
	}, [mainTheme]);

	getInitialTheme(mainTheme);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<ThemeProvider theme={props.setTheme}>
			<>
				<GlobalStyle />
				<div className="body">
					<Routes />
				</div>
			</>
		</ThemeProvider>
	);
}

const mapStateToProps = (state) => {
	return {
		setTheme: state.setTheme,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => dispatch(getData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
