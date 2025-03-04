function solve(words, sentence) {
    let s_words = words.split(', ');

    for (let word of s_words) {
        sentence = sentence.replace('*'.repeat(word.length), word);
    }

    console.log(sentence);
}


solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)