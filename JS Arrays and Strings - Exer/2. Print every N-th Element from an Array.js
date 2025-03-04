function solve(array, number) {
    let result = [];

    for (let ind = 0; ind < array.length; ind++) {
        if (ind % number == 0 ) {
            result.push(array[ind])
        }

    }

    return result
}

solve(['dsa',
    'asd', 
    'test', 
    'tset'], 
    2
    
    
)