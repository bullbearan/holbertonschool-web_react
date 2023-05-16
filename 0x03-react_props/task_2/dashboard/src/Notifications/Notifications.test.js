import { shallow } from "enzyme";
import Notifications from "./Notifications";
import React from "react";
import "../../config/setupTests";

describe("<Notifications />", () => {
	it("renders <Notifications /> component", () => {
		shallow(<Notifications />);
	});

	it("check number of lists", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find("NotificationItem")).toHaveLength(3);
	});

	it("check number of lists", () => {
		const wrapper = shallow(<Notifications />);
		const items = wrapper.find("NotificationItem");
		expect(items.first().html()).toEqual(
			'<li data-notification-type="default">New course available</li>',
		);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
	});
});
