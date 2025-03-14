function convert(name, lastName, hairColor) {
    let object = {name, lastName, hairColor}
    let json = JSON.stringify(object)
    
    console.log(json)

}

convert('George', 'Jones', 'Brown')