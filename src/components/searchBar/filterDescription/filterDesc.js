import React, { useEffect } from "react";
import Input from "../../input/input";
import SearchIcon from "../../../assets/images/desktop/icon-search.svg";
import FilterIcon from "../../../assets/images/mobile/icon-filter.svg";
import Button from "../../button/button";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/actions/actions";

const FilterDesc = ({ getValue, onSubmit }) => {
	const mobileSearchIcon = (
		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
				fill="#ffffff"
				fillRule="nonzero"
			/>
		</svg>
	);

	const dispatch = useDispatch();

	const displayModal = () => {
		return dispatch(showModal());
	};

	return (
		<div className="description">
			<img
				src={SearchIcon}
				alt="Search Icon"
				className="description__image--searchIcon"
			/>
			<Input
				type="text"
				placeholder={
					window.matchMedia("(max-width: 800px)").matches
						? "Filter by title..."
						: "filter by title, companies, expertise..."
				}
				// placeholder="filter by title, companies, expertise..."
				onChange={getValue}
			/>
			<img
				src={FilterIcon}
				alt="Filter Icon"
				className="description__image--filterIcon"
				onClick={displayModal}
			/>
			<Button text={mobileSearchIcon} btnNumber="3" onClick={onSubmit} />
		</div>
	);
};

export default FilterDesc;
