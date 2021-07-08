import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, formatDate } from "../cardComponents/cardUtility";
import Button from "../button/button";
import { BallTriangle } from "react-loading-icons";

import { connect, useDispatch } from "react-redux";
import { setLink, unSetLink } from "../../store/actions/actions";

function Cards(props) {
	let { jobData, loading, fetchFailed, noJob } = props;
	const [visible, setVisible] = useState(15);
	const dispactch = useDispatch();

	useEffect(() => {
		dispactch(unSetLink());
	}, [dispactch]);

	props.search ? (jobData = props.filteredJobs) : (jobData = props.jobData);

	const spinner = (
		<p className="main-container__loading">
			<BallTriangle stroke="#5964e0" />
		</p>
	);

	const showMoreJobs = () => {
		setVisible((prevState) => prevState + 6);
	};

	let mainJobLists;

	let error = (
		<div className="network-error">
			<p className="network-error__title">Ooops something went wrong!</p>
		</div>
	);

	let jobs = fetchFailed
		? ""
		: jobData === null
		? // <p className="no-listing">No Jobs listing.</p>
		  spinner
		: jobData.slice(0, visible).map((job) => (
				<div className="card" key={job.id}>
					<div className="card-image">
						<img src={logo(job.company_logo_url)} alt="Company Logo" />
					</div>
					<Link
						className="card-content"
						to={{
							pathname: `/${job.id}`,
							state: job,
						}}
						// onClick={dispactch(setLink)}
						onClick={() => dispactch(setLink())}
					>
						<div className="card-content__items">
							<p className="card-content__items--jobAge">
								{/* <span>{timeDifference(job.publication_date)}</span> */}
								<span>{formatDate(job.publication_date)}</span>{" "}
								{job.job_type !== ""
									? job.job_type.replace("_", " ")
									: "Not Stated"}
							</p>
							<h2 className="card-content__items--jobTitle">{job.title}</h2>
							<p className="card-content__items--firm">{job.company_name}</p>
							<h3 className="card-content__items--location">
								{job.candidate_required_location === ""
									? "No Location Provided"
									: job.candidate_required_location}
							</h3>
						</div>
					</Link>
				</div>
		  ));

	loading ? (mainJobLists = spinner) : (mainJobLists = jobs);

	noJob
		? (mainJobLists = <p className="noJobs">No search result found!</p>)
		: (mainJobLists = jobs);

	return (
		<main className="main-container">
			<div className="main-container__cards">{mainJobLists}</div>
			{fetchFailed ? (mainJobLists = error) : null}

			{fetchFailed ? (
				""
			) : loading ? (
				""
			) : jobData === null ? (
				""
			) : noJob ? (
				""
			) : jobData.length < visible ? (
				<p className="main-container__cards--jobLoaded">
					All jobs successfully loaded!
				</p>
			) : noJob ? (
				""
			) : (
				<Button text="Load More" btnNumber="1" onClick={showMoreJobs} />
			)}
		</main>
	);
}

const mapStateToProps = (state) => {
	return {
		jobData: state.jobData,
		filteredJobs: state.newArray,
		search: state.search,
		loading: state.loading,
		noJob: state.noJobFound,
		fetchFailed: state.failed,
		setLink: state.setLink,
	};
};

export default connect(mapStateToProps, null)(Cards);
