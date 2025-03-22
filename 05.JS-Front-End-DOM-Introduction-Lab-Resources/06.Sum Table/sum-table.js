function sumTable() {
    let rows = [...document.querySelectorAll('table tr')];
    rows.shift();
    let output = rows.pop();

    let sum = 0;
    
    for (row of rows) {
        let col = row.children[row.children.length - 1];
        sum += Number(col.textContent);
    }

    let outputCol = document.getElementById('sum');
    outputCol.textContent = sum




}