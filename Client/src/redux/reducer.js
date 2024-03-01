// reducers.js
const initialState = {
	data: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_DATA":
			return {
				...state,
				data: action.data,
			};
		case "SET_USER":
			return {
				...state,
				user: action.data,
			};
		case "SET_USER_PROFILE":
			return {
				...state,
				userProfile: action.data,
			};
		default:
			return {
				...state,
			};
	}
};

export default rootReducer;
