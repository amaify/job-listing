import {
	loadData,
	loading,
	setThemeToLight,
	setThemeToDark,
	fetchFailed,
	newJobData,
	noJob,
	showModal,
	removeModal,
} from "../actions/actions";

export const getData = () => {
	return (dispatch) => {
		dispatch(loading());

		fetch("https://remotive.io/api/remote-jobs?category=software-dev")
			.then((response) => response.json())
			.then((resData) => {
				dispatch(loadData(resData.jobs));
			})
			.catch((err) => {
				console.log(err);
				dispatch(fetchFailed());
			});
	};
};

export const setThemeLight = () => {
	return (dispatch) => {
		dispatch(setThemeToLight());
	};
};

export const setThemeDark = () => {
	return (dispatch) => {
		dispatch(setThemeToDark());
	};
};

export const newJobDatas = (xx) => {
	return (dispatch) => {
		dispatch(loading());
		dispatch(newJobData(xx));
	};
};

export const noJobFound = () => {
	return (dispatch) => {
		dispatch(noJob());
	};
};

export const displayModal = () => {
	return (dispatch) => {
		dispatch(showModal());
	};
};

export const hideModal = () => {
	return (dispatch) => {
		dispatch(removeModal());
	};
};
