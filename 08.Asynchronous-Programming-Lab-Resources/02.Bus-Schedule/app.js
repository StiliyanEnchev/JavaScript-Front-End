function solve() {
    

    async function depart() {
        let stopID = 'depot'
        let nextStop = await getNextStop(stopID);


        let info = document.getElementById('info');
        let depBtn = document.getElementById('depart');
        let arrBtn = document.getElementById('arrive');

        info.textContent = `Next stop ${nextStop.name}`;
        depBtn.disabled = true;
        arrBtn.disabled = false;
    }

    async function arrive() {
        let stopID = 'depot'
        let nextStop = await getNextStop(stopID);

        let info = document.getElementById('info');
        let depBtn = document.getElementById('depart');
        let arrBtn = document.getElementById('arrive');

        info.textContent = `Arriving at ${nextStop.name}`;
        depBtn.disabled = false;
        arrBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

async function getNextStop(stopID) {
    let res = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + stopID);

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return data;
}

let result = solve();
