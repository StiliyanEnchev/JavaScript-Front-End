function sum(number) {
    let oddSum = 0;
    let evenSum = 0;

    for (num of String(number)) {
        if (num % 2 == 0) {
            evenSum += Number(num);
        } else {
            oddSum += Number(num)
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

sum(1000435)