function meetings(detailsAsArray) {
    schedule = {}
    for (input of detailsAsArray) {
        let [day, name] = input.split(' ') 
        
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            schedule[day] = name
            console.log(`Scheduled for ${day}`)
        }

    }

    for (let input of Object.keys(schedule)) {
        console.log(`${input} -> ${schedule[input]}`)
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   )