function addAndSubtract(a, b, c) {
    function add(x, y) {
        return x + y;
    }
    function subtract(x, y) {
        return x - y;
    }
    return subtract(add(a, b), c);
}