const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// Select the priceValue to update it's value dynamically

const priceValue = document.querySelector("#priceValue");
//*****************************
//Create a table header
function createTableHeader(table) {
  //Create a thead
  const thead = document.createElement("thead");
  //Create a header rows of the table
  const headerRow = document.createElement("tr");
  //Create an Array that will store all the headings for the table
  const headers = ["Name", "Starting Price", "Occupation"];

  //loop over to get every element in the array
  for (let i = 0; i < headers.length; i++) {
    //Create a th
    const th = document.createElement("th");
    //Add the text content to the th
    th.innerText = headers[i];
    //Append the th to the header row
    headerRow.appendChild(th);
  }
  //Append the header row to the thead
  thead.appendChild(tr);
  //Append the thead to the table
  table.appendChild(thead);
}
