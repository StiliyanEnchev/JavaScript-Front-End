function splitter(sentence) {
    let regex = /[A-Z][a-z]*/g
    let matches = sentence.match(regex);
    let result = []
    for (match of matches) {
        result.push(match)
    }
    console.log(result.join(', '))
}

splitter('ThisIsSoAnnoyingToDo')