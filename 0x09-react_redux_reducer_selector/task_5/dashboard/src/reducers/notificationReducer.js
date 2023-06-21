import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { Map, merge } from "immutable";
import notificationsNormalizer from "../schema/notifications";

const notificationReducer = (
	state = Map({ notifications: [], filter: "DEFAULT" }),
	action,
) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			let res = [];

			action.data.map((course) => {
				res.push({ ...course, isRead: false });
			});

			res = notificationsNormalizer(res);
			return merge(state, { notifications: res });

		case MARK_AS_READ:
			return state.setIn(
				["notifications", String(action.index), "isRead"],
				true,
			);

		case SET_TYPE_FILTER:
			return state.set("filter", action.filter);

		default:
			break;
	}
	return state;
};

export default notificationReducer;
