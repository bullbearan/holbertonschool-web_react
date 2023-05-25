import { shallow } from "enzyme";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import "../../config/setupTests";
import BodySection from "./BodySection";

describe("0x04. React component", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("0x04. React component - task 6", () => {
		shallow(<BodySection />);
	});

	it("0x04. React component - task 6", () => {
		const wrapper = shallow(
			<BodySection title="test title">
				<p>test children node</p>
			</BodySection>,
		);
		const h2 = wrapper.find("h2");
		const p = wrapper.find("p");
		expect(h2).toHaveLength(1);
		expect(h2.text()).toEqual("test title");

		expect(p).toHaveLength(1);
		expect(p.text()).toEqual("test children node");
	});

	it("0x04. React component - task 6", () => {
		const wrapper = shallow(
			<BodySection title="test title">
				<p>test children node</p>
			</BodySection>,
		);
		const div = wrapper.find(".bodySection").first();
		expect(div.exists()).toEqual(true);
	});
});
