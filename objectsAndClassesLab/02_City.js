function city(details) {
    for (let [key, value] of Object.entries(details)) {
        console.log(`${key} -> ${value}`)
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})