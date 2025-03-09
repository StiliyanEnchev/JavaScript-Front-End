function factorialDivision(a, b) {
    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }
    return (factorial(a) / factorial(b)).toFixed(2);
}