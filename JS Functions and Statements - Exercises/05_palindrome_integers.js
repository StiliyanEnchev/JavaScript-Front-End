function palindromeIntegers(numbers) {
    return numbers.map(num => {
        let str = num.toString();
        return str === str.split('').reverse().join('');
    });
}