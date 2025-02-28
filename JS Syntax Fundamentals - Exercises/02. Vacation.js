function vacation(people_number, grout_type, day_of_week) {
    if (grout_type == 'Students') {
        if (day_of_week == 'Friday') {
            price = 8.45
        } else if
            (day_of_week == 'Saturday') {
            price = 9.80
        } else if (day_of_week == 'Sunday') {
            price = 10.46
        }

        if (people_number >= 30) {
            price = price * 0.85
        }

    } else if (grout_type == 'Business') {
        if (day_of_week == 'Friday') {
            price = 10.90
        } else if
            (day_of_week == 'Saturday') {
            price = 15.60
        } else if (day_of_week == 'Sunday') {
            price = 16

        } if (people_number >= 100) {
            people_number -= 10
        }
    } else if (grout_type == 'Regular') {
        if (day_of_week == 'Friday') {
            price = 15
        } else if
            (day_of_week == 'Saturday') {
            price = 20
        } else if (day_of_week == 'Sunday') {
            price = 22.50
        } if (people_number >= 10 && people_number <= 20) {
            price = price * 0.95
        }

    }

    let total = (price * people_number).toFixed(2)
    console.log(`Total price: ${total}`)

}

vacation(30,
    "Students",
    "Sunday"
);
vacation(40,
    "Regular",
    "Saturday"
);