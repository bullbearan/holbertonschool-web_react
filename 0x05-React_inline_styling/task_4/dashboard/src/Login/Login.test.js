import { shallow } from "enzyme";
import Login from "./Login.js";
import React from "react";
import "../../config/setupTests";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Login />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("renders <Login /> component", () => {
		shallow(<Login />);
	});

	it("test input eixsts", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find("input")).toHaveLength(2);
		expect(wrapper.find("label")).toHaveLength(2);
	});
});
