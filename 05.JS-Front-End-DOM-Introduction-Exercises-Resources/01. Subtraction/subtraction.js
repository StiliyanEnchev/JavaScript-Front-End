function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let result = document.getElementById('result');
    console.log(Number(firstNumber))
    console.log(Number(secondNumber))

    result.textContent += result.textContent + String((Number(firstNumber) - Number(secondNumber)))
}