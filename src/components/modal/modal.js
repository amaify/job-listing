import React from "react";
import { useDispatch } from "react-redux";
import FilterLocation from "../searchBar/filterLocation/filterLocation";
import FilterJobType from "../searchBar/filterJobType/filterJobType";
import Input from "../input/input";
import Button from "../button/button";
import LocationIcon from "../../assets/images/desktop/icon-location.svg";

const Modal = ({ getLocationValue, getJobTypeValue, submitForm }) => {
	return (
		<form className="modal" onSubmit={submitForm}>
			<div className="modal-location">
				<img src={LocationIcon} alt="Location Icon" />
				<Input
					type="text"
					placeholder="Filter by location..."
					onChange={getLocationValue}
				/>
			</div>
			<div className="modal-jobType">
				<div className="modal-jobType__checkbox">
					<Input type="checkbox" onChange={getJobTypeValue} value="Full_time" />
					<label htmlFor="jobtype">full time only</label>
				</div>
				<Button text="Search" btnNumber="1" />
			</div>
		</form>
	);
};

export default Modal;
