function check(...params) {
    let asString = params.join();
    let count = 0;
    let result = '';
    for (char of asString) {
        if (char == '-') {
            count += 1;
        }

        if (count % 2 == 0) {
            result = 'Positive';
        } else {
            result = 'Negative';
        }
    }

    console.log(result)
}

check(
    5, 12, -15
)

check(
    -6, -12, 14
)