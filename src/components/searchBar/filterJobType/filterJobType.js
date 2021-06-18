import React from "react";
import Input from "../../input/input";
import Button from "../../button/button";

const FilterJobType = ({ getValue }) => {
	return (
		<div className="jobtype">
			<Input type="checkbox" onChange={getValue} value="Full_time" />
			<label htmlFor="jobtype">full time only</label>
			<Button text="Search" btnNumber="1" />
		</div>
	);
};

export default FilterJobType;
