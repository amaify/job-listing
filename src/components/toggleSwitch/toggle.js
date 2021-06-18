import React from "react";
import { connect } from "react-redux";

function Toggle(props) {
	let toggleSwitch;
	let inputSwitch;

	!props.toggled
		? (toggleSwitch = "toggle-switch")
		: (toggleSwitch = "toggle-switch__checked");

	!props.toggled
		? (inputSwitch = "toggle-switch__checkbox")
		: (inputSwitch = "toggle-switch__checked--checkbox");

	return (
		<label className={toggleSwitch}>
			<input
				type="checkbox"
				className={inputSwitch}
				onChange={props.onChange}
				onClick={props.onClick}
			/>
			<span className="toggle-switch__span" />
		</label>
	);
}

const mapStateToProps = (state) => {
	return {
		toggled: state.setToggle,
	};
};

export default connect(mapStateToProps, null)(Toggle);
