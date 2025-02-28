function sum_digits(number) {
    let string = String(number);
    let sum = 0;
    
    for (let char of string) {
        sum += Number(char)
    }
    console.log(sum)
}

sum_digits(245678)