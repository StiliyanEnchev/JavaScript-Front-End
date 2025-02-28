function year (year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        answer = 'yes'
    } else {
        answer = 'no'
    }
    console.log(answer)
}

year(1948)
year(2003)
year(4)