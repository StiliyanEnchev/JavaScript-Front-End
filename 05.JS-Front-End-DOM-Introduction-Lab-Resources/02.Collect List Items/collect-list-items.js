function extractText() {
    let items = Array(document.getElementById('items'));
    
    for (item of items) {
        document.getElementById('result').textContent = item.textContent
    }
}