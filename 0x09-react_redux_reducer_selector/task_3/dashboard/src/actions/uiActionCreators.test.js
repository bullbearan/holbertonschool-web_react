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
	loginSuccess,
	loginFailure,
	loginRequest,
} from "./uiActionCreators";

import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

	describe("0x08 react - task 6", function () {
		afterEach(() => {
			fetchMock.restore();
		});

		it("0x08 react - task 6", () => {
			const store = mockStore({});
			fetchMock.restore();
			const user = {
				email: "random@gmail.com",
				password: "12345",
			};
			fetchMock.mock("http://localhost:6000/login-success.json", "{}");

			return store
				.dispatch(loginRequest(user.email, user.password))
				.then(() => {
					const actions = store.getActions();
					console.log(actions);
					expect(actions[0]).toEqual(
						login(user.email, user.password),
					);
					expect(actions[1]).toEqual(loginFailure());
				});
		});

		it("0x08 react - task 6", () => {
			const store = mockStore({});
			fetchMock.mock("http://localhost:6000/login-success.json", 500);
			const user = {
				email: "random@gmail.com",
				password: "12345",
			};

			return store
				.dispatch(loginRequest(user.email, user.password))
				.then(() => {
					const actions = store.getActions();
					expect(actions[0]).toEqual(
						login(user.email, user.password),
					);
					expect(actions[1]).toEqual(loginFailure());
				});
		});
	});
});
