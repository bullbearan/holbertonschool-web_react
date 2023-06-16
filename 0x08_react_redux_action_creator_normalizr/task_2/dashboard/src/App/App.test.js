import { shallow, mount } from "enzyme";
import App, { listNotificationsInitialState } from "./App";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";

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
		expect(wrapper.find("Login")).toHaveLength(1);
		expect(wrapper.find("CourseList")).toHaveLength(0);
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

	it("test when the user presses Ctrl and h", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state().displayDrawer).toEqual(false);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state().displayDrawer).toEqual(true);
	});

	it("test when the user presses Ctrl and h", () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state().displayDrawer).toEqual(false);
	});

	it("react 0x05 - task 2", () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>,
		);

		const person = {
			email: "random@gmail.com",
			password: "12345",
			isLoggedIn: true,
		};
		const instance = wrapper.instance();
		instance.logIn(person.email, person.password);
		expect(wrapper.state().user).toEqual(person);
	});

	it("react 0x05 - task 2", () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>,
		);

		const person = {
			email: "random@gmail.com",
			password: "12345",
			isLoggedIn: true,
		};
		const instance = wrapper.instance();
		instance.logIn(person.email, person.password);
		expect(wrapper.state().user).toEqual(person);
		instance.logOut();
	});

	it("react 0x05 - task 3", () => {
		const wrapper = mount(
			<AppContext.Provider>
				<App />
			</AppContext.Provider>,
		);

		wrapper.setState({ user, logOut, listNotificationsInitialState });
		wrapper.instance().markNotificationAsRead(0);
		expect(wrapper.state().listNotifications).toHaveLength(3);
	});
});
