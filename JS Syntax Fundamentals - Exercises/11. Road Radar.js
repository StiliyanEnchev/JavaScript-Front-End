function radar(speed, area) {
    let output = '';
    let limit = 0;
    let status = ''
    if (area == "motorway") {
        limit = 130
    } else if (area == 'interstate') {
        limit = 90
    } else if (area == 'city') {
        limit = 50
    } else {
        limit = 20
    }

    let difference = speed - limit

    if (difference <= 0) {
        output = `Driving ${speed} km/h in a ${limit} zone`
    } else if (difference > 0) {
        if (difference <= 20) {
            status = "speeding"
        } else if (difference <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }


        output = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    }

    console.log(output)
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')