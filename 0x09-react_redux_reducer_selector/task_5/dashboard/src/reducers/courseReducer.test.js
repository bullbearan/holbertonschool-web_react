import courseReducer from "./courseReducer";

import {
	SELECT_COURSE,
	UNSELECT_COURSE,
	FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";

import { Map, fromJS } from "immutable";
import coursesNormalizer from "../schema/courses";

describe("react 0x09 - task 2", () => {
	it("react 0x09 - task 2", () => {
		const state = courseReducer(undefined, {});
		expect(state).toEqual(Map([]));
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
		expect(state.toJS()).toEqual(coursesNormalizer(res));
	});

	it("react 0x09 - task 2", () => {
		const defaultState = [
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

		const state = courseReducer(
			fromJS(coursesNormalizer(defaultState)),
			action,
		);
		expect(state.toJS()).toEqual(coursesNormalizer(res));
	});

	it("react 0x09 - task 2", () => {
		const defaultState = [
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

		const state = courseReducer(
			fromJS(coursesNormalizer(defaultState)),
			action,
		);
		expect(state.toJS()).toEqual(coursesNormalizer(res));
	});
});
