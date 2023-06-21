import { shallow, mount } from "enzyme";
import Header from "./Header.js";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import { user, logOut, AppContext } from "../App/AppContext.js";

describe("<Header />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it("renders <Header /> component", () => {
		mount(
			<AppContext.Provider value={{ user, logOut }}>
				<Header />
			</AppContext.Provider>,
		);
	});

	it("test image eixsts", () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<Header />
			</AppContext.Provider>,
		);
		expect(wrapper.find("img")).toHaveLength(1);
		expect(wrapper.find("h1")).toHaveLength(1);
	});

	it("react 0x05 - task 2", () => {
		const person = {
			user: {
				email: "random@gmail.com",
				password: "12345",
				isLoggedIn: false,
			},
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={{ user: person.user, logOut: person.user.logOut }}>
				<Header />
			</AppContext.Provider>,
		);

		expect(wrapper.find("#logoutSection").exists()).toEqual(false);
	});

	it("react 0x05 - task 2", () => {
		const person = {
			user: {
				email: "random@gmail.com",
				password: "12345",
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={{ user: person.user, logOut: person.user.logOut }}>
				<Header />
			</AppContext.Provider>,
		);

		expect(wrapper.find("#logoutSection").exists()).toEqual(true);
	});

	it("react 0x05 - task 2", () => {
		const logout = jest.fn();
		const person = {
			user: {
				email: "random@gmail.com",
				password: "12345",
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={{ user: person.user, logOut: logout }}>
				<Header />
			</AppContext.Provider>,
		);

		wrapper.find("span").simulate("click");
		expect(logout).toHaveBeenCalled();
		jest.restoreAllMocks();
	});
});
