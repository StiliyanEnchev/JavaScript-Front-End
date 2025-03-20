function solve(array) {
    let wordToTrack = array[0].split(' ');
    let wordCount = {}

    for (word of wordToTrack) {
        wordCount[word] = 0;
    }

    for (let i = 1; i < array.length; i++) {
        let word = array[i];

        if (wordCount.hasOwnProperty(word)) {
            wordCount[word] += 1
        }


    }
    let sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }

}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)