import notificationReducer from "./notificationReducer";

import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes.js";

describe("react 0x09 - task 3", () => {
	it("react 0x09 - task 3", () => {
		const state = notificationReducer(undefined, {});
		expect(state).toEqual({ notifications: [], filter: "DEFAULT" });
	});

	it("react 0x09 - task 3", () => {
		const res = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					isRead: false,
					type: "default",
					value: "New course available",
				},
				{
					id: 2,
					isRead: false,
					type: "urgent",
					value: "New resume available",
				},
				{
					id: 3,
					isRead: false,
					type: "urgent",
					value: "New data available",
				},
			],
		};

		const action = {
			type: FETCH_NOTIFICATIONS_SUCCESS,
			data: [
				{
					id: 1,
					type: "default",
					value: "New course available",
				},
				{
					id: 2,
					type: "urgent",
					value: "New resume available",
				},
				{
					id: 3,
					type: "urgent",
					value: "New data available",
				},
			],
		};

		const state = notificationReducer(undefined, action);
		expect(state).toEqual(res);
	});

	it("react 0x09 - task 3", () => {
		const res = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					isRead: false,
					type: "default",
					value: "New course available",
				},
				{
					id: 2,
					isRead: true,
					type: "urgent",
					value: "New resume available",
				},
				{
					id: 3,
					isRead: false,
					type: "urgent",
					value: "New data available",
				},
			],
		};

		const defaultState = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					isRead: false,
					type: "default",
					value: "New course available",
				},
				{
					id: 2,
					isRead: false,
					type: "urgent",
					value: "New resume available",
				},
				{
					id: 3,
					isRead: false,
					type: "urgent",
					value: "New data available",
				},
			],
		};

		const action = {
			type: MARK_AS_READ,
			index: 2,
		};

		const state = notificationReducer(defaultState, action);
		expect(state).toEqual(res);
	});

	it("react 0x09 - task 3", () => {
		const res = {
			filter: "URGENT",
			notifications: [
				{
					id: 1,
					isRead: false,
					type: "default",
					value: "New course available",
				},
				{
					id: 2,
					isRead: false,
					type: "urgent",
					value: "New resume available",
				},
				{
					id: 3,
					isRead: false,
					type: "urgent",
					value: "New data available",
				},
			],
		};

		const defaultState = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					isRead: false,
					type: "default",
					value: "New course available",
				},
				{
					id: 2,
					isRead: false,
					type: "urgent",
					value: "New resume available",
				},
				{
					id: 3,
					isRead: false,
					type: "urgent",
					value: "New data available",
				},
			],
		};

		const action = {
			type: SET_TYPE_FILTER,
			filter: "URGENT",
		};

		const state = notificationReducer(defaultState, action);
		expect(state).toEqual(res);
	});
});
