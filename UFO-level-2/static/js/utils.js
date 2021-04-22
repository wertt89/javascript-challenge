// Function for creating table with data
const createTable = (data, tableBody) => {
  // For-looping through all items in the data array
  data.forEach(ufo => {
    // Inserting a new row (tr) at the end of the last row
    let newRow = tableBody.append('tr');
    // Inserting a new cell (td) into the row at index, creating text nodes for each and appending text node to cell
    Object.entries(ufo).forEach(([key, value]) => newRow.append('td').text(value.toString()));
  });
};