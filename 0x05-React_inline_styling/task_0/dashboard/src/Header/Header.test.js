import { shallow } from "enzyme";
import Header from "./Header.js";
import React from "react";

describe("<Header />", () => {
	it("renders <Header /> component", () => {
		shallow(<Header />);
	});

	it("test image eixsts", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find("img")).toHaveLength(1);
		expect(wrapper.find("h1")).toHaveLength(1);
	});
});
