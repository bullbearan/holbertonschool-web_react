import { shallow } from "enzyme";
import React from "react";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("0x04-React_component - task 8", () => {
	it("0x04-React_component - task 8", () => {
		console.log = jest.fn();
		const HOC = WithLogging(() => <p />);
		const wrapper = shallow(<HOC />);
		expect(wrapper.exists()).toEqual(true);
		expect(console.log).toHaveBeenNthCalledWith(1, "Component Component is mounted");

		wrapper.unmount();
		expect(wrapper.exists()).toEqual(true);
		expect(console.log).toHaveBeenNthCalledWith(2, "Component Component is going to unmount");

		jest.restoreAllMocks();
	});

	it("0x04-React_component - task 8", () => {
		console.log = jest.fn();
		const HOC = WithLogging(Login);
		const wrapper = shallow(<HOC />);
		expect(wrapper.exists()).toEqual(true);
		expect(console.log).toHaveBeenNthCalledWith(1, "Component Login is mounted");

		wrapper.unmount();
		expect(wrapper.exists()).toEqual(true);
		expect(console.log).toHaveBeenNthCalledWith(2, "Component Login is going to unmount");

		jest.restoreAllMocks();
	});
});
