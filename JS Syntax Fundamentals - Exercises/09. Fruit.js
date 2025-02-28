function fruit_calc(fruit, weight, price_per_kg) {
    weightInKg = weight / 1000
    let money =  weightInKg * price_per_kg;


    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}


fruit_calc('orange', 2500, 1.80)
fruit_calc('apple', 1563, 2.35)