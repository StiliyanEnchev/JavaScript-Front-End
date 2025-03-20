function solve(string) {
    let words = string.toLowerCase().split(' ');
    let dictionary = {};
    let result = '';

    for (word of words) {
        
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = 1
        } else
            dictionary[word] += 1
    }

    for (word in dictionary) {
        let number = Number(dictionary[word]);
        let name = word;

        if (number % 2 != 0) {
            result += ` ${word}` 
        }
    }

    console.log(result)
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')