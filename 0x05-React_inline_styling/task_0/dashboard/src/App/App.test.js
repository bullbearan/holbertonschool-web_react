import { shallow } from "enzyme";
import App from "./App";
import React from "react";
import { StyleSheetTestUtils } from 'aphrodite';

describe("<App />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

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

	it("check app-footer", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("CourseList")).toHaveLength(0);
	});

	it("check app-footer", () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find("Login")).toHaveLength(0);
		expect(wrapper.find("CourseList")).toHaveLength(1);
	});
});

describe("0x04-React_component", () => {
	it("test when the user presses Ctrl and h", () => {
		const events = {};
		const logout = jest.fn();
		document.addEventListener = jest.fn((event, cb) => {
			events[event] = cb;
		});
		window.alert = jest.fn();

		shallow(<App logOut={logout} />);
		events.keydown({ key: "h", ctrlKey: true });
		expect(window.alert).toHaveBeenCalledWith("Logging you out");
		expect(logout).toHaveBeenCalled();
		jest.restoreAllMocks();
	});
});
