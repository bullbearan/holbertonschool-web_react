import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem.js";
import React from "react";
import "../../config/setupTests";

describe("<NotificationItem />", () => {
	it("renders <NotificationItem /> component", () => {
		shallow(<NotificationItem />);
	});

	it("check number of lists", () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		const item = wrapper.find("li");
		expect(item.prop("data-notification-type")).toEqual("default");
		expect(item.text()).toEqual("test");
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
		expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
	});
});
