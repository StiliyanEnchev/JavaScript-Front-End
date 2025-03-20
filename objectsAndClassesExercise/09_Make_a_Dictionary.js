function solve(array) {
    let object = {};

    for (let jsons of array) {
        const data = JSON.parse(jsons);

        for (let [key, value] of Object.entries(data)) {
            object[key] = value;
        }
    }

    Object.keys(object).sort().forEach(key => {
        console.log(`Term: ${key} => Definition: ${object[key]}`);
    });
}






solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    
)