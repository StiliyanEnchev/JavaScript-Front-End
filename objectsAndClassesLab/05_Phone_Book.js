function phoneBook(input) {
    associativeArray = {};
    for (let line of input) {
        let details = line.split(' ');
        let name = details[0];
        let number = details[1];
        associativeArray[name] = number;
    }

    for (let key in associativeArray) {
        console.log(`${key} -> ${associativeArray[key]}`)
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)