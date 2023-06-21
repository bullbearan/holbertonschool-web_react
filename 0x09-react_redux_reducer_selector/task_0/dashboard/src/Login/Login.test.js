import { shallow } from "enzyme";
import Login from "./Login.js";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Login />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it("renders <Login /> component", () => {
		shallow(<Login />);
	});

	it("test input eixsts", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find("input")).toHaveLength(2);
		expect(wrapper.find("label")).toHaveLength(2);
	});

	it("0x05 react - task 1", () => {
		const props = {
			isLoggedIn: false,
			email: "",
			password: "",
			enableSubmit: false,
		};
		let wrapper = shallow(<Login {...props} />);
		expect(wrapper.find("button").prop("disabled")).toEqual(true);
	});

	it("0x05 react - task 1", () => {
		const wrapper = shallow(<Login />);
		const email = wrapper.find("#email");
		const password = wrapper.find("#password");
		email.simulate("change", {
			target: { name: "email", value: "random@gmail.com" },
		});
		password.simulate("change", {
			target: { name: "password", value: "12345" },
		});

		const submit = wrapper.find("[type='submit']");
		expect(submit.prop("disabled")).toEqual(false);
	});
});
