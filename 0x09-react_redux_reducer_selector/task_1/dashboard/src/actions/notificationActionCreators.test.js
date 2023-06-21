import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	NotificationTypeFilters,
} from "./notificationActionTypes";

import {
	markAsAread,
	setNotificationFilter,
} from "./notificationActionCreators";

describe("0x08 react - task 5", function () {
	it("0x08 react - task 5", function () {
		const expectedResult = {
			type: MARK_AS_READ,
			index: 1,
		};
		expect(markAsAread(1)).toEqual(expectedResult);
	});

	it("0x08 react - task 5", function () {
		const expectedResult = {
			type: SET_TYPE_FILTER,
			filter: "DEFAULT",
		};
		expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(
			expectedResult,
		);
	});
});
