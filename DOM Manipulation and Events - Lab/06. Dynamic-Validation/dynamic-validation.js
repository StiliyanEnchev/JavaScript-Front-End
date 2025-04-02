document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', () => {
        let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (emailInput.value.match(emailPattern)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });
}
