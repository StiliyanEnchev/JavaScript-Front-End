function asciTable (firstSym, SecondSym) {
    let index1 = firstSym.charCodeAt();
    let index2 = SecondSym.charCodeAt();
    let result = [];
    if (index2 < index1) {
        [index1, index2] = [index2, index1];
        }
        
    for (index1; index1 < index2 - 1; index1 ++) {
        result.push(String.fromCharCode(index1 + 1));
    }
    console.log(result.join(' '))
}

asciTable('a', 'd')
asciTable('c', "#")