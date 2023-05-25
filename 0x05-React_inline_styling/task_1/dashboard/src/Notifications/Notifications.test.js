import { shallow, mount } from "enzyme";
import Notifications from "./Notifications";
import React from "react";
import "../../config/setupTests";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Notifications />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("renders <Notifications /> component", () => {
		shallow(<Notifications />);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find("div.Notifications")).toHaveLength(0);
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
			const wrapper = mount(
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
			const wrapper = mount(
				<Notifications displayDrawer={true} listNotifications={listNotifications} />,
			);
			expect(wrapper.find("NotificationItem")).toHaveLength(1);
		});

		it("render notification item with text 'No new notification for now' with an empty latestNotification array", () => {
			const wrapper = mount(<Notifications displayDrawer={true} />);
			expect(wrapper.find("NotificationItem").html()).toEqual(
				'<li data-notification-type="default">No new notification for now</li>',
			);
		});

		it("0x04. React component - task 2", () => {
			const wrapper = shallow(<Notifications displayDrawer />);
			console.log = jest.fn();
			const instance = wrapper.instance();
			const id = 1;
			instance.markAsRead(id);
			expect(console.log).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
			jest.restoreAllMocks();
		});

		it("0x04. React component - task 11", () => {
			listNotifications = [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
			];

			const wrapper = shallow(
				<Notifications displayDrawer listNotifications={listNotifications} />,
			);
			const shouldComponentUpdate = jest.spyOn(
				Notifications.prototype,
				"shouldComponentUpdate",
			);
			wrapper.setProps({ listNotifications: listNotifications });
			expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

			jest.restoreAllMocks();
		});

		it("0x04. React component - task 11", () => {
			listNotifications = [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
			];

			let listNotificationsTwo = [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, type: "urgent", html: { __html: latestNotification } },
			];

			const wrapper = shallow(
				<Notifications displayDrawer listNotifications={listNotifications} />,
			);
			const shouldComponentUpdate = jest.spyOn(
				Notifications.prototype,
				"shouldComponentUpdate",
			);
			wrapper.setProps({ listNotifications: listNotificationsTwo });
			expect(shouldComponentUpdate).toHaveBeenCalled();
			expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

			jest.restoreAllMocks();
		});
	});
});
