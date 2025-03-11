function isPerfectNumber(number) {

    if (number < 1) {
        console.log("It's not so perfect.")
    }

    let divSum = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divSum += i;
        }

    }
    if (divSum == number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}


isPerfectNumber(6)
