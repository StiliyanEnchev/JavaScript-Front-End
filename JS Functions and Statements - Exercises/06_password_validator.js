function passwordValidator(password) {
    let isValid = true;
    if (!/^[a-zA-Z0-9]{6,10}$/.test(password)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (!/\d{2,}/.test(password)) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    return isValid ? 'Password is valid' : '';
}