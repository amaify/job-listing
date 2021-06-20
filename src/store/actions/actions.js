import * as actionType from "./actionType";

// export function loadJobs() {
// 	return (dispatch) => {
// 		return fetch(
// 			"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
// 		)
// 			.then((response) => response.json())
// 			.then((resData) => {
// 				dispatch(loadData(resData));
// 			})
// 			.catch((err) => console.log(err));
// 	};
// }

export function loadData(responseData) {
	return {
		type: actionType.LOAD_DATA,
		responseData: responseData,
	};
}

export const toggleTrue = (event) => {
	return {
		type: actionType.TOGGLE_TRUE,
		event: event,
	};
};

export const toggleFalse = () => {
	return {
		type: actionType.TOGGLE_FALSE,
	};
};

export const loading = () => {
	return {
		type: actionType.LOADING,
	};
};

export const loadingSuccessful = () => {
	return {
		type: actionType.LOADING_SUCCESSFUL,
	};
};

export const loadMore = () => {
	return {
		type: actionType.LOADMORE,
	};
};

export const modal = () => {
	return {
		type: actionType.MODAL,
	};
};

export const setThemeToLight = () => {
	return {
		type: actionType.SET_THEME_LIGHT,
	};
};

export const setThemeToDark = () => {
	return {
		type: actionType.SET_THEME_DARK,
	};
};

export const fetchFailed = (err) => {
	return {
		type: actionType.FETCH_FAILED,
		error: err,
	};
};

export const newJobData = (newJobData) => {
	return {
		type: actionType.NEW_JOB_DATA,
		newJobs: newJobData,
	};
};

export const noJob = () => {
	return {
		type: actionType.NO_JOB,
	};
};

export const showModal = () => {
	return {
		type: actionType.SHOW_MODAL,
	};
};

export const removeModal = () => {
	return {
		type: actionType.REMOVE_MODAL,
	};
};
