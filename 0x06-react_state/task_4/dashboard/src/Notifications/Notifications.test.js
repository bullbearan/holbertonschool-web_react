import { shallow } from "enzyme";
import Notifications from "./Notifications";
import React from "react";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Notifications />", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it("renders <Notifications /> component", () => {
		shallow(<Notifications />);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications />);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find("div.Notifications")).toHaveLength(0);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
	});

	it("check the paragraph", () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
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
	});

	describe("With Notification containing empty listNotifications", () => {
		beforeEach(() => {
			listNotifications = [];
		});

		it("render notification items with an empty latestNotification array", () => {
			const wrapper = shallow(
				<Notifications displayDrawer={true} listNotifications={listNotifications} />,
			);
		});

		it("render notification item with text 'No new notification for now' with an empty latestNotification array", () => {
			const wrapper = shallow(<Notifications displayDrawer={true} />);
		});

		it("0x05. React component - task 0", () => {
			const handleDisplayDrawer = jest.fn();
			const handleHideDrawer = jest.fn();
			const wrapper = shallow(
				<Notifications
					handleDisplayDrawer={handleDisplayDrawer}
					handleHideDrawer={handleHideDrawer}
				/>,
			);
			wrapper.find("#openNotification").simulate("click");
			expect(handleDisplayDrawer).toHaveBeenCalled();
			jest.restoreAllMocks();
		});

		it("0x05. React component - task 0", () => {
			const handleDisplayDrawer = jest.fn();
			const handleHideDrawer = jest.fn();
			const wrapper = shallow(
				<Notifications
					displayDrawer
					handleDisplayDrawer={handleDisplayDrawer}
					handleHideDrawer={handleHideDrawer}
				/>,
			);
			wrapper.find("#closeBtn").simulate("click");
			expect(handleHideDrawer).toHaveBeenCalled();
			jest.restoreAllMocks();
		});
	});
});
