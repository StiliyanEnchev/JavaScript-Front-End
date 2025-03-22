function colorize() {
    let rows = document.querySelectorAll('tbody tr:nth-child(even)');

    for (row of rows) {
        row.style.backgroundColor = 'teal';
    }
}