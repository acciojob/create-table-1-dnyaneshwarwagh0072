function insert_Row() {
    let table = document.getElementById('sampleTable');

    let newRow = table.insertRow(0);
	
    let leftCell = newRow.insertCell(0);
    leftCell.textContent = 'New Cell1';

    let rightCell = newRow.insertCell(1);
    rightCell.textContent = 'New Cell2';
}
