import { shallow } from "enzyme";
import React from "react";
import "../../config/setupTests";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

describe("0x04. React component", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("0x04. React component - task 6", () => {
		shallow(<BodySectionWithMarginBottom />);
	});
});
