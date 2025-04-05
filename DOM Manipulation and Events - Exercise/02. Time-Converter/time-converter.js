document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let main = document.querySelector('main');

    main.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let form = event.target;
        let id = form.id;

        let daysInput = document.getElementById('days-input');
        let hoursInput = document.getElementById('hours-input');
        let minutesInput = document.getElementById('minutes-input');
        let secondsInput = document.getElementById('seconds-input'); 

        let days = 0;

        if (id === 'days') {
            days = parseFloat(daysInput.value);
        } else if (id === 'hours') {
            days = parseFloat(hoursInput.value) / 24;
        } else if (id === 'minutes') {
            days = parseFloat(minutesInput.value) / 1440;
        } else if (id === 'seconds') {
            days = parseFloat(secondsInput.value) / 86400;
        }

        daysInput.value = days.toFixed(2);
        hoursInput.value = (days * 24).toFixed(2);
        minutesInput.value = (days * 1440).toFixed(2);
        secondsInput.value = (days * 86400).toFixed(2);

    
    })
}