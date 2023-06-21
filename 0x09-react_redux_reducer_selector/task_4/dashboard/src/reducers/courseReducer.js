import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { Map } from "immutable";
import coursesNormalizer from "../schema/courses";

const courseReducer = (state = Map([]), action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			let res = [];

			action.data.map((course) => {
				res.push({ ...course, isSelected: false });
			});

			res = coursesNormalizer(res);
			return state.merge(res);

		case SELECT_COURSE:
			return state.setIn([String(action.index), "isSelected"], true);

		case UNSELECT_COURSE:
			return state.setIn([String(action.index), "isSelected"], false);

		default:
			break;
	}
	return state;
};

export default courseReducer;
