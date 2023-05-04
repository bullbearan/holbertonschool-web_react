interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student1: Student = {
	firstName: "hol",
	lastName: "berton",
	age: 10,
	location: "world",
}

let student2: Student = {
	firstName: "sc",
	lastName: "hool",
	age: 12,
	location: "earth",
}
const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const row: HTMLTableRowElement = thead.insertRow(0);
const cellOne: HTMLTableCellElement = row.insertCell(0);
const cellTwo: HTMLTableCellElement = row.insertCell(1);
cellOne.textContent = "firstName";
cellTwo.textContent = "location";
table.append(thead);

studentsList.forEach((student: Student) => {
	const row: HTMLTableRowElement = tbody.insertRow(0);
	const cellOne: HTMLTableCellElement = row.insertCell(0);
	const cellTwo: HTMLTableCellElement = row.insertCell(1);
	cellOne.textContent = student.firstName;
	cellTwo.textContent = student.location;
  });

table.append(tbody);
document.body.append(table);