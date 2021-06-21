import noLogo from "../../assets/images/desktop/no-logo.jpg";
import moment from "moment";

export function timeDifference(mainTime) {
	const mainDate = new Date(mainTime);

	let day = mainDate.getDay();
	let month = mainDate.getMonth();
	let year = mainDate.getUTCFullYear();

	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}

	let fullDate = year + month + day;

	let elaspedTime = moment(fullDate, "YYYYMMDD").fromNow();

	return elaspedTime;
}

export function logo(logo) {
	let companyLogo = logo;
	let nullLogo = noLogo;

	!logo ? (companyLogo = nullLogo) : (companyLogo = logo);

	return companyLogo;
}

const time = {
	seconds: 60 * 1000,
	minutes: 60 * 60 * 1000,
	hours: 24 * 60 * 60 * 1000,
	days: 6 * 24 * 60 * 60 * 1000,
	weeks: 4 * 7 * 24 * 60 * 60 * 1000,
	months: 12 * 30 * 24 * 60 * 60 * 1000,
	years: 365 * 24 * 60 * 60 * 1000,
};

export const formatDate = (date) => {
	const dateOld = new Date(date);
	const dateNow = new Date();

	const getDate = dateNow - dateOld;
	let newDate;

	if (getDate < time.seconds) newDate = `${Math.round(getDate / 1000)}s`;
	else if (getDate < time.minutes)
		newDate = `${Math.round(getDate / (60 * 1000))}m`;
	else if (getDate < time.hours)
		newDate = `${Math.round(getDate / (60 * 60 * 1000))}h`;
	else if (getDate < time.days)
		newDate = `${Math.round(getDate / (24 * 60 * 60 * 1000))}d`;
	else if (getDate < time.weeks)
		newDate = `${Math.round(getDate / (7 * 24 * 60 * 60 * 1000))}w`;
	else if (getDate < time.months)
		newDate = `${Math.round(getDate / (30 * 24 * 60 * 60 * 1000))}mo`;
	else newDate = `${Math.round(getDate / (365 * 24 * 60 * 60 * 1000))}y`;

	return newDate + " ago";
};

// export function getURLFromString(urlString) {
// 	let newLink;
// 	let urlRegex =
// 		/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

// 	urlString.replace(urlRegex, (url) => {
// 		newLink = url;
// 	});

// 	newLink === undefined
// 		? (newLink = "https://google.com")
// 		: (newLink = newLink);

// 	return newLink;
// }
