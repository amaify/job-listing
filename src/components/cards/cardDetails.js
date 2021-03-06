import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../button/button";
import { useHistory } from "react-router-dom";
import { logo, formatDate } from "../cardComponents/cardUtility";

function removeURLString(companyLink) {
	let url = companyLink;
	!url || url === "http:"
		? (url = "No available link")
		: (url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0]);

	return url;
}

function CardDetails() {
	const locationData = useHistory();
	const data = locationData.location.state;

	useEffect(() => {
		return window.scrollTo(0, 0);
	}, []);

	let companyLink = data.company_url;
	!companyLink
		? (companyLink = "https://google.com")
		: (companyLink = data.url);

	return (
		<>
			<Helmet>
				<title>Details | {data.title}</title>
			</Helmet>
			<section className="cardDetails">
				<div className="cardDetails-heading">
					<div className="cardDetails-heading__image">
						<img src={logo(data.company_logo_url)} alt="Company Logo" />
					</div>
					<div className="cardDetails-heading__name">
						<h2>{data.title}</h2>
						<p>{removeURLString(data.url)}</p>
					</div>
					<Button
						text="company site"
						btnNumber="2"
						link
						target="_blank"
						to={{ pathname: `${data.url}` }}
					/>
				</div>
			</section>

			<section className="cardDetailsBody">
				<div className="cardDetailsBody-content">
					<div className="cardDetailsBody__heading">
						<p className="cardDetailsBody__heading--jobAge">
							{/* <span>{timeDifference(data.publication_date)}</span> */}
							<span>{formatDate(data.publication_date)}</span>{" "}
							{data.job_type.replace("_", " ")}
						</p>
						<h2 className="cardDetailsBody__heading--title">{data.title}</h2>
						<p className="cardDetailsBody__heading--location">
							{data.candidate_required_location}
						</p>
					</div>
					<div className="cardDetailsBody__heading--link">
						<Button
							text="apply now"
							link
							btnNumber="1"
							target="_blank"
							// to={{ pathname: `${getURLFromString(data.how_to_apply)}` }}
							to={{ pathname: `https://google.com` }}
						/>
					</div>
				</div>

				<div
					className="cardDetailsBody-description"
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
			</section>
			<section className="cardDetailsBody-apply">
				<div className="cardDetailsBody-apply__wrapper">
					<h2 className="cardDetailsBody-apply__wrapper--heading">
						How to Apply
					</h2>

					<div
						className="cardDetailsBody-apply__wrapper--content"
						dangerouslySetInnerHTML={{ __html: data.how_to_apply }}
					></div>
				</div>
			</section>

			<section className="cardDetailsBody-footer">
				<div className="cardDetailsBody-footer__wrapper">
					<div className="cardDetailsBody-footer__wrapper--title">
						<h3>{data.title}</h3>
						<p>{removeURLString(data.url)}</p>
					</div>
					<Button
						link
						text="apply now"
						btnNumber="1"
						target="_blank"
						// to={{ pathname: `${getURLFromString(data.how_to_apply)}` }}
						to={{ pathname: `https://google.com` }}
					/>
				</div>
			</section>
		</>
	);
}

export default CardDetails;
