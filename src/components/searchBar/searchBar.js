import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import FilterDesc from "./filterDescription/filterDesc";
import FilterLocation from "./filterLocation/filterLocation";
import FilterJobType from "./filterJobType/filterJobType";
import { newJobDatas, noJobFound, hideModal } from "../../store/utils/utility";
import Modal from "../modal/modal";

function SearchBar(props) {
	const [inputDesc, setDesc] = useState("");
	const [inputLoc, setLocation] = useState("");
	const [inputFullTime, setFullTime] = useState(false);
	let [filter] = useState([]);

	useEffect(() => {
		return window.addEventListener("scroll", () => {
			const scrollTop = window.scrollY > 500;
			const form = document.querySelector(".form");

			if (form) {
				if (scrollTop) {
					form.classList.add("scrolled");
				} else {
					form.classList.remove("scrolled");
				}
			}
		});
	}, []);

	const dispatch = useDispatch();

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

	const submitForm = (event) => {
		event.preventDefault();

		let jobs = props.jobList;

		let descriptionSearch = jobs.filter((desc) => {
			return (
				desc.title.toLowerCase().includes(inputDesc) ||
				desc.company_name.toLowerCase().includes(inputDesc)
			);
		});

		let descriptionLocationSearch = jobs.filter((descLoc) => {
			return (
				descLoc.title.toLowerCase().includes(inputDesc) &&
				descLoc.candidate_required_location.toLowerCase().includes(inputLoc)
			);
		});

		let descLocFullTimeSearch = jobs.filter((wholeSearch) => {
			return (
				wholeSearch.title.toLowerCase().includes(inputDesc) &&
				wholeSearch.candidate_required_location
					.toLowerCase()
					.includes(inputLoc) &&
				wholeSearch.job_type === "full_time"
			);
		});

		let locationFullTimeSearch = jobs.filter((locFT) => {
			return (
				locFT.candidate_required_location.toLowerCase().includes(inputLoc) &&
				locFT.job_type === "full_time"
			);
		});

		let locationSearch = jobs.filter((loc) => {
			return loc.candidate_required_location.toLowerCase().includes(inputLoc);
		});

		let fullTimeSearch = jobs.filter((fullTime) => {
			return fullTime.job_type === "full_time";
		});

		if (inputDesc === "" && inputLoc === "" && inputFullTime === false) {
			filter = jobs;
		} else if (inputDesc !== "" && inputLoc === "" && inputFullTime === false) {
			filter = descriptionSearch;
		} else if (inputDesc === "" && inputLoc !== "" && inputFullTime === false) {
			filter = locationSearch;
		} else if (inputDesc === "" && inputLoc === "" && inputFullTime === true) {
			filter = fullTimeSearch;
		} else if (inputDesc !== "" && inputLoc !== "" && inputFullTime === false) {
			filter = descriptionLocationSearch;
		} else if (inputDesc !== "" && inputLoc !== "" && inputFullTime === true) {
			filter = descLocFullTimeSearch;
		} else if (inputDesc === "" && inputLoc !== "" && inputFullTime === true) {
			filter = locationFullTimeSearch;
		} else {
			return filter;
		}

		// console.log(filter);
		if (filter.length === 0) {
			return dispatch(noJobFound());
		}
		dispatch(hideModal());
		return dispatch(newJobDatas(filter));
	};
	return (
		<nav className="form">
			<form className="form-contents" onSubmit={submitForm}>
				<FilterDesc getValue={getDescValue} onSubmit={submitForm} />
				<FilterLocation getValue={getLocationValue} />
				<FilterJobType getValue={getFullTimeValue} />
			</form>
			{props.modal && (
				<Modal
					getLocationValue={getLocationValue}
					getJobTypeValue={getFullTimeValue}
					submitForm={submitForm}
				/>
			)}
		</nav>
	);
}

const mapStateToProps = (state) => {
	return {
		jobList: state.jobData,
		modal: state.showModal,
	};
};

export default connect(mapStateToProps, null)(SearchBar);
