import { shallow, mount } from "enzyme";
import Footer from "./Footer.js";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

describe("<Footer />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it("renders <Footer /> component", () => {
		shallow(<Footer />);
	});

	it("test footer includes copyright test", () => {
		const wrapper = mount(<Footer />);
		expect(wrapper.text().includes("Copyright")).toEqual(true);
	});

	it("react 0x05 - task 3", () => {
		const person = {
			user: {
				email: "random@gmail.com",
				password: "12345",
				isLoggedIn: false,
			},
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={person}>
				<Footer />
			</AppContext.Provider>,
		);

		expect(wrapper.find("a")).toHaveLength(0);
	});

	it("react 0x05 - task 3", () => {
		const person = {
			user: {
				email: "random@gmail.com",
				password: "12345",
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={person}>
				<Footer />
			</AppContext.Provider>,
		);

		expect(wrapper.find("a")).toHaveLength(1);
	});
});
