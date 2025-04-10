function attachEvents() {
    let submitButton = document.getElementById('submit');
    let forecastSection = document.getElementById('forecast');
    let currentConditions = document.getElementById('current');
    let upcomingForecast = document.getElementById('upcoming');

    submitButton.addEventListener('click', getLocation);

    async function getLocation() {
        let locationInput = document.getElementById('location');
        let loc = await fetch('http://localhost:3030/jsonstore/forecaster/locations/')

        if (!loc.ok) {
            alert('Request error');
            throw new Error('Request error');
        }

        let data = await loc.json();

        for (let city of data) {
            if (city.code == locationInput.value) {
                console.log(locationInput.value)
            }
        }
    }
}

attachEvents();
