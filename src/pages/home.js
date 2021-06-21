import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";
import Cards from "../components/cards/card";

function Home() {
	return (
		<React.Fragment>
			<Helmet>
				<title>Home | Dev Job Finder</title>
			</Helmet>
			<Header />
			<SearchBar />
			<Cards />
		</React.Fragment>
	);
}

export default Home;
