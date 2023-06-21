import uiReducer, { initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("react 0x09 - task 0", () => {
	it("react 0x09 - task 0", () => {
		const state = uiReducer(undefined, {});
		expect(state).toEqual(initialState);
	});

	it("react 0x09 - task 0", () => {
		const state = uiReducer(undefined, { type: "SELECT_COURSE" });
		expect(state).toEqual(initialState);
	});

	it("react 0x09 - task 0", () => {
		const state = uiReducer(undefined, {
			type: DISPLAY_NOTIFICATION_DRAWER,
		});
		expect(state).toEqual({
			...initialState,
			isNotificationDrawerVisible: true,
		});
	});
});
