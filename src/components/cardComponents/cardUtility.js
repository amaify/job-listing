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
