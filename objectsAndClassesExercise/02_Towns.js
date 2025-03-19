function solve(input) {

    for (row of input) {
        let details = {};
        let [town, lat, long] = row.split(' | ');
        details["town"] = town;
        details['latitude'] = Number(lat).toFixed(2);
        details['longitude'] = Number(long).toFixed(2);
        console.log(details)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )