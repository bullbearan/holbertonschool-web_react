import { shallow } from "enzyme";
import Notifications from "./Notifications";
import React from "react";
import "../../config/setupTests";

describe("<Notifications />", () => {
	it("renders <Notifications /> component", () => {
		shallow(<Notifications />);
	});

	it("check number of lists", () => {
		const wrapper = shallow(<Notifications displayDrawer={true}/>);
		const items = wrapper.find("NotificationItem");
		expect(items.first().html()).toEqual(
			'<li data-notification-type="default">New course available</li>',
		);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find("div.menuItem")).toHaveLength(1);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find("div.Notifications")).toHaveLength(0);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find("div.menuItem")).toHaveLength(1);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find("div.Notifications")).toHaveLength(1);
	});
});
