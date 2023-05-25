import { shallow } from "enzyme";
import Footer from "./Footer.js";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import "../../config/setupTests";

describe("<Footer />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	
	it("renders <Footer /> component", () => {
		shallow(<Footer />);
	});

	it("test footer includes copyright test", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text().includes("Copyright")).toEqual(true);
	});
});
