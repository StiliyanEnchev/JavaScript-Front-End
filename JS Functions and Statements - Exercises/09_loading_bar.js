function loadingBar(number) {

    if (number == 100) {
        console.log("100% Complete!\n[%%%%%%%%%%]")
        return
    } else if (number == 0) {
        console.log("0% [..........]\nStill loading...")
    } else {
        let resultArr = '[..........]'.split('');
        for (let i = 1; i <= number / 10; i++) {
            resultArr[i] = '%';
        }

        let result = resultArr.join('');
        console.log(`${number}% ${result}\nStill loading...`);
    }
}

loadingBar(0);
loadingBar(50);
loadingBar(100);