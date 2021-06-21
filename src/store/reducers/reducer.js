import * as actionType from "../actions/actionType";

const initialState = {
	jobData: null,
	loading: false,
	search: false,
	showModal: false,
	setToggle: false,
	failed: false,
	noJobFound: false,
	networkError: false,
	setTheme: { mode: "light" },
};

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.LOAD_DATA:
			return { ...state, jobData: action.responseData, loading: false };

		case actionType.LOADING:
			return { ...state, loading: true };

		case actionType.LOADING_SUCCESSFUL:
			return { ...state, loading: false };

		case actionType.FETCH_FAILED:
			return { ...state, failed: true, loading: false };

		case actionType.SET_THEME_DARK:
			return { ...state, setTheme: { mode: "dark" }, setToggle: true };

		case actionType.SET_THEME_LIGHT:
			return { ...state, setTheme: { mode: "light" }, setToggle: false };

		case actionType.NEW_JOB_DATA:
			let newArray = [...state.jobData];
			newArray = action.newJobs;
			return {
				...state,
				newArray: newArray,
				noJobFound: false,
				loading: false,
				search: true,
			};

		case actionType.SHOW_MODAL:
			return { ...state, showModal: true };

		case actionType.REMOVE_MODAL:
			return { ...state, showModal: false };

		case actionType.NO_JOB:
			return { ...state, noJobFound: true };

		default:
			return state;
	}
};
