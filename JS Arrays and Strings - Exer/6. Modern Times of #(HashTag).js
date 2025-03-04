

function solve(string) {
    function isOnlyLetters(word) {
        return /^[A-Za-z]+$/.test(word);
    }
    let s_string = string.split(' ')

    for (word of s_string) {
        if ((word[0] == '#') && (word.length >= 1) && (isOnlyLetters(word.slice(1)))) {
        console.log(word.slice(1))
        }
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')