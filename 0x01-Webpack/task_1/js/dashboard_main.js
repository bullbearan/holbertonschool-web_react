import $ from "jquery";
import _ from "lodash";

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");

let count = 0;
function updateCounter() {
	count += 1;
	$("#count").text(`${count} clicks on the button`);
}

const button = $("<button>Click here to get started</button>").on(
	"click",
	_.debounce(updateCounter, 300, {
		leading: true,
		trailing: false,
	}),
);

$("body").append(button);
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");
