function censor(text, searched_word) {
    let number = 0;
    separated_text = text.split(' ')
    for (word of separated_text) {
        if (word == searched_word) {
            number += 1;
        }
    }

    console.log(number)
}

censor('This is a word and it also is a sentence',
'is'
)
censor('softuni is great place for learning new programming languages',
'softuni')