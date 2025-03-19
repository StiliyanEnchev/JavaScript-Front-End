function solve(currentStock, orderedProducts) {
    let finalStock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        finalStock[currentStock[i]] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);

        if (finalStock.hasOwnProperty(product)) {
            finalStock[product] += quantity; 
        } else {
            finalStock[product] = quantity; 
        }
    }

    for (let product in finalStock) {
        console.log(`${product} -> ${finalStock[product]}`);
    }
}

solve(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);