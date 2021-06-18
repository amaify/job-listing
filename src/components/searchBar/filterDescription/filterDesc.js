import React from "react";
import Input from "../../input/input";
import SearchIcon from "../../../assets/images/desktop/icon-search.svg";

const FilterDesc = ({ getValue }) => {
	return (
		<div className="description">
			<img src={SearchIcon} alt="Search Icon" />
			{/* <input
				type="text"
				placeholder="Filter by title, companies, expertise..."
				autoComplete="off"
			/> */}
			<Input
				type="text"
				placeholder="Filter by title, companies, expertise..."
				onChange={getValue}
			/>
		</div>
	);
};

export default FilterDesc;
