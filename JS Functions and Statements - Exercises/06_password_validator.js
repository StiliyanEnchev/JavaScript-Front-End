function passwordValidator(password) {
    errors = []


    if (password.length > 10 || password.length < 6) {
        errors.push("Password must be between 6 and 10 characters")
    }

    for (let char of password) {
        if (!/[a-zA-Z0-9]/.test(char)) {  
            errors.push("Password must consist only of letters and digits");
            break; 
        }
    }


    let digitPattern = /\d.*\d/;
    if (!digitPattern.test(password)) {
        errors.push("Password must have at least 2 digits")
    }


    if (errors.length == 0) {
        console.log("Password is valid")
    } else {
        console.log(errors.join('\n'))
    }


}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')