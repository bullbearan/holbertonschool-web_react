import { shallow } from "enzyme";
import CourseList from "./CourseList.js";
import React from "react";
import "../../config/setupTests";

describe("<CourseList />", () => {
	it("renders <CourseList /> component", () => {
		shallow(<CourseList />);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(
			<CourseList isHeader={true} textFirstCell="first" textSecondCell="second" />
		);
		expect(wrapper.find("CourseListRow")).toHaveLength(5);
	});
});
