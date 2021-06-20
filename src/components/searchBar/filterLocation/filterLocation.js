import React from "react";
import Input from "../../input/input";
import LocationIcon from "../../../assets/images/desktop/icon-location.svg";

const FilterLocation = ({ getValue }) => {
	// let locationInput;

	// window.matchMedia("(max-width: 600px)").matches ?
	return (
		<div className="location">
			{/* {window.matchMedia("(max-width: 600px)").matches ? (
				""
			) : (
				<img src={LocationIcon} alt="Location Icon" />
			)} */}
			<img src={LocationIcon} alt="Location Icon" />
			{/* {window.matchMedia("(max-width: 600px)").matches ? (
				""
			) : (
				<Input
					type="text"
					placeholder="Filter by location"
					onChange={getValue}
				/>
			)} */}
			<Input type="text" placeholder="Filter by location" onChange={getValue} />
		</div>
	);
};

export default FilterLocation;
