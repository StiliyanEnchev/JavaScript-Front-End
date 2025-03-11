function solve(num1, num2){
    let fac1 = 1
    let fac2 = 1
    for (let i = 1; i <= num1; i++) {
        fac1 = fac1 * i
    }
    for (let i = 1; i <= num2; i++) {
        fac2 = fac2 * i
    }
    
    console.log(`${(fac1 / fac2).toFixed(2)}`)

}

solve(5, 2)
