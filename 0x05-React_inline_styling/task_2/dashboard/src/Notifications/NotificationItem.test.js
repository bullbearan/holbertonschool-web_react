import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem.js";
import React from "react";
import "../../config/setupTests";
import { StyleSheetTestUtils } from "aphrodite";

describe("<NotificationItem />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("renders <NotificationItem /> component", () => {
		shallow(<NotificationItem />);
	});

	it("check number of lists", () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		const item = wrapper.find("li");
		expect(item.prop("data-notification-type")).toEqual("default");
		expect(item.text()).toEqual("test");
	});

	it("0x04. React component - task 2", () => {
		const wrapper = shallow(
			<NotificationItem
				type={"urgent"}
				html={{ __html: "<p>test</p>" }}
				markAsRead={(id) => {
					console.log(`Notification ${id} has been marked as read`);
				}}
			/>,
		);
		console.log = jest.fn();
		wrapper.find("li").simulate("click");
		expect(console.log.mock.calls.length).toEqual(1);
		jest.restoreAllMocks();
	});
});
