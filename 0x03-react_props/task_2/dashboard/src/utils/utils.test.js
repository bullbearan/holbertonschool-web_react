import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("Get the current full year", () => {
	expect(getFullYear()).toEqual(new Date().getFullYear());
});

describe("Get footer copy", () => {
	test("If it's true", () => {
		expect(getFooterCopy(true)).toEqual("Holberton School");
	});

	test("If it's false", () => {
		expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
	});
});

test("Get latest notification", () => {
	expect(getLatestNotification()).toEqual(
		"<strong>Urgent requirement</strong> - complete by EOD",
	);
});
