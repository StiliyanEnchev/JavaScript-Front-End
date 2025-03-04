function rotation(numbers, num_rotations) {

    for (i = 0; i < num_rotations; i++) {
        let num = numbers.shift()
        numbers.push(num)
    }

    console.log(...numbers)
}

rotation([51, 47, 32, 61, 21], 2)