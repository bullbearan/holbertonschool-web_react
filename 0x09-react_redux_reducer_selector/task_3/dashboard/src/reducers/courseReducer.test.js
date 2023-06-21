import courseReducer from "./courseReducer";

import {
	SELECT_COURSE,
	UNSELECT_COURSE,
	FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";

describe("react 0x09 - task 2", () => {
	it("react 0x09 - task 2", () => {
		const state = courseReducer(undefined, {});
		expect(state).toEqual([]);
	});

	it("react 0x09 - task 2", () => {
		const res = [
			{
				id: 1,
				name: "ES6",
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: "Webpack",
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: "React",
				isSelected: false,
				credit: 40,
			},
		];

		const action = {
			type: FETCH_COURSE_SUCCESS,
			data: [
				{
					id: 1,
					name: "ES6",
					credit: 60,
				},
				{
					id: 2,
					name: "Webpack",
					credit: 20,
				},
				{
					id: 3,
					name: "React",
					credit: 40,
				},
			],
		};

		const state = courseReducer(undefined, action);
		expect(state).toEqual(res);
	});

	it("react 0x09 - task 2", () => {
		const res = [
			{
				id: 1,
				name: "ES6",
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: "Webpack",
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: "React",
				isSelected: false,
				credit: 40,
			},
		];

		const action = {
			type: SELECT_COURSE,
			index: 2,
		};

		const state = courseReducer(res, action);
		expect(state[1].isSelected).toEqual(true);
	});

	it("react 0x09 - task 2", () => {
		const res = [
			{
				id: 1,
				name: "ES6",
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: "Webpack",
				isSelected: true,
				credit: 20,
			},
			{
				id: 3,
				name: "React",
				isSelected: false,
				credit: 40,
			},
		];

		const action = {
			type: UNSELECT_COURSE,
			index: 2,
		};

		const state = courseReducer(res, action);
		expect(state[1].isSelected).toEqual(false);
	});
});
