function solve(num, masiv) {
    let new_masiv = masiv.slice(0, num)
    console.log(...new_masiv.reverse())
}

solve(3, [10, 20, 30, 40, 50])