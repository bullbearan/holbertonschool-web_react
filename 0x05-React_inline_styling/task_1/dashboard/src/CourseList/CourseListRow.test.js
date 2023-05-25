import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow.js";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import "../../config/setupTests";

describe("<CourseList />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("renders <CourseList /> component", () => {
		shallow(<CourseListRow isHeader={true} textFirstCell="first" />);
	});

	it("renders <CourseList /> component", () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first" />);
		expect(wrapper.find("th")).toHaveLength(1);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(
			<CourseListRow isHeader={true} textFirstCell="first" textSecondCell="second" />,
		);
		expect(wrapper.find("th")).toHaveLength(2);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(
			<CourseListRow isHeader={false} textFirstCell="first" textSecondCell="second" />,
		);
		expect(wrapper.find("tr").children("td")).toHaveLength(2);
	});
});
