function perfectNumber(num) {
    let sum = [...Array(num).keys()].filter(i => i > 0 && num % i === 0).reduce((a, b) => a + b, 0);
    return sum === num ? 'We have a perfect number!' : "It's not so perfect.";
}