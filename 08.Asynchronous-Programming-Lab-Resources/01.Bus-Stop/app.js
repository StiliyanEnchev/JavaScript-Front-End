async function getInfo() {
    let stopId = document.getElementById('stopId').value;

    let info;

    try {
        info = await getBusInfo(stopId);
    } catch (err) {
        onError();

        return;
    }

    document.getElementById('stopName').textContent = info.name;

    let list = document.getElementById('buses');

    list.replaceChildren();

    for (let busId in info.buses) {
        let item = document.createElement('li');
        let time = info.buses[busId];
        item.textContent = `Bus ${busId} arrives in ${time} minutes`;

        list.appendChild(item);
    }

    function onError(err) {
        document.getElementById('stopName').textContent = "Error"
    }

    console.log(info)

    async function getBusInfo(busId) {
        let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`

        let response = await fetch(url);

        if (response.status == 204) {
            throw new Error('No info for stop' + stopId);

        }

        let data = await response.json();

        return data;

    }
}
