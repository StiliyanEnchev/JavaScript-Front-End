function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let pattern = input.value;
    let result = document.getElementById('result');

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    for (let row of rows) {
        let emailCol = row.children[1]
        if (emailCol.textContent == pattern) {
            row.remove();
            result.textContent = 'Deleted'
        } else {
            result.textContent = 'Not found.'

        }
    }
}
