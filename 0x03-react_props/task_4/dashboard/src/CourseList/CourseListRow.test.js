import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow.js";
import React from "react";
import "../../config/setupTests";

describe("<CourseList />", () => {
	it("renders <CourseList /> component", () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first" />);
		expect(wrapper.find("th")).toHaveLength(1);
		expect(wrapper.find("th").prop("colSpan")).toEqual(2);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(
			<CourseListRow isHeader={true} textFirstCell="first" textSecondCell="second" />
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
