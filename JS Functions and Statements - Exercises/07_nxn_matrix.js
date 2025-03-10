function matrixMaker(n) {
    allNumbers = n * n
    result = []
    for (let i = 0; i < allNumbers; i++) {
        
        if (result.length % n == 0){
            result.push(`\n${n}`)

        } else {
            result.push(n)

        }

    }
    console.log(result.join(' '))
}

matrixMaker(5)
