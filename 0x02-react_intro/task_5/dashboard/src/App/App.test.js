import { shallow } from "enzyme";
import App from "./App";
import React from "react";
import "../../config/setupTests";

describe("<App />", () => {
	it("renders <App /> component", () => {
		shallow(<App />);
	});

	it("check app-header", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("div").first().hasClass("App-header"));
	});

	it("check app-body", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("div").first().hasClass("App-body"));
	});

	it("check app-footer", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("div").first().hasClass("App-footer"));
	});
});
