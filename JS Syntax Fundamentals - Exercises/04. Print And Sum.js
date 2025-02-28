function numbers (a, b) {
    let sum = 0;
    let numbers = '';

    for (a; a <= b; a++) {
        numbers += `${a} `
        sum += a;
    }
    console.log(numbers)
    console.log(`Sum: ${sum}`)
}

numbers(5, 10)
