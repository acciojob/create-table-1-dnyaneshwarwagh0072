function insert_Row() {
    // Get the table element by its ID
    let table = document.getElementById('sampleTable');

    // Create a new table row element
    let newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create the left cell (New Cell1)
    let leftCell = newRow.insertCell(0);
    leftCell.textContent = 'New Cell1';

    // Create the right cell (New Cell2)
    let rightCell = newRow.insertCell(1);
    rightCell.textContent = 'New Cell2';
}
