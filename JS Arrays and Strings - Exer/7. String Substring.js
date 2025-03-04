function substring(word, sentance) {
    let s_sentence = sentance.split(' ');
    found = false
    for (let s_word of s_sentence) {
        if (s_word.toLowerCase() == word.toLowerCase()) {
            found = true
            break
        }

    }
    if (found) {
        console.log(word)

    } else {
        console.log(`${word} not found!`)

}}






substring('javascript',
    'JavaScript is the best programming language'
)

substring('python',
    'JavaScript is the best programming language'
)