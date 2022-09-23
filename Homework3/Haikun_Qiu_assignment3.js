/*

Question 1

Given the following array and implement the table dynamically

*/
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
let myDiv = document.querySelector("#table");
let table = document.createElement("table");
let headerRow = document.createElement("tr");

tableInfo.tableHeader.map((headerText) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

tableInfo.tableContent.forEach((emp) => {
  let row = document.createElement("tr");
  Object.values(emp).forEach((text) => {
    let cell = document.createElement("td");
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    row.appendChild(cell);
  });
  table.appendChild(row);
});
myDiv.appendChild(table);
/*

  Question 2
  Given the array and generate order list and unordered list dynamically as following:

  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let ol = document.getElementById("ol");
list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ol.appendChild(li);
});

let ul = document.querySelector("#ul");
let nodes = list.map((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
});
ul.append(...nodes);
/*

  Question 3
  Given a array and implement a dropdown list with the following options dynamically
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list

  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.querySelector(".cities");
dropDownList.map(({ value, content }) => {
  let options = document.createElement("option");
  options.setAttribute("value", value);
  options.textContent = content;
  select.appendChild(options);
});
