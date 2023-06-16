import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

import {
	login,
	logout,
	displayNotificationDrawer,
	hideNotificationDrawer,
} from "./uiActionCreators";

describe("0x08 react - task 4", function () {
	it("0x08 react - task 4", function () {
		const user = { email: "random@gmail.com", password: 12345 };
		const res = login(user.email, user.password);
		expect(res).toEqual({ type: LOGIN, user });
	});
	it("0x08 react - task 4", function () {
		expect(logout()).toEqual({ type: LOGOUT });
	});
	it("0x08 react - task 4", function () {
		expect(displayNotificationDrawer()).toEqual({
			type: DISPLAY_NOTIFICATION_DRAWER,
		});
	});
	it("0x08 react - task 4", function () {
		expect(hideNotificationDrawer()).toEqual({
			type: HIDE_NOTIFICATION_DRAWER,
		});
	});
});
