function oddAndEvenSum(num) {
    let digits = num.toString().split('').map(Number);
    let oddSum = digits.filter(d => d % 2 !== 0).reduce((a, b) => a + b, 0);
    let evenSum = digits.filter(d => d % 2 === 0).reduce((a, b) => a + b, 0);
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}