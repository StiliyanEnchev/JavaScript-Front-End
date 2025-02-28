function same_number_check(number) {
    let sum = 0;
    let answer = true;
    let firstDigit = String(number)[0];

    for (let num of String(number)) {
        sum += Number(num);

        if (num != firstDigit) {
            answer = false;
        }
    }



    console.log(answer)
    console.log(sum)
}

same_number_check(2222222)
same_number_check(1234)