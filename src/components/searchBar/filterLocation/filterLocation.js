import React from "react";
import Input from "../../input/input";
import LocationIcon from "../../../assets/images/desktop/icon-location.svg";

const FilterLocation = ({ getValue }) => {
	return (
		<div className="location">
			<img src={LocationIcon} alt="Location Icon" />
			{/* <input type="text" placeholder="Filter by location" autoComplete="off" /> */}
			<Input type="text" placeholder="Filter by location" onChange={getValue} />
		</div>
	);
};

export default FilterLocation;
