import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import FilterDesc from "./filterDescription/filterDesc";
import FilterLocation from "./filterLocation/filterLocation";
import FilterJobType from "./filterJobType/filterJobType";
import { newJobDatas, noJobFound } from "../../store/utils/utility";

function SearchBar(props) {
	const [inputDesc, setDesc] = useState("");
	const [inputLoc, setLocation] = useState("");
	const [inputFullTime, setFullTime] = useState(false);
	// const [fullTimeValue, setFullTimeValue] = useState("");
	let [filter, setFiltered] = useState([]);

	const getDescValue = (event) => {
		const inputValue = event.target.value.toLowerCase();
		return setDesc(inputValue);
	};

	const getLocationValue = (event) => {
		const inputValue = event.target.value.toLowerCase();
		return setLocation(inputValue);
	};

	const getFullTimeValue = (event) => {
		const checkboxValue = event.target.checked;
		return setFullTime(checkboxValue);
	};

	const dispatch = useDispatch();

	const submitForm = (event) => {
		event.preventDefault();

		let jobs = props.jobList;

		let xy = jobs.filter((desc) => {
			return desc.title.toLowerCase().includes(inputDesc);
		});

		let yy = jobs.filter((loc) => {
			return loc.candidate_required_location.toLowerCase().includes(inputLoc);
		});

		let ab = jobs.filter((fullTime) => {
			return fullTime.job_type === "full_time";
		});

		if (inputDesc === "" && inputLoc === "" && inputFullTime === false) {
			filter = jobs;
		} else if (inputDesc !== "" && inputLoc === "" && inputFullTime === false) {
			filter = xy;
		} else if (inputDesc === "" && inputLoc !== "" && inputFullTime === false) {
			filter = yy;
		} else if (inputDesc === "" && inputLoc === "" && inputFullTime === true) {
			filter = ab;
		} else {
			// let combinedArray = xy.concat(yy);
			let combinedArray = [...xy, ...yy];
			if (inputFullTime) {
				combinedArray = [...xy, ...yy, ...ab];
			}
			filter = combinedArray;
		}

		console.log(filter);
		if (filter.length === 0) {
			return dispatch(noJobFound());
		}
		return dispatch(newJobDatas(filter));
	};
	return (
		<div className="form">
			<form className="form-contents" onSubmit={submitForm}>
				<FilterDesc getValue={getDescValue} />
				<FilterLocation getValue={getLocationValue} />
				<FilterJobType getValue={getFullTimeValue} />
			</form>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		jobList: state.jobData,
	};
};

export default connect(mapStateToProps, null)(SearchBar);
