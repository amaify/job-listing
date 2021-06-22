import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../components/header/header";
import CardDetails from "../components/cards/cardDetails";

function Details() {
	const history = useHistory();

	useEffect(() => {
		window.addEventListener("unload", (e) => {
			if (e.type === "unload") {
				history.goBack();
			}
		});
	});
	return (
		<>
			<Header />
			<CardDetails />
		</>
	);
}

export default Details;
