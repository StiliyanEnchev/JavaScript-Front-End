function convert(json) {
    let object = JSON.parse(json)
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')