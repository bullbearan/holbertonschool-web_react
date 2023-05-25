import { mount } from "enzyme";
import React from "react";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";
import { StyleSheetTestUtils } from "aphrodite";
import "../../config/setupTests";

describe("0x04-React_component - task 8", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("0x04-React_component - task 8", () => {
		console.log = jest.fn();
		const HOC = WithLogging(() => <p />);
		const wrapper = mount(<HOC />);
		expect(wrapper.exists()).toEqual(true);
		expect(console.log).toHaveBeenNthCalledWith(1, "Component Component is mounted");

		wrapper.unmount();
		expect(wrapper.exists()).toEqual(false);
		expect(console.log).toHaveBeenNthCalledWith(2, "Component Component is going to unmount");

		jest.restoreAllMocks();
	});

	it("0x04-React_component - task 8", () => {
		console.log = jest.fn();
		const HOC = WithLogging(Login);
		const wrapper = mount(<HOC />);
		expect(wrapper.exists()).toEqual(true);
		expect(console.log).toHaveBeenNthCalledWith(1, "Component Login is mounted");

		wrapper.unmount();
		expect(wrapper.exists()).toEqual(false);
		expect(console.log).toHaveBeenNthCalledWith(2, "Component Login is going to unmount");

		jest.restoreAllMocks();
	});
});
