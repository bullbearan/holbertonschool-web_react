import uiReducer, { initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { toJS } from "immutable";

describe("react 0x09 - task 0", () => {
	it("react 0x09 - task 0", () => {
		const state = uiReducer(undefined, {});
		expect(state.toJS()).toEqual(initialState);
	});

	it("react 0x09 - task 0", () => {
		const state = uiReducer(undefined, { type: "SELECT_COURSE" });
		expect(state.toJS()).toEqual(initialState);
	});

	it("react 0x09 - task 0", () => {
		const state = uiReducer(undefined, {
			type: DISPLAY_NOTIFICATION_DRAWER,
		});
		expect(state.toJS()).toEqual({
			...initialState,
			isNotificationDrawerVisible: true,
		});
	});
});
