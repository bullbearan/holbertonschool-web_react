import { shallow } from "enzyme";
import Notifications from "./Notifications";
import React from "react";
import "../../config/setupTests";
import { getLatestNotification } from "../utils/utils";

describe("<Notifications />", () => {
	it("renders <Notifications /> component", () => {
		shallow(<Notifications />);
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

	let latestNotification;
	let listNotifications;

	describe("With Notification containing listNotifications", () => {
		beforeEach(() => {
			latestNotification = getLatestNotification();
			listNotifications = [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, type: "urgent", html: { __html: latestNotification } },
			];
		});

		it("render notification items with an existing latestNotification array", () => {
			const wrapper = shallow(
				<Notifications displayDrawer={true} listNotifications={listNotifications} />,
			);
			const items = wrapper.find("NotificationItem");
			expect(items).toHaveLength(3);
		});
	});

	describe("With Notification containing empty listNotifications", () => {
		beforeEach(() => {
			listNotifications = [];
		});

		it("render notification items with an empty latestNotification array", () => {
			const wrapper = shallow(
				<Notifications displayDrawer={true} listNotifications={listNotifications} />,
			);
			expect(wrapper.find("NotificationItem")).toHaveLength(1);
		});

		it("render notification item with text 'No new notification for now' with an empty latestNotification array", () => {
			const wrapper = shallow(<Notifications displayDrawer={true} />);
			expect(wrapper.find("NotificationItem").html()).toEqual(
				'<li data-notification-type="default">No new notification for now</li>',
			);
		});
	});
});
