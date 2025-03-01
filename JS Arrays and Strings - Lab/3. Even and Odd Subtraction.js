function solve(masiv) {

    let odd_sum = 0;
    let even_sum = 0;

    for (num of masiv) {
        if (num % 2 == 0) {
            even_sum += num;
        } else {
            odd_sum += num;
        }
    }

    let difference = even_sum - odd_sum;
    console.log(difference)
}

solve([1,2,3,4,5,6])