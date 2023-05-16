import { shallow } from "enzyme";
import App from "./App";
import React from "react";
import "../../config/setupTests";

describe("<App />", () => {
	it("renders <App /> component", () => {
		shallow(<App />);
	});

	it("check notifications", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Notifications")).toHaveLength(1);
	});

	it("check app-header", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Header")).toHaveLength(1);
	});

	it("check app-body", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Login")).toHaveLength(1);
	});

	it("check app-footer", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Footer")).toHaveLength(1);
	});
});
