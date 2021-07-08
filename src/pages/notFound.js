import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";

const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>Error | Page Not Found</title>
			</Helmet>
			<Header />
			<SearchBar />
			<div className="notFound">
				<h1 className="not Found">Page not Found!</h1>
				<Link to="/">Go Home</Link>
			</div>
		</>
	);
};

export default NotFound;
