// from data.js
var tableData = data;

// Adding HTML elements for table, table body and filter button
const table = d3.select('table');
const tableBody = table.select('tbody');
const filterBtn = d3.select('#filter-btn');

// Building the table
createTable(tableData, tableBody);

// Creating variable to hold values of all user input fields
let inputValues = {
  datetime: '',
  city: '',
  state: '',
  country: '',
  shape: '',
};

// Getting the keys of input elements, then using them to name attributes for input elements
const inputKeys = Object.keys(inputValues);
d3.selectAll('.form-control').each(function(d, i) {
  this.setAttribute('name', inputKeys[i]);
});

// Triggering change when changing input value
d3.selectAll('.form-control').on('change', event => (inputValues[d3.event.target.name] = d3.event.target.value));

// Triggering filter button click
filterBtn.on('click', () => {
  // Adding values typed in form input fields
  const filterValues = Object.values(inputValues);
  const tableRows = tableBody.selectAll('tr');
  tableRows.each(function() {
    let row = this;
    // Displaying each row
    row.style.display = '';
    // Getting table data for said rows
    let td = row.getElementsByTagName('td');
    // Converting table data to array for iteration
    let tdArray = Array.from(td);
    tdArray.forEach(function(td, tdIndex) {
      let cell = row.getElementsByTagName('td')[tdIndex];
      if (cell) {
        if (filterValues[tdIndex]) {
          // Displaying row if it matches with user input filters
          if (row.style.display !== 'none' && cell.innerHTML.toUpperCase().indexOf(filterValues[tdIndex].toUpperCase()) > -1) {
            return;
          }
          row.style.display = 'none';
        }
      }
    });
  });
});
