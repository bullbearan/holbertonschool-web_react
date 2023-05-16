import { shallow } from "enzyme";
import CourseList from "./CourseList.js";
import React from "react";
import "../../config/setupTests";

describe("<CourseList />", () => {
	it("renders <CourseList /> component", () => {
		shallow(<CourseList />);
	});

	let listCourses;
	describe("With CourseList containing elements", () => {
		beforeEach(() => {
			listCourses = [
				{ id: 1, name: "ES6", credit: 60 },
				{ id: 2, name: "Webpack", credit: 20 },
				{ id: 3, name: "React", credit: 40 },
			];
		});

		it("render 5 list elements", () => {
			const wrapper = shallow(<CourseList listCourses={listCourses} />);
			expect(wrapper.find("CourseListRow")).toHaveLength(5);
		});

		it("render row with correct text", () => {
			const wrapper = shallow(<CourseList listCourses={listCourses} />);
			expect(wrapper.find("CourseListRow").at(0).prop("textFirstCell")).toEqual(
				"Available courses",
			);
		});

		it("render row with correct text", () => {
			const wrapper = shallow(<CourseList listCourses={listCourses} />);
			expect(wrapper.find("CourseListRow").at(1).prop("textFirstCell")).toEqual(
				"Course name",
			);
		});
	});

	describe("With CourseList Empty", () => {
		beforeEach(() => {
			listCourses = [];
		});

		it("render 3 list elements", () => {
			const wrapper = shallow(<CourseList />);
			expect(wrapper.find("CourseListRow")).toHaveLength(3);
		});
	});
});
