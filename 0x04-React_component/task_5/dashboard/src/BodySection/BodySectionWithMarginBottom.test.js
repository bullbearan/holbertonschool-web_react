import { shallow } from "enzyme";
import React from "react";
import "../../config/setupTests";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("0x04. React component", () => {
	it("0x04. React component - task 6", () => {
		shallow(<BodySectionWithMarginBottom />);
	});

	it("0x04. React component - task 6", () => {
		const wrapper = shallow(
			<BodySectionWithMarginBottom title="test title">
				<p>test children node</p>
			</BodySectionWithMarginBottom>,
		);

		const div = wrapper.find(".bodySectionWithMargin").first();
		expect(div.exists()).toEqual(true);
	});
});
