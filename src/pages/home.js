import React from "react";

import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";
import Cards from "../components/cards/card";

function Home() {
	return (
		<React.Fragment>
			<Header />
			<SearchBar />
			<Cards />
		</React.Fragment>
	);
}

export default Home;
