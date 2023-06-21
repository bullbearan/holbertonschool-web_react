import notificationReducer from "./notificationReducer";

import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes.js";
import { Map, fromJS } from "immutable";
import notificationsNormalizer from "../schema/notifications";

describe("react 0x09 - task 3", () => {
	it("react 0x09 - task 3", () => {
		const state = notificationReducer(undefined, {});
		expect(state).toEqual(Map({ notifications: [], filter: "DEFAULT" }));
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

		notificationsNormalizer(res);

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

		notificationReducer(undefined, action);
		expect(true).toEqual(true);
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

		notificationsNormalizer(res);

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

		notificationReducer(fromJS(defaultState), action);
		expect(true).toEqual(true);
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

		notificationsNormalizer(res);

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

		notificationReducer(fromJS(defaultState), action);
		expect(true).toEqual(true);
	});
});
