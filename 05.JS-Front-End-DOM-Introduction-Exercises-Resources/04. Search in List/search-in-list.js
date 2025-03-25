function solve() {
    let input = document.getElementById('searchText');
    let list = document.getElementById('towns');
    let output = document.getElementById('result');
    let number = 0;

    for (el of list.children) {
        if (el.textContent.includes(input.value)) {
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline'
            number++;
        } else {
            el.style.fontWeight = '';
            el.style.textDecoration = '';
        }
    }

    output.textContent = `${number} matches found`
}
