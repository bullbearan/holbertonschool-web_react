import * as data from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity(
	"messages",
	{},
	{
		idAttribute: "guid",
	},
);

const notification = new schema.Entity("notifications", {
	author: user,
	context: message,
});

const normalizedData = normalize(data.default, [notification]);

export { normalizedData };

export function getAllNotificationsByUser(userId) {
	const notifications = normalizedData.entities.notifications;
	const messages = normalizedData.entities.messages;

	const res = [];

	for (const property in notifications) {
		if (notifications[property].author === userId) {
			res.push(messages[notifications[property].context]);
		}
	}
	return res;
}

const notificationsNormalizer = (data) => {
	const normalizedData = normalize(data, [notification]);
	return normalizedData.entities;
};

export default notificationsNormalizer;
